import {
  Smartphone,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react"

const stats = [
  {
    icon: Smartphone,
    value: "50.000+",
    label: "Ordens de servico processadas",
  },
  {
    icon: TrendingUp,
    value: "R$ 12M+",
    label: "Transacionados na plataforma",
  },
  {
    icon: Clock,
    value: "35%",
    label: "Reducao no tempo de atendimento",
  },
  {
    icon: Users,
    value: "500+",
    label: "Empresas ativas",
  },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-light">
                <stat.icon className="h-6 w-6 text-emerald" />
              </div>
              <p className="text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
