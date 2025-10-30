"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Mensagem enviada com sucesso! ✅");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Erro ao enviar. Tente novamente ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Erro de conexão. Verifique sua internet ❌");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-[#217a73] mb-1">Nome</label>
        <input
          name="name"
          type="text"
          placeholder="Seu nome completo"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
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
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#218B7E]/30"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#217a73] mb-1">Mensagem</label>
        <textarea
          name="message"
          placeholder="Conte um pouco mais..."
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
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

      {status && (
        <p className="text-center text-sm mt-2 text-gray-600">{status}</p>
      )}
    </form>
  );
}
