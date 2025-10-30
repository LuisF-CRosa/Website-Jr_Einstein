"use client";

import { ArrowRight } from "lucide-react";

export function Inicio() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-6 md:px-20 text-white z-10">
    <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4 text-center md:text-left">
      Consultoria Jr. Einstein
    </h1>

    <p className="max-w-4xl mb-6 text-xl md:text-3xl lg:text-3xl text-center md:text-left">
      Soluções empresariais inovadoras desenvolvidas pela Faculdade Albert Einstein.
      Transformamos conhecimento acadêmico em resultados concretos para o seu negócio.
    </p>

    <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
      <button
        type="button"
        onClick={() => scrollToSection("contact")}
        className="w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-sm font-semibold text-lg
                  bg-white text-[#416B98]
                  hover:bg-gray-100 hover:cursor-pointer
                  transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <span>Quero Consultoria</span>
        <ArrowRight className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => scrollToSection("cases")}
        className="w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-sm text-white font-semibold text-lg
                  border-2 border-white
                  bg-transparent
                  hover:bg-white hover:text-[#416B98]
                  hover:cursor-pointer
                  transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <span>Nossos Cases</span>
      </button>
    </div>
  </div>
);



}
