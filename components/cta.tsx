import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-20">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold text-primary-foreground md:text-5xl">
              Pronto para transformar sua gestao?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Junte-se a centenas de empresas que ja otimizaram sua operacao com
              o Znex ERP. Comece gratuitamente, sem cartao de credito.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#planos"
                className="group flex items-center gap-2 rounded-xl bg-card px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-all hover:shadow-xl"
              >
                Criar Conta Gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-primary-foreground/20 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
