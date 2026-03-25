"use client";
import { useEffect, useRef } from "react";

interface Service {
  number: string;
  title: string;
  image?: string;
  subtitle: string;
  description: string;
  features: string[];
  accent: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const services: Service[] = [
  {
    number: "01",
    title: "Servicios Topográficos",
    subtitle: "Topografía de Precisión",
    description:
      "Medición, control y representación del territorio con equipos de última generación y personal certificado.",
    image: "/servicios/topografico.jpeg",
    features: [
      "Levantamientos topográficos",
      "Replanteo, trazo y control",
      "Geodesia y georreferenciación",
      "Cálculos y productos cartográficos",
      "Servicios de brigada",
    ],
    accent: "from-maroon/40 to-stone-900",
  },
  {
    number: "02",
    title: "Gestiones ante Dependencias",
    subtitle: "Trámites Públicos y Privados",
    image: "/servicios/gestiones.jpeg",
    description:
      "Acompañamiento integral en procesos administrativos, licitaciones y regularización ante instituciones públicas y privadas.",
    features: [
      "Licitaciones y contratación",
      "Regularización de predios",
      "Documentación técnica y legal",
    ],
    accent: "from-stone-800/80 to-stone-900",
  },
  {
    number: "03",
    title: "Obra Civil",
    subtitle: "Construcción e Infraestructura",
    image: "/servicios/obracivil.jpeg",
    description:
      "Ejecución de obra con rigor técnico, supervisión continua y estricto apego a normas de seguridad y calidad.",
    features: [
      "Terracerías y movimiento de tierras",
      "Urbanización",
      "Pavimentos",
      "Hidrosanitario y pluvial",
      "Estructuras y complementarias",
      "Mantenimiento",
    ],
    accent: "from-gold-900/20 to-stone-900",
  },
  {
    number: "04",
    title: "Estudios de Ingeniería",
    subtitle: "Análisis y Dictámenes Profesionales",
    image: "/servicios/estudiosingenieria.jpeg",
    description:
      "Estudios especializados que sustentan decisiones técnicas con metodología rigurosa y entregables documentados.",
    features: [
      "Seguridad, riesgos y dictámenes",
      "Estudios de pavimentos y materiales",
    ],
    accent: "from-stone-800/60 to-stone-900",
  },
  {
    number: "05",
    title: "Servicios Arquitectónicos",
    subtitle: "Diseño y Representación",
    image: "/servicios/serviciosarquitectonicos.jpeg",
    description:
      "Proyectamos espacios funcionales y estéticos, desde el concepto inicial hasta la documentación ejecutiva.",
    features: [
      "Diseño y anteproyecto",
      "Proyecto arquitectónico",
      "Representación y visualización 3D",
    ],
    accent: "from-maroon/30 to-stone-900",
  },
  {
    number: "06",
    title: "Proyectos Ejecutivos",
    subtitle: "Ingeniería de Detalle",
    image: "/servicios/proyectoejecutivo.jpeg",
    description:
      "Elaboramos proyectos ejecutivos completos con la precisión y el nivel de detalle que exige la construcción profesional.",
    features: [
      "Infraestructura vial y urbana",
      "Hidráulica y drenaje",
      "Estructura y contención",
      "Edificación y equipamiento",
    ],
    accent: "from-stone-800/40 to-stone-900",
  },
  {
    number: "07",
    title: "Renta Técnica",
    image: "/servicios/topografico.jpeg",
    subtitle: "Equipo y Personal Especializado",
    description:
      "Ponemos a tu disposición equipo topográfico profesional con operador calificado y servicios de ploteo de gran formato.",
    features: ["Renta de equipo topográfico con operador", "Renta de plotter"],
    accent: "from-gold-900/20 to-stone-900",
  },
];

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("animate-fade-up");
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="service-card opacity-0 group relative bg-stone-900/60 border border-stone-800 hover:border-gold-700/50 overflow-hidden cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-750 mix-blend-luminosity"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      <div className="absolute inset-0 bg-stone-950/50 group-hover:opacity-20 transition duration-500" />

      <div
        className={`absolute inset-0 bg-linear-to-br ${service.accent} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}
      />

      <div className="absolute top-4 right-6 font-display text-7xl font-bold text-stone-500/20 group-hover:text-stone-500/90 transition-colors duration-300 select-none leading-none">
        {service.number}
      </div>

      <div className="relative p-4 lg:p-8">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-600 mb-3">
          {service.subtitle}
        </p>

        <h3 className="font-display text-2xl lg:text-3xl font-light text-stone-100 mb-4 group-hover:text-white transition-colors">
          {service.title}
        </h3>

        <div className="w-8 h-px bg-gold-600/60 mb-5 group-hover:w-16 transition-all duration-500" />

        <p className="font-body text-sm text-stone-100 leading-relaxed mb-6 transition-colors">
          {service.description}
        </p>

        <ul className="space-y-1">
          {service.features.map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-3 font-body text-xs text-stone-200 group-hover:text-stone-100 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-2 text-gold-500 text-xs font-body font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Más información
          <span>→</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-600/0 to-transparent group-hover:via-gold-600/60 transition-all duration-500" />
    </div>
  );
};

export const Servicios = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("animate-fade-up");
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      className="relative py-32 overflow-hidden bg-stone-950"
    >
      <div className="absolute top-0 left-0 right-0 h-px aztec-border" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(92,26,42,0.12),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="opacity-0 text-center mb-20">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">
            Lo Que Hacemos
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-stone-100 mb-6">
            Nuestros{" "}
            <span className="italic text-gold-gradient">Servicios</span>
          </h2>
          <div className="mx-auto w-24 h-px bg-linear-to-r from-transparent via-gold-500 to-transparent mb-8" />
          <p className="font-body text-stone-400 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales de ingeniería y arquitectura,
            adaptadas a las necesidades específicas de cada cliente y cada
            territorio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-stone-500 mb-6 text-sm">
            ¿Tienes un proyecto en mente? Hablemos.
          </p>
          <a
            href="#contacto"
            className="cursor-pointer! px-8 py-4 border border-stone-700 text-stone-300 font-body font-medium text-sm tracking-widest uppercase hover:border-gold-600/60 hover:text-gold-400 transition-all duration-300"
          >
            Solicitar Cotización
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
