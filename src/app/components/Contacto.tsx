"use client";

import { useEffect, useRef, useState } from "react";
import { sendEmailAction } from "@/actions/email";

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const validate = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "El nombre es requerido.";
  } else if (formData.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }

  if (!formData.email.trim()) {
    errors.email = "El correo electrónico es requerido.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "El teléfono es requerido.";
  } else if (!/^\+?[\d\s\-().]{7,20}$/.test(formData.phone.trim())) {
    errors.phone = "Ingresa un número de teléfono válido.";
  }

  if (!formData.projectType) {
    errors.projectType = "Selecciona un tipo de proyecto.";
  }

  if (!formData.message.trim()) {
    errors.message = "El mensaje es requerido.";
  } else if (formData.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
};

export const Contacto = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
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
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // Re-validate field on change if it was already touched
    if (touched[name as keyof FormData]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof FormData],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormData],
    }));
  };

  const handleEnviarCorreo = async () => {
    // Mark all fields as touched
    const allTouched: Partial<Record<keyof FormData, boolean>> = {
      name: true,
      email: true,
      phone: true,
      projectType: true,
      message: true,
    };
    setTouched(allTouched);

    const newErrors = validate(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

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
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "bg-stone-900 border outline-none px-5 py-4 font-body text-sm text-stone-200 placeholder:text-stone-600 transition-colors w-full";
  const inputValid = "border-stone-800 focus:border-gold-600/60";
  const inputError = "border-red-500/70 focus:border-red-500";

  const getInputClass = (field: keyof FormData) =>
    `${inputBase} ${touched[field] && errors[field] ? inputError : inputValid}`;

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
            {/* Name */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Nombre completo"
                className={getInputClass("name")}
              />
              {touched.name && errors.name && (
                <p className="text-xs text-red-400 font-body px-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Correo electrónico"
                className={getInputClass("email")}
              />
              {touched.email && errors.email && (
                <p className="text-xs text-red-400 font-body px-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Teléfono"
                className={getInputClass("phone")}
              />
              {touched.phone && errors.phone && (
                <p className="text-xs text-red-400 font-body px-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Project Type */}
            <div className="flex flex-col gap-1">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${getInputClass("projectType")} appearance-none text-stone-600 [&:not([value=''])]:text-stone-200`}
              >
                <option value="">Tipo de proyecto</option>
                <option>Arquitectura & Diseño</option>
                <option>Ingeniería Estructural</option>
                <option>Construcción Integral</option>
                <option>Urbanismo & Planeación</option>
                <option>Remodelación</option>
                <option>Consultoría</option>
              </select>
              {touched.projectType && errors.projectType && (
                <p className="text-xs text-red-400 font-body px-1">
                  {errors.projectType}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2 flex flex-col gap-1">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                className={`${getInputClass("message")} resize-none`}
              />
              {touched.message && errors.message && (
                <p className="text-xs text-red-400 font-body px-1">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status messages */}
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
