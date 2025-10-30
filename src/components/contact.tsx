import Image from "next/image";
import ContactForm from "./contact-components/ContactForm";
import ContactInfoCard from "./contact-components/ContactInfoCard";
import { PiClock } from "react-icons/pi";

export function Contact() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Título */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#2f6f76]">
          Consulte conosco
        </h1>

        {/* Conteúdo: esquerda (info) e direita (form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* COLUNA ESQUERDA: Informações de contato */}
          <div>
            <h2
              className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#218B7E] to-[#3F6A9A] bg-clip-text text-transparent"
            >
              Informações de contato
            </h2>

            <div className="space-y-4">
              <ContactInfoCard
                icon={<PiClock className="text-2xl" />}
                title="Email"
                description="contato@exemplo.com"
              />

              <ContactInfoCard
                icon={<PiClock className="text-2xl" />}
                title="Telefone"
                description="+55 (11) 1234-5678"
              />

              <ContactInfoCard
                icon={<PiClock className="text-2xl" />}
                title="Endereço"
                description="Campus Universitário, Prédio A, Sala 301"
              />
            </div>
          </div>

          {/* COLUNA DIREITA: Formulário */}
          <div>
            <h2
              className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#218B7E] to-[#3F6A9A] bg-clip-text text-transparent"
            >
              Nos envie uma mensagem
            </h2>

            <div className="bg-white shadow-sm rounded-sm p-6">
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
