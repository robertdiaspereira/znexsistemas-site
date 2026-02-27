"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Posso testar o Znex ERP antes de assinar?",
    answer:
      "Sim! Oferecemos o plano Free com ate 30 vendas/OS por mes, ideal para voce conhecer o sistema sem nenhum compromisso. Nao pedimos cartao de credito.",
  },
  {
    question: "O sistema funciona offline?",
    answer:
      "O Znex ERP e um sistema 100% cloud, entao voce precisa de internet para acessar. Porem, nossa arquitetura garante latencia minima e uptime de 99.98%.",
  },
  {
    question: "Como funciona o suporte tecnico?",
    answer:
      "No plano Free, o suporte e por email. No Standard, voce tem suporte comercial prioritario. Ja no Premium, oferecemos suporte VIP 24/7 com tempo de resposta garantido.",
  },
  {
    question: "Consigo migrar meus dados de outro sistema?",
    answer:
      "Sim! Nossa equipe de onboarding auxilia na migracao de dados de outros sistemas. No plano Premium, a migracao e completamente assistida por nossa equipe tecnica.",
  },
  {
    question: "O que e o Comando Quantum?",
    answer:
      "O Comando Quantum e nosso painel administrativo avancado, exclusivo do plano Premium. Ele permite monitorar em tempo real a saude do banco de dados, latencia, metricas de retencao e o desempenho de multiplas unidades.",
  },
  {
    question: "O sistema gera nota fiscal?",
    answer:
      "O Znex ERP possui integracao com sistemas de emissao de NF-e e NFC-e. Nos planos Standard e Premium, voce tem acesso completo a essas integracoes.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tire suas duvidas sobre o Znex ERP.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-sm font-semibold text-foreground md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
