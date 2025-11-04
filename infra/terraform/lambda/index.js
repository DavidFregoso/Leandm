const { randomUUID } = require('crypto');
const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB();
const ses = new AWS.SES({ region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION });

const TURNSTILE_ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

exports.handler = async (event) => {
  if (!event.body) {
    return response(400, { message: 'Solicitud inválida' });
  }

  const body = JSON.parse(event.body);
  const {
    nombre,
    empresa,
    email,
    telefono,
    comentarios,
    leadType = 'lead',
    turnstileToken,
    origin
  } = body;

  if (!turnstileToken) {
    return response(400, { message: 'Token de validación requerido' });
  }

  const valid = await validateTurnstile(turnstileToken, event.requestContext?.http?.sourceIp);
  if (!valid.success) {
    return response(400, { message: 'Validación Turnstile fallida', details: valid['error-codes'] });
  }

  const timestamp = new Date().toISOString();
  const id = randomUUID();

  await dynamo
    .putItem({
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: { S: id },
        nombre: { S: nombre || '' },
        empresa: { S: empresa || '' },
        email: { S: email || '' },
        telefono: { S: telefono || '' },
        comentarios: { S: comentarios || '' },
        leadType: { S: leadType },
        origin: { S: origin || '' },
        createdAt: { S: timestamp }
      }
    })
    .promise();

  await ses
    .sendEmail({
      Source: process.env.SES_SENDER,
      Destination: {
        ToAddresses: [process.env.SES_RECIPIENT || process.env.SES_SENDER]
      },
      Message: {
        Subject: { Data: `Nuevo lead (${leadType}) - LEAN DATA MANAGER`, Charset: 'UTF-8' },
        Body: {
          Text: {
            Data: `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\nTeléfono: ${telefono}\nComentarios: ${comentarios}\nOrigen: ${origin}\nID: ${id}\nFecha: ${timestamp}`,
            Charset: 'UTF-8'
          }
        }
      }
    })
    .promise();

  return response(200, { message: 'Lead registrado', id });
};

async function validateTurnstile(token, remoteip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const params = new URLSearchParams();
  params.append('secret', secret);
  params.append('response', token);
  if (remoteip) {
    params.append('remoteip', remoteip);
  }

  const res = await fetch(TURNSTILE_ENDPOINT, {
    method: 'POST',
    body: params
  });

  if (!res.ok) {
    return { success: false, 'error-codes': ['turnstile_http_error'] };
  }

  return res.json();
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'OPTIONS,POST'
    },
    body: JSON.stringify(body)
  };
}
