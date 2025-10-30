import { Target, Heart, Eye } from "lucide-react";

export const aboutCards = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Transformar o mercado de consultoria oferecendo serviços de excelência que formem profissionais qualificados. Atuamos com compromisso social e promovendo a tomada de decisão compartilhada para gerar impacto real nas organizações.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência nacional em consultoria júnior, trazendo a cultura e a identidade Einstein para a busca contínua por soluções inovadoras. Queremos inspirar práticas que integrem conhecimento acadêmico e resultado prático, reconhecidas pela qualidade e relevância.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Guiados por transparência, inovação e confiança, valorizamos a pluralidade do conhecimento e a excelência técnica em cada projeto. Priorizamos responsabilidade social, liderança, experiência prática e a preparação efetiva dos nossos membros para o mercado.",
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
              <div
                key={index}
                className="
                  relative rounded-sm p-[2px] 
                  bg-transparent shadow-md
                  transition-all duration-300
                  hover:bg-gradient-to-br hover:from-[#416B98] hover:to-[#73AE6F]
                "
              >
                <div className="bg-white rounded-sm p-8 h-full">
                  <div className="w-12 h-12 flex items-center justify-center mb-4 text-[#416B98] group-hover:text-[#416B98] transition-colors duration-300">
                    <Icon className="w-10 h-10" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent transition-all duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}








