import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex items-center gap-6">
          <a href="#/privacy" className="hover:text-gray-900 underline-offset-2 hover:underline">
            Aviso de Privacidad
          </a>
          <a href="#/terms" className="hover:text-gray-900 underline-offset-2 hover:underline">
            Términos y Condiciones
          </a>
        </nav>

        <p className="text-center">
          Powered by{" "}
          <a
            href="https://www.redycom.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#003366] hover:underline underline-offset-2"
            aria-label="Abrir sitio de Redycom S.A. de C.V. en una nueva pestaña"
          >
            Redycom S.A. de C.V.
          </a>
        </p>
      </div>
    </footer>
  );
}
