import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "R$ 0",
    period: "",
    description: "Perfeito para comecar e conhecer o sistema.",
    highlighted: false,
    features: [
      "1 Usuario",
      "Ate 30 Vendas/OS por mes",
      "PDV e Estoque basico",
      "Suporte basico por email",
      "Relatorios simplificados",
    ],
    cta: "Comecar Gratis",
  },
  {
    name: "Standard",
    price: "R$ 89",
    period: ",90/mes",
    description: "Ideal para lojas em crescimento.",
    highlighted: true,
    features: [
      "Ate 2 Usuarios",
      "Vendas/OS Ilimitadas",
      "Backup Diario automatico",
      "Suporte Comercial prioritario",
      "Relatorios completos",
      "Integracao PIX",
    ],
    cta: "Assinar Agora",
  },
  {
    name: "Premium",
    price: "R$ 149",
    period: ",90/mes",
    description: "Para operacoes que exigem o maximo.",
    highlighted: false,
    badge: "Mais popular",
    features: [
      "Ate 5 Usuarios",
      "Vendas/OS Ilimitadas",
      "Backup em Tempo Real",
      "Suporte VIP 24/7",
      "API e Integracoes avancadas",
      "Comando Quantum incluso",
      "Relatorios personalizados",
    ],
    cta: "Assinar Premium",
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Planos
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Escolha o plano ideal para o seu negocio
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Comece gratuitamente e escale conforme sua operacao cresce. Sem
            surpresas, sem taxas ocultas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? "border-primary bg-card shadow-xl shadow-emerald/10"
                  : "border-border bg-card hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-golden px-3 py-1">
                  <Star className="h-3 w-3 text-golden-dark" />
                  <span className="text-xs font-semibold text-golden-dark">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-light">
                      <Check className="h-3 w-3 text-emerald" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`rounded-xl px-6 py-3.5 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground shadow-lg shadow-emerald/20 hover:shadow-xl hover:shadow-emerald/30"
                    : "border border-border bg-secondary text-foreground hover:border-primary/30 hover:bg-emerald-light/30"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
