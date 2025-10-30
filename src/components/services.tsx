import { Target, LineChart, TrendingUp, Hospital, Route, HeartPulse, Calculator, MessageCircle, Activity } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "ESTRATÉGIA DE MARKETING",
    description:
      "Oferecemos planejamento completo para posicionar e crescer marcas: alinhamos identidade organizacional, público-alvo e ações táticas baseadas nos 4 P's. Inclui etapas desde missão/visão/valores até pesquisas de mercado e recomendações personalizadas, para elevar relevância e resultados tangíveis.",
    featured: true,
  },
  {
    icon: LineChart,
    title: "ANÁLISE DE CONCORRENTES",
    description:
      "Analisamos concorrentes diretos e indiretos com metodologia SWOT: identificamos forças, fraquezas, oportunidades e ameaças do mercado. Fornecemos insights estruturados para embasar decisões competitivas, destacar seus diferenciais e revelar lacunas estratégicas no setor.",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "ANÁLISE FINANCEIRA DE EXPANSÃO",
    description:
      "Avaliamos a viabilidade de crescimento combinando pesquisa de mercado e indicadores financeiros. Incluímos análise de mercado (público-alvo, concorrência e estratégias) e avaliação financeira (custos, projeções de lucro, VPL, ROI e payback). Fornecemos diagnóstico completo para decisões seguras sobre investimentos em expansão.",
    featured: false,
  },
  {
    icon: Calculator,
    title: "ANÁLISE DE CUSTO-EFETIVIDADE (ACE)",
    description:
      "Compara custos e benefícios de intervenções em saúde. Possui o objetivo de identificar a opção de identificar a opção mais eficiente em termos de recursos, auxiliando na tomada de decisões em políticas públicas, planos de saúde ou investimentos em tratamentos.",
    featured: false,
  },
  {
    icon: HeartPulse,
    title: "ANÁLISE CUSTO-UTILIDADE (ACU)",
    description:
      "Uma variação da ACE que incorpora preferências dos pacientes na medição de benefícios, usando metricas como qaly (anos de vida ajustados pela qualidade). Ideal para avaliar tratamentos que impactam não apenas na sobrevida, mas também a qualidade de impacto.",
    featured: false,
  },
  {
    icon: Route,
    title: "MAPEAMENTO DA JORNADA DO CLIENTE",
    description:
      "Oferece uma análise detalhada de todas as interações do cliente com a marca, desde o primeiro contato até o pós-venda. Com uma metodologia em 8 etapas, o mapeamento identifica pontos críticos, oportunidades de melhoria e estratégias para otimizar a experiência do cliente, aumentando a satisfação e a fidelização.",
    featured: false,
  },
  {
    icon: MessageCircle,
    title: "GUIDELINE DE RELACIONAMENTO COM O CLIENTE",
    description:
      "Criamos guidelines de relacionamento para construir e melhorar a interação empresa-cliente. Baseamos em pesquisas de mercado, análise de público-alvo e melhores práticas. Incluímos desde estudo de mercado até implementação e ajustes contínuos para padronizar atendimento, elevar satisfação e fortalecer fidelização.",
    featured: false,
  },
  {
    icon: Hospital,
    title: "PROTOCOLO DE GESTÃO PARA CLÍNICAS E CONSULTÓRIOS",
    description:
      "Desenvolvemos protocolo de gestão para otimizar operação, finanças e experiência do paciente em clínicas e consultórios. Incluímos mapeamento de serviços, jornada do paciente, implementação de sistemas e métricas de feedback. Padronizamos processos para aumentar eficiência operacional e melhorar satisfação de pacientes e colaboradores.",
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

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                // Card com borda animada
                <div
                  key={index}
                  className="group relative h-full rounded-xs p-0.5 transition-all"
                >
                  {/* Halo gradiente exibido no hover */}
                  <div className="absolute -inset-0.5 rounded-xs bg-gradient-to-br from-[#3F6A9A] to-[#218B7E] opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
                  {/* Conteúdo principal do card */}
                  <div className="relative bg-white rounded-xs p-6 h-full flex flex-col">
                    {/* Cabeçalho e texto com leve escala */}
                    <div className="flex flex-col gap-4 transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                      <div className="flex items-start gap-4">
                        {/* Ícone do serviço */}
                        <div className="w-14 h-14 bg-[#c6e1ca]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-[#7B99BA]" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-2xl bg-gradient-to-r from-[#416B98] to-[#73AE6F] bg-clip-text text-transparent mb-3">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      {/* Descrição */}
                      <p className="text-gray-600 leading-relaxed flex-1">{service.description}</p>
                    </div>
                    {/* Barra inferior que aumenta de tamanho */}
                    <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-[#416b98] to-[#73AE6F] transition-all duration-500 group-hover:w-full" />
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
