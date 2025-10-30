import { Target, Heart, Eye } from "lucide-react";

export const aboutCards = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Transformamos o mercado de consultoria com serviços de excelência e formação de profissionais qualificados. Priorizamos compromisso social e decisões compartilhadas para gerar impacto real nas organizações.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência nacional em consultoria júnior com a cultura Einstein na busca por soluções inovadoras. Integramos conhecimento acadêmico e resultado prático, reconhecidos pela qualidade e relevância.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Transparência, inovação e confiança guiam nossa excelência técnica e pluralidade de conhecimento. Priorizamos responsabilidade social, liderança e preparação para o mercado.",
  },
];

export function About() {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent">
            Sobre a Einstein Jr.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Somos uma Empresa Júnior formada por alunos da FICSAE (Faculdade Israelita de Ciências da Saúde Albert Einstein)
            fundada em 24 de abril de 2022. Somos compostos por 8 cursos: Administração, Nutrição, Odontologia, Enfermagem,
            Fisioterapia, Psicologia, Medicina e Engenharia Biomédica.
          </p>
        </div>

        {/* 🔹 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {aboutCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group perspective-1000 h-84">
                  {/* Flip container */}
                  <div className="relative shadow-xl w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">
                    {/* Back side - shows initially */}
                    <div className="absolute inset-0 backface-hidden rounded-xs bg-gradient-to-br from-[#416B98] to-[#73AE6F] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto bg-white/20 backdrop-blur-sm mb-4">
                          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-semibold text-2xl text-white px-6">{item.title}</h3>
                      </div>
                    </div>

                    {/* Front side - shows on hover */}
                    <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-xs">
                    {/* Halo gradiente exibido no hover */}
                    <div className="absolute -inset-0.5 rounded-xs bg-gradient-to-br from-[#3F6A9A] to-[#218B7E] opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
                      <div className="relative bg-white rounded-xs p-6 h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-[#218B7E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-7 h-7 text-[#7B99BA]" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-xl bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </CHANGE> */}
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}








