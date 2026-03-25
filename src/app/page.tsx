"use client"
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Clientes } from "./components/Clientes";
import { QuienesSomos } from "./components/QuienesSomos";
import { Servicios } from "./components/Servicios";
import { Contacto } from "./components/Contacto";

export default function Home() {
  return (
    <div className="bg-stone-950">
      <Navbar />
      <Hero />
      <Clientes />
      <QuienesSomos />
      <Servicios />
      <Contacto />
    </div>
  );
}
