"use client"

import { useState } from "react"
import {
  ClipboardCheck,
  Fingerprint,
  FileText,
  ShieldCheck,
} from "lucide-react"

const tabs = [
  {
    id: "checklist",
    icon: ClipboardCheck,
    label: "Checklist Digital",
    title: "Checklist de entrada inteligente",
    description:
      "Registre o estado do aparelho na entrada com um checklist dinamico e interativo. Capture arranhoes, trincas, estado da tela e funcionalidades testadas em poucos toques.",
    details: [
      "Captura de fotos e videos do aparelho",
      "Assinatura digital do cliente",
      "Historico completo do dispositivo",
      "Modelo, IMEI e cor registrados automaticamente",
    ],
  },
  {
    id: "senha",
    icon: Fingerprint,
    label: "Senha Visual",
    title: "Desenho de senha de desbloqueio",
    description:
      "Capture o padrao de desbloqueio do aparelho de forma visual e segura. O tecnico registra a senha padrao diretamente no sistema, eliminando anotacoes em papel.",
    details: [
      "Interface de desenho intuitiva",
      "Armazenamento criptografado",
      "Acesso restrito por permissao",
      "Compativel com padroes Android e PIN",
    ],
  },
  {
    id: "laudos",
    icon: FileText,
    label: "Laudos Tecnicos",
    title: "Laudos tecnicos detalhados",
    description:
      "Gere laudos profissionais automaticamente com base nas informacoes do checklist e diagnostico. Envie ao cliente via WhatsApp ou email com um clique.",
    details: [
      "Templates personalizaveis",
      "Envio automatico por WhatsApp",
      "PDF profissional com logo da loja",
      "Historico de laudos por cliente",
    ],
  },
  {
    id: "garantia",
    icon: ShieldCheck,
    label: "Garantia",
    title: "Controle total de garantias",
    description:
      "Gerencie garantias de servicos e pecas com notificacoes automaticas. Saiba exatamente quando cada garantia expira e mantenha o historico completo.",
    details: [
      "Alertas automaticos de vencimento",
      "Vinculo garantia/peca/servico",
      "Relatorios de uso de garantia",
      "Assinatura do cliente no termo",
    ],
  },
]

export function AssistenciaShowcase() {
  const [activeTab, setActiveTab] = useState("checklist")

  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-electric-blue">
            Modulo Principal
          </p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Assistencia Celular Inteligente
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Do recebimento do aparelho ate a entrega ao cliente, cada etapa e
            registrada e rastreada no sistema.
          </p>
        </div>

        {/* Sidebar-inspired layout */}
        <div className="mt-16 flex flex-col gap-6 lg:flex-row">
          {/* Sidebar Tabs */}
          <div className="flex flex-row gap-2 overflow-x-auto lg:w-72 lg:shrink-0 lg:flex-col lg:gap-1 lg:overflow-visible">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all whitespace-nowrap lg:whitespace-normal ${
                  activeTab === tab.id
                    ? "bg-electric-blue-light text-electric-blue shadow-sm"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <tab.icon
                  className={`h-5 w-5 shrink-0 ${
                    activeTab === tab.id
                      ? "text-electric-blue"
                      : "text-muted-foreground"
                  }`}
                />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="flex-1 rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric-blue-light">
                <active.icon className="h-6 w-6 text-electric-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {active.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Feature details grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {active.details.map((detail) => (
                <div
                  key={detail}
                  className="flex items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3"
                >
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-electric-blue" />
                  <span className="text-sm text-foreground">{detail}</span>
                </div>
              ))}
            </div>

            {/* Mockup preview */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-secondary/30 p-6">
              <ChecklistMockup activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChecklistMockup({ activeTab }: { activeTab: string }) {
  if (activeTab === "checklist") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">
            Checklist de Entrada - iPhone 14 Pro
          </span>
          <span className="rounded-full bg-golden-light px-2 py-0.5 text-[10px] font-medium text-golden-dark">
            Em progresso
          </span>
        </div>
        {[
          { item: "Tela sem trincas", checked: true },
          { item: "Touch funcionando", checked: true },
          { item: "Camera traseira", checked: false },
          { item: "Alto-falante", checked: true },
          { item: "Botoes fisicos", checked: false },
        ].map((check) => (
          <div
            key={check.item}
            className="flex items-center gap-3 rounded-lg border border-border/50 bg-card px-4 py-2.5"
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded border ${
                check.checked
                  ? "border-emerald bg-emerald text-card"
                  : "border-border"
              }`}
            >
              {check.checked && (
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-xs text-foreground">{check.item}</span>
          </div>
        ))}
      </div>
    )
  }

  if (activeTab === "senha") {
    return (
      <div className="flex flex-col items-center gap-4">
        <span className="text-xs font-semibold text-foreground">
          Padrao de Desbloqueio
        </span>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                [0, 1, 4, 7, 8].includes(i)
                  ? "border-electric-blue bg-electric-blue/10"
                  : "border-border"
              }`}
            >
              {[0, 1, 4, 7, 8].includes(i) && (
                <div className="h-3 w-3 rounded-full bg-electric-blue" />
              )}
            </div>
          ))}
        </div>
        <span className="text-[10px] text-muted-foreground">
          Padrao salvo com seguranca
        </span>
      </div>
    )
  }

  if (activeTab === "laudos") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">
            Laudo Tecnico #2847
          </span>
          <span className="rounded-full bg-emerald-light px-2 py-0.5 text-[10px] font-medium text-emerald-dark">
            Finalizado
          </span>
        </div>
        <div className="rounded-lg border border-border/50 bg-card p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span className="text-[10px] text-muted-foreground">Aparelho</span>
              <span className="text-[10px] font-medium text-foreground">iPhone 14 Pro Max</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-muted-foreground">Defeito</span>
              <span className="text-[10px] font-medium text-foreground">Tela quebrada + Camera</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-muted-foreground">Diagnostico</span>
              <span className="text-[10px] font-medium text-foreground">Substituicao de LCD + Lente</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-muted-foreground">Valor</span>
              <span className="text-[10px] font-bold text-emerald">R$ 890,00</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-lg bg-emerald/10 px-3 py-2 text-center text-[10px] font-medium text-emerald">
            Enviar via WhatsApp
          </div>
          <div className="flex-1 rounded-lg bg-electric-blue/10 px-3 py-2 text-center text-[10px] font-medium text-electric-blue">
            Gerar PDF
          </div>
        </div>
      </div>
    )
  }

  // Garantia tab
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold text-foreground">
        Garantias Ativas
      </span>
      {[
        { servico: "Troca de Tela", expira: "15/05/2026", dias: 78 },
        { servico: "Bateria Nova", expira: "02/04/2026", dias: 35 },
        { servico: "Reparo Placa", expira: "10/03/2026", dias: 12 },
      ].map((g) => (
        <div
          key={g.servico}
          className="flex items-center justify-between rounded-lg border border-border/50 bg-card px-4 py-3"
        >
          <div>
            <span className="text-xs font-medium text-foreground">
              {g.servico}
            </span>
            <p className="text-[10px] text-muted-foreground">
              Expira em {g.expira}
            </p>
          </div>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
              g.dias > 30
                ? "bg-emerald-light text-emerald-dark"
                : g.dias > 14
                  ? "bg-golden-light text-golden-dark"
                  : "bg-red-100 text-coral"
            }`}
          >
            {g.dias} dias
          </span>
        </div>
      ))}
    </div>
  )
}
