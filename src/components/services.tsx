import { Target, LineChart, Users, Activity } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Estratégia & Inteligência de Mercado",
    description:
      "Posicionamos a marca para crescer com base em dados: definimos missão/visão/valores, público-alvo e proposta de valor. Unimos 4Ps a uma SWOT dos concorrentes para revelar diferenciais e oportunidades acionáveis.",
    featured: true,
  },
  {
    icon: LineChart,
    title: "Expansão & Viabilidade Financeira",
    description:
      "Decida onde e como crescer com segurança. Avaliamos mercado, custos e receitas projetadas, calculando VPL, ROI e payback para cada cenário.",
    featured: false,
  },
  {
    icon: Users,
    title: "Experiência & Relacionamento com o Cliente",
    description:
      "Mapeamos a jornada completa (pré-compra ao pós-venda) para reduzir fricções e elevar satisfação. Criamos guidelines de atendimento (scripts, SLAs e rituais) que padronizam a qualidade e aumentam fidelização.",
    featured: false,
  },
  {
    icon: Activity,
    title: "Gestão & Economia da Saúde",
    description:
      "Para clínicas e consultórios: padronizamos processos e métricas e aplicamos avaliações econômicas (ACE/ACU com QALY) para priorizar intervenções com melhor custo-benefício. Resultado: operação eficiente e melhor experiência do paciente.",
    featured: false,
  },
]

export function Services() {
  return (
    <section id="services" className="py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-balance bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
              Primeiro entendemos o seu negócio, depois, construímos a rota. Estratégia, dados e operação trabalhando juntos para gerar impacto real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="group perspective-1000 h-64">
                  {/* Flip container */}
                  <div className="relative shadow-xl w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">
                    {/* Back side - shows initially */}
                    <div className="absolute inset-0 backface-hidden rounded-xs bg-gradient-to-br from-[#416B98] to-[#73AE6F] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto bg-white/20 backdrop-blur-sm mb-4">
                          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-semibold text-2xl text-white px-6">{service.title}</h3>
                      </div>
                    </div>

                    {/* Front side - shows on hover */}
                    <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-xs bg-gradient-to-r from-[#218B7E] to-[#3F6A9A] p-0.75 transition-all">
                      <div className="bg-white rounded-xs p-6 h-full flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-[#218B7E]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-7 h-7 text-[#7B99BA]" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-xl bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </CHANGE> */}
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
