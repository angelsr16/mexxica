"use client";

import { useEffect, useRef, useState } from "react";
import { sendEmailAction } from "@/actions/email";

export const Contacto = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const targets = ref.current?.querySelectorAll(".reveal");
    if (!targets) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-fade-up");
        }),
      { threshold: 0.1 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEnviarCorreo = async () => {
    setLoading(true);
    setStatus("idle");
    try {
      await sendEmailAction(
        "angelsanchezromero09@gmail.com",
        "Nuevo Correo de Contacto",
        "cotizacion-email",
        formData,
      );
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contacto" ref={ref} className="py-32 bg-stone-950 relative">
        <div className="absolute top-0 left-0 right-0 h-px aztec-border" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(92,26,42,0.12),transparent)]" />

        <div className="max-w-5xl mx-auto px-6">
          <div className="reveal opacity-0 text-center mb-16">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-4">
              Trabajemos Juntos
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-stone-100 mb-4">
              ¿Tienes un{" "}
              <span className="italic text-gold-gradient">proyecto?</span>
            </h2>
            <div className="mx-auto w-24 h-px bg-linear-to-r from-transparent via-gold-500 to-transparent mb-8" />
            <p className="font-body text-stone-400 max-w-xl mx-auto">
              Cuéntanos tu visión. Nuestro equipo está listo para convertirla en
              realidad.
            </p>
          </div>

          <div className="reveal opacity-0 grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre completo"
              className="bg-stone-900 border border-stone-800 focus:border-gold-600/60 outline-none px-5 py-4 font-body text-sm text-stone-200 placeholder:text-stone-600 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="bg-stone-900 border border-stone-800 focus:border-gold-600/60 outline-none px-5 py-4 font-body text-sm text-stone-200 placeholder:text-stone-600 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              className="bg-stone-900 border border-stone-800 focus:border-gold-600/60 outline-none px-5 py-4 font-body text-sm text-stone-200 placeholder:text-stone-600 transition-colors"
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="bg-stone-900 border border-stone-800 focus:border-gold-600/60 outline-none px-5 py-4 font-body text-sm text-stone-600 transition-colors appearance-none"
            >
              <option value="">Tipo de proyecto</option>
              <option>Arquitectura & Diseño</option>
              <option>Ingeniería Estructural</option>
              <option>Construcción Integral</option>
              <option>Urbanismo & Planeación</option>
              <option>Remodelación</option>
              <option>Consultoría</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={4}
              className="md:col-span-2 bg-stone-900 border border-stone-800 focus:border-gold-600/60 outline-none px-5 py-4 font-body text-sm text-stone-200 placeholder:text-stone-600 transition-colors resize-none"
            />

            {status === "success" && (
              <p className="md:col-span-2 text-center text-sm font-body text-green-400">
                ✓ Mensaje enviado correctamente.
              </p>
            )}
            {status === "error" && (
              <p className="md:col-span-2 text-center text-sm font-body text-red-400">
                ✗ Hubo un error al enviar. Intenta de nuevo.
              </p>
            )}

            <div className="md:col-span-2 flex justify-center">
              <button
                onClick={handleEnviarCorreo}
                disabled={loading}
                className="group cursor-pointer px-12 py-4 bg-linear-to-r from-gold-700 to-gold-500 text-white font-body font-semibold text-sm tracking-widest uppercase hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Enviando..." : "Enviar Mensaje"}
                {!loading && (
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
