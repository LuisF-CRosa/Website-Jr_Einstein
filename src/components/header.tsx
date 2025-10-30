"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type NavItem = { name: string; targetId: string };

const navItems: NavItem[] = [
  { name: "Início", targetId: "home" },
  { name: "Sobre", targetId: "about" },
  { name: "Serviços", targetId: "services" },
  { name: "Cases", targetId: "cases" },
  { name: "Contato", targetId: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      for (const { targetId } of navItems) {
        const sec = document.getElementById(targetId);
        if (!sec) continue;
        const { top, bottom } = sec.getBoundingClientRect();
        if (top <= 80 && bottom >= 80) {
          setActiveSection(targetId);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // bloquear scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // header fica transparente quando o menu mobile está aberto para evitar a "barra branca" indesejada
  const headerBgClass = mobileOpen
    ? "bg-transparent shadow-none"
    : scrolled
    ? // aplicar bg branco apenas em md+; em mobile continuar bg-transparent
      "md:bg-white/80 md:backdrop-blur-sm md:shadow-sm bg-transparent"
    : "bg-transparent";

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${headerBgClass}
      `}
    >
      <div className="mx-auto px-4 py-2 ml-5 mr-5 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* 🔹 Logo + Nome (aparecem somente em lg+) */}
          <Link href="/" className="hidden lg:flex items-center gap-3">
            <div
              className={`relative w-40 h-10 transition-opacity duration-300 ${
                scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <Image
                src="/assets/logos/logo_branco.png"
                alt="Einstein Jr. - Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <span
              className={`text-2xl font-bold tracking-wide transition-all duration-300 ${
                scrolled ? "opacity-0 pointer-events-none" : "opacity-100 text-white"
              }`}
            >
              Einstein Jr.
            </span>
          </Link>

          {/* 🔹 Botão mobile (mostra apenas quando o menu está fechado) */}
          {!mobileOpen && (
            <button
              className={`
                md:hidden fixed top-4 right-4
                w-12 h-12 flex items-center justify-center
                text-2xl rounded-full transition-colors duration-200
                ${scrolled ? "text-gray-800 bg-white shadow" : "text-white bg-transparent"}
                z-60
              `}
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
            >
              <HiMenu />
            </button>
          )}

          {/* 🔹 Nav desktop */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ name, targetId }) => (
              <button
                key={targetId}
                onClick={() => handleClick(targetId)}
                className={`
                  px-4 py-2 font-medium text-md rounded-full transition
                  hover:underline hover:bg-[#e1f2e8]/40
                  ${scrolled ? "text-gray-800" : "text-white"}
                  ${activeSection === targetId ? "underline" : ""}
                `}
              >
                {name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* 🔹 Nav mobile (overlay) */}
      {mobileOpen && (
  <nav
    className="
      md:hidden fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm
      flex flex-col items-center justify-center gap-6 text-xl
      m-0 p-0
    "
  >
    {/* botão de fechar dentro do overlay (top-right) */}
    <button
      onClick={() => setMobileOpen(false)}
      aria-label="Fechar menu"
      className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full text-gray-800 bg-white shadow"
    >
      <HiX />
    </button>

    {navItems.map(({ name, targetId }) => (
      <button
        key={targetId}
        onClick={() => handleClick(targetId)}
        className={`
          px-6 py-3 rounded-lg transition text-gray-800
          ${activeSection === targetId ? "bg-gray-200" : "hover:bg-gray-100"}
        `}
      >
        {name}
      </button>
    ))}
  </nav>
)}
    </header>
  );
}
