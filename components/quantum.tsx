import { Activity, Database, Globe, Gauge, Cpu, Signal } from "lucide-react"

export function Quantum() {
  return (
    <section id="quantum" className="relative overflow-hidden py-20 md:py-28">
      {/* Dark background */}
      <div className="absolute inset-0 bg-quantum-bg" />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald/20 bg-emerald/10 px-4 py-1.5">
            <Cpu className="h-4 w-4 text-emerald" />
            <span className="text-sm font-medium text-emerald">
              Comando Quantum
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
            Monitoramento global em tempo real
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-quantum-text">
            Painel administrativo de alto desempenho para gestores e
            franqueadores. Visualize a saude de toda a sua operacao em um unico
            dashboard.
          </p>
        </div>

        {/* Quantum Dashboard Preview */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-quantum-card p-6 shadow-2xl md:p-8">
          {/* Top Stats */}
          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                icon: Activity,
                label: "Uptime",
                value: "99.98%",
                color: "text-emerald",
              },
              {
                icon: Database,
                label: "Saude do Banco",
                value: "Otimo",
                color: "text-emerald",
              },
              {
                icon: Globe,
                label: "Latencia",
                value: "12ms",
                color: "text-golden",
              },
              {
                icon: Signal,
                label: "Churn",
                value: "1.2%",
                color: "text-emerald",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-white/5 p-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  <span className="text-xs text-quantum-text">{stat.label}</span>
                </div>
                <p className={`text-xl font-bold ${stat.color} md:text-2xl`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Activity Graph */}
          <div className="rounded-xl border border-white/5 bg-white/5 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-emerald" />
                <span className="text-sm font-medium text-white">
                  Atividade em Tempo Real
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald" />
                  <span className="text-xs text-quantum-text">Requisicoes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-golden" />
                  <span className="text-xs text-quantum-text">Erros</span>
                </div>
              </div>
            </div>

            {/* Simulated activity chart */}
            <div className="flex h-40 items-end gap-1">
              {Array.from({ length: 30 }).map((_, i) => {
                const height = 20 + Math.abs(Math.sin(i * 0.5) * 70) + (i % 3 === 0 ? 10 : 0)
                const isError = i === 12 || i === 22
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-t transition-all ${
                      isError ? "bg-golden/70" : "bg-emerald/60"
                    }`}
                    style={{ height: `${isError ? 15 : height}%` }}
                  />
                )
              })}
            </div>

            {/* Time labels */}
            <div className="mt-2 flex justify-between">
              <span className="text-[10px] text-quantum-text">00:00</span>
              <span className="text-[10px] text-quantum-text">06:00</span>
              <span className="text-[10px] text-quantum-text">12:00</span>
              <span className="text-[10px] text-quantum-text">18:00</span>
              <span className="text-[10px] text-quantum-text">24:00</span>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs text-quantum-text">Clientes Conectados</p>
              <p className="mt-1 text-2xl font-bold text-white">1.847</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[78%] rounded-full bg-emerald" />
              </div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs text-quantum-text">OS Processadas Hoje</p>
              <p className="mt-1 text-2xl font-bold text-white">3.256</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[92%] rounded-full bg-golden" />
              </div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-4">
              <p className="text-xs text-quantum-text">Tempo Medio de Resposta</p>
              <p className="mt-1 text-2xl font-bold text-emerald">23ms</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[95%] rounded-full bg-emerald" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
