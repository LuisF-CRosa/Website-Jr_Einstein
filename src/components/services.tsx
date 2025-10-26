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
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#083D77] mb-6 text-balance">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis, rutrum turpis in,
              viverra urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis,
              rutrum turpis in, viverra urna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-lg bg-white transition-all border-2 border-gray-200 hover:border-[#73AE6F] hover:shadow-md"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#EDF5FC] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-[#416B98]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-xl text-[#083D77] mb-3">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <button className="flex items-center gap-2 text-[#416B98] hover:text-[#73AE6F] font-medium transition-colors group/btn">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}