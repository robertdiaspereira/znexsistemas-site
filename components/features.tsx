import {
  ClipboardCheck,
  DollarSign,
  Package,
  ShoppingCart,
  Shield,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: ClipboardCheck,
    title: "Checklist Digital",
    description:
      "Checklist de entrada dinamico com desenho de senha de desbloqueio visual e laudos tecnicos detalhados.",
    color: "emerald" as const,
  },
  {
    icon: DollarSign,
    title: "Controle Financeiro",
    description:
      "Fluxo de caixa, contas a pagar/receber, conciliacao bancaria e integracao com PIX e Mercado Pago.",
    color: "emerald" as const,
  },
  {
    icon: Package,
    title: "Estoque de Pecas",
    description:
      "Controle inteligente de pecas e insumos com alertas de nivel baixo e rastreabilidade completa.",
    color: "golden" as const,
  },
  {
    icon: ShoppingCart,
    title: "PDV Integrado",
    description:
      "Frente de caixa agil para venda de acessorios e servicos, integrado ao estoque em tempo real.",
    color: "emerald" as const,
  },
  {
    icon: Shield,
    title: "Controle de Garantia",
    description:
      "Gerencie garantias de servicos e pecas com notificacoes automaticas e historico completo do cliente.",
    color: "golden" as const,
  },
  {
    icon: Zap,
    title: "Relatorios Avancados",
    description:
      "Dashboards interativos com metricas de performance, retencao de clientes e analise de receita.",
    color: "emerald" as const,
  },
]

export function Features() {
  return (
    <section id="recursos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Recursos
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Tudo que voce precisa para gerenciar seu negocio
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Modulos integrados que cobrem todas as operacoes da sua assistencia
            tecnica e comercio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-emerald/5"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                  feature.color === "emerald"
                    ? "bg-emerald-light text-emerald"
                    : "bg-golden-light text-golden-dark"
                }`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
