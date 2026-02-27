import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald/5" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-golden/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald-light/50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            <span className="text-sm font-medium text-emerald-dark">
              Versao 3.6.0 disponivel
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Gestao de Assistencia Tecnica levada ao{" "}
            <span className="text-primary">proximo nivel</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            O sistema ERP completo para assistencia tecnica de celulares e
            comercio geral. Do checklist de entrada ao controle financeiro, tudo
            em um so lugar.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#planos"
              className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-emerald/20 transition-all hover:shadow-xl hover:shadow-emerald/30"
            >
              Comece Gratis Agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#recursos"
              className="group flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-emerald-light/30"
            >
              <Play className="h-4 w-4 text-primary" />
              Ver Demonstracao
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-emerald-light text-xs font-bold text-emerald-dark"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">+500 empresas</span>{" "}
              ja confiam no Znex ERP
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="mt-16 w-full max-w-5xl">
            <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-foreground/5">
              <div className="rounded-xl bg-secondary/50 overflow-hidden">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="p-6 md:p-8">
      {/* Top bar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-destructive/60" />
          <div className="h-3 w-3 rounded-full bg-golden/60" />
          <div className="h-3 w-3 rounded-full bg-emerald/60" />
        </div>
        <div className="h-6 w-48 rounded-md bg-border/60" />
        <div className="flex gap-2">
          <div className="h-6 w-6 rounded bg-border/60" />
          <div className="h-6 w-6 rounded bg-border/60" />
        </div>
      </div>

      {/* Stats row */}
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: "OS Abertas", value: "24", change: "+12%" },
          { label: "Receita Mensal", value: "R$ 45.2k", change: "+8.3%" },
          { label: "Pecas em Estoque", value: "1.248", change: "-2%" },
          { label: "Clientes Ativos", value: "386", change: "+15%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border/50 bg-card p-4"
          >
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-foreground md:text-2xl">
              {stat.value}
            </p>
            <p
              className={`mt-1 text-xs font-medium ${
                stat.change.startsWith("+") ? "text-emerald" : "text-destructive"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 rounded-lg border border-border/50 bg-card p-4">
          <p className="mb-3 text-sm font-medium text-foreground">
            Receita Semanal
          </p>
          <div className="flex h-32 items-end gap-2">
            {[40, 65, 55, 80, 60, 90, 75].map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-primary/70 transition-all hover:bg-primary"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full rounded-lg border border-border/50 bg-card p-4 md:w-64">
          <p className="mb-3 text-sm font-medium text-foreground">
            Servicos Recentes
          </p>
          <div className="flex flex-col gap-3">
            {[
              { name: "Troca de Tela", status: "Concluido" },
              { name: "Reparo Placa", status: "Em andamento" },
              { name: "Troca Bateria", status: "Aguardando" },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <span className="text-xs text-foreground">{item.name}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    item.status === "Concluido"
                      ? "bg-emerald-light text-emerald-dark"
                      : item.status === "Em andamento"
                        ? "bg-golden-light text-golden-dark"
                        : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
