"use client";

import React from "react";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Coloque aqui sua lógica de envio (fetch/EmailJS/integração)
    alert("Formulário enviado (exemplo)");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#217a73] mb-1">Nome</label>
        <input
          name="name"
          type="text"
          placeholder="Seu nome completo"
          className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#218B7E]/30"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#217a73] mb-1">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Seu melhor email"
          className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#218B7E]/30"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#217a73] mb-1">Assunto</label>
        <input
          name="subject"
          type="text"
          placeholder="Do que você deseja falar?"
          className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#218B7E]/30"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#217a73] mb-1">Mensagem</label>
        <textarea
          name="message"
          placeholder="Conte um pouco mais..."
          rows={6}
          className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#218B7E]/30"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-sm font-medium text-white bg-gradient-to-r from-[#218B7E] to-[#3F6A9A] hover:opacity-95 transition"
      >
        Enviar
      </button>
    </form>
  );
}
