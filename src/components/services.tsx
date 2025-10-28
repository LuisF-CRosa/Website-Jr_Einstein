import { Briefcase, BarChart3, Settings, GraduationCap } from "lucide-react"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Consultoria estratégica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis, rutrum turpis in, viverra urna.Lorem ipsum dolor sit amet.",
  },
  {
    icon: BarChart3,
    title: "Análise de dados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis, rutrum turpis in, viverra urna.Lorem ipsum dolor sit amet.",
  },
  {
    icon: Settings,
    title: "Gestão de projetos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis, rutrum turpis in, viverra urna.Lorem ipsum dolor sit amet.",
  },
  {
    icon: GraduationCap,
    title: "Mentorias",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis, rutrum turpis in, viverra urna.Lorem ipsum dolor sit amet.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent mb-6 text-balance">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis, rutrum turpis in,
              viverra urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis,
              rutrum turpis in, viverra urna.
            </p>
          </div>

          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#416B98" />
                <stop offset="100%" stopColor="#73AE6F" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-xs hover:bg-gradient-to-r hover:from-[#218B7E] hover:to-[#3F6A9A] p-[2px] transition-all"
                >
                  <div className="bg-white rounded-xs p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-[#218B7E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-[#7B99BA]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-2xl bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent mb-3">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    {/* <button className="flex items-center gap-2 bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent hover:text-[#73AE6F] font-medium transition-colors group/btn">
                      Saiba mais
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}