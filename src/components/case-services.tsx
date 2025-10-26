import { TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react"

const cases = [
  {
    image: "/assets/data-analysis.jpg",
    tag: "Consultoria Estratégica",
    title: "TechStart Solutions",
    metric: "Aumento de 45%",
    metricSubtitle: "Nas vendas",
    icon: TrendingUp,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis.",
  },
  {
    image: "/assets/inovare-retail.jpg",
    tag: "Análise de Dados",
    title: "Inovare Retail",
    metric: "Redução de 32%",
    metricSubtitle: "Nos custos",
    icon: DollarSign,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis.",
  },
  {
    image: "/assets/logistics.jpg",
    tag: "Gestão de Projetos",
    title: "Global Logistics",
    metric: "100%",
    metricSubtitle: "No prazo",
    icon: Clock,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis.",
  },
  {
    image: "/assets/tech-learning.png",
    tag: "Mentorias",
    title: "EdTech Academy",
    metric: "85%",
    metricSubtitle: "De aprovação",
    icon: CheckCircle,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis.",
  },
]

export function SuccessCasesSection() {
  return (
    <section id="cases" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#083D77] mb-6 text-balance">
              Cases de Sucesso
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis, rutrum turpis in,
              viverra urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae lorem sagittis,
              rutrum turpis in, viverra urna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={caseItem.image || "/placeholder.svg"}
                      alt={caseItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#083D77]/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-1.5 bg-[#416B98] text-white text-sm font-medium rounded">
                        {caseItem.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-serif font-bold text-2xl text-white">{caseItem.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#E1F2E8] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#73AE6F]" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-bold text-2xl text-[#083D77]">{caseItem.metric}</p>
                        <p className="text-sm text-gray-600">{caseItem.metricSubtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{caseItem.description}</p>
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
