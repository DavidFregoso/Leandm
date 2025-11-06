const SocialProof = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#003366]">Empresas que ya tomaron el control de sus datos.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex h-24 items-center justify-center rounded-xl border border-dashed border-[#00B3B3] bg-white text-sm font-semibold uppercase tracking-wide text-[#003366]"
            >
              Logo #{item}
            </div>
          ))}
        </div>
        <blockquote className="mt-12 rounded-3xl border border-[#003366]/20 bg-white p-8 text-center text-lg italic text-[#2E2E2E]">
          “LDM nos mostró que perdíamos 18 minutos por turno en cambios de modelo que no veíamos. Recuperamos la inversión en los
          primeros 3 meses. Ahora no podemos vivir sin el dashboard en tiempo real.”
          <footer className="mt-4 text-sm font-semibold text-[#003366]">— Gerente de Planta, [Empresa]</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default SocialProof;
