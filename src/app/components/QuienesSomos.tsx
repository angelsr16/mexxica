"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const QuienesSomos = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll(".reveal");
    if (!targets) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-fade-up");
        }),
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const values: { icon: string; title: string; desc: string }[] = [
    {
      icon: "◈",
      title: "Planeación y control desde el inicio",
      desc: "Gestionamos cada proyecto con visión estratégica y estructura clara antes de arrancar.",
    },
    {
      icon: "◈",
      title: "Evidencia técnica documentada",
      desc: "Reportes, bitácoras y entregables que respaldan cada decisión y avance en campo.",
    },
    {
      icon: "◈",
      title: "Atención directa y seguimiento continuo",
      desc: "Un equipo comprometido que acompaña al cliente desde la primera reunión hasta la entrega.",
    },
    {
      icon: "◈",
      title: "Soluciones prácticas y ejecutables",
      desc: "Respondemos a las condiciones reales del terreno con criterio técnico y experiencia probada.",
    },
  ];

  return (
    <section
      id="quienes-somos"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-stone-950 via-stone-900/50 to-stone-950" />
      <div className="absolute top-0 left-0 right-0 h-px aztec-border" />
      <div className="absolute bottom-0 left-0 right-0 h-px aztec-border" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="reveal opacity-0 text-center mb-20">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">
            Nuestra Historia
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-stone-100">
            ¿Quiénes <span className="italic text-gold-gradient">Somos?</span>
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-linear-to-r from-transparent via-gold-500 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
          <div className="reveal opacity-0 relative">
            <div className="relative aspect-4/5 bg-stone-900 overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-25 transition-opacity duration-700"
                style={{
                  backgroundImage: `url(/servicios/obracivil.jpeg`,
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-3 px-8 pb-8">
                <div
                  className="w-8 bg-linear-to-t from-gold-700/40 to-gold-500/10 rounded-t-sm"
                  style={{ height: "120px" }}
                />
                <div
                  className="w-12 bg-linear-to-t from-gold-700/50 to-gold-500/15 rounded-t-sm"
                  style={{ height: "180px" }}
                />
                <div
                  className="w-16 bg-linear-to-t from-gold-700/60 to-gold-500/20 rounded-t-sm"
                  style={{ height: "240px" }}
                />
                <div
                  className="w-12 bg-linear-to-t from-gold-700/50 to-gold-500/15 rounded-t-sm"
                  style={{ height: "160px" }}
                />
                <div
                  className="w-8 bg-linear-to-t from-gold-700/40 to-gold-500/10 rounded-t-sm"
                  style={{ height: "100px" }}
                />
              </div>

              <div className="absolute top-8 left-8">
                <Image
                  width={100}
                  height={100}
                  src="/logo.png"
                  alt=""
                  className="h-24 w-24 object-contain"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 to-transparent" />

              <div className="absolute inset-3 border border-gold-700/20 pointer-events-none" />
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold-500/60" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold-500/60" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-display italic text-2xl text-gold-300/80">
                  &#34;Tu proyecto es nuestro trabajo&#34;
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="reveal opacity-0 delay-200">
              <p className="font-body text-stone-400 leading-relaxed text-base">
                En Ingenierías Mexxica desarrollamos proyectos de ingeniería
                civil y topografía con enfoque técnico, orden administrativo y
                ejecución eficiente.
              </p>
            </div>

            <div className="reveal opacity-0 delay-300">
              <p className="font-body text-stone-400 leading-relaxed text-base">
                Trabajamos para clientes particulares, empresas y obras
                públicas, cuidando calidad, seguridad y normatividad.
              </p>
            </div>

            <div className="reveal opacity-0 delay-400">
              <h2 className="font-body font-bold text-2xl">
                Nuestra propuesta de valor
              </h2>
            </div>

            <div className="reveal opacity-0 delay-500 space-y-4 pt-4">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="shrink-0 w-10 h-10 border border-gold-600/40 flex items-center justify-center text-gold-500 text-lg group-hover:border-gold-400 group-hover:bg-gold-600/10 transition-all duration-300">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-stone-200 tracking-wide mb-1">
                      {v.title}
                    </h4>
                    <p className="font-body text-sm text-stone-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
