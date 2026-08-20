"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("in-view");
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <Image
        fill
        src="/images/background.jpeg"
        sizes="1550px"
        alt=""
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-stone-950/60" />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,136,26,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(200,136,26,0.04)_1px,transparent_1px)] bg-size-[80px_80px]" />
        <div
          className="absolute inset-0 bg-radial-gradient"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(92,26,42,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <p className="opacity-0 animate-fade-up delay-100 font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-8">
          Ingeniería Civil · Arquitectura · Topografía
        </p>
        <div className="opacity-0 animate-fade-up delay-200 flex justify-center mb-12">
          <Image
            width={100}
            height={100}
            src="/logo.png"
            alt="Ingenierías Mexxica"
            className="h-40 w-auto animate-float drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(200,136,26,0.25))" }}
          />
        </div>

        <h1 className="opacity-0 animate-fade-up delay-300 font-display text-6xl md:text-8xl font-light leading-none tracking-tight mb-6">
          <span className="text-stone-100">Tu proyecto</span>
          <br />
          <span className="text-gold-gradient italic">Nuestro trabajo</span>
        </h1>

        <p className="opacity-0 animate-fade-up delay-400 font-body text-base md:text-lg font-light text-stone-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Desarrollamos proyectos de ingeniería civil y topografía
        </p>

        <div className="opacity-0 animate-fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#servicios"
            className="px-8 py-4 border border-stone-700 text-stone-300 font-body font-medium text-sm tracking-widest uppercase hover:border-gold-600/60 hover:text-gold-400 transition-all duration-300"
          >
            Ver Servicios
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
              ↓
            </span>
          </a>
          <a
            href="#quienes-somos"
            className="px-8 py-4 border border-stone-700 text-stone-300 font-body font-medium text-sm tracking-widest uppercase hover:border-gold-600/60 hover:text-gold-400 transition-all duration-300"
          >
            Quiénes Somos
          </a>
        </div>
      </div>

      <div className="absolute top-24 left-8 w-16 h-16 border-t border-l border-gold-700/30" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t border-r border-gold-700/30" />
      <div className="absolute bottom-24 left-8 w-16 h-16 border-b border-l border-gold-700/30" />
      <div className="absolute bottom-24 right-8 w-16 h-16 border-b border-r border-gold-700/30" />
    </section>
  );
};
