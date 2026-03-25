"use client";

import Image from "next/image";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "Cliente 1", logo: "/clientes/cliente1.png" },
  { name: "Cliente 2", logo: "/clientes/cliente2.png" },
  { name: "Cliente 3", logo: "/clientes/cliente3.webp" },
  { name: "Cliente 4", logo: "/clientes/cliente4.jpeg" },
  { name: "Cliente 5", logo: "/clientes/cliente5.png" },
  { name: "Cliente 6", logo: "/clientes/cliente6.png" },
  { name: "Cliente 7", logo: "/clientes/cliente7.png" },
  { name: "Cliente 8", logo: "/clientes/cliente8.webp" },
  { name: "Cliente 8", logo: "/clientes/cliente9.webp" },
];

export const Clientes = () => {
  const track = [...clients, ...clients];

  return (
    <section className="py-20 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" />
      <div className="text-center mb-14 px-6">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold-500 mb-3">
          Empresas que confían en nosotros
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-stone-100">
          Nuestros <span className="italic text-gold-gradient">Clientes</span>
        </h2>
        <div className="mt-5 mx-auto w-24 h-px bg-linear-to-r from-transparent via-gold-500 to-transparent" />
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 50%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 10%, black 50%, transparent 100%)",
        }}
      >
        <div className="flex marquee-track">
          {track.map((client, i) => (
            <div
              key={i}
              className="relative shrink-0 mx-10 flex items-center justify-center hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500"
              style={{ width: "140px", height: "60px" }}
            >
              <Image
                fill
                src={client.logo}
                alt={client.name}
                sizes="140px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
