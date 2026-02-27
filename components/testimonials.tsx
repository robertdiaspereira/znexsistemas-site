import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Dono de Assistencia, SP",
    content:
      "O Znex ERP transformou a gestao da minha loja. Antes eu perdia horas com planilhas, agora tenho tudo integrado e automatizado. O checklist digital e um diferencial incrivel.",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Gerente de Loja, MG",
    content:
      "O controle financeiro e o estoque integrado me deram uma visao que eu nunca tive do meu negocio. Recomendo para qualquer assistencia tecnica.",
    rating: 5,
  },
  {
    name: "Felipe Rodrigues",
    role: "Franqueador, RJ",
    content:
      "O Comando Quantum me permite monitorar todas as unidades em tempo real. A latencia e minima e consigo tomar decisoes rapidas baseadas em dados concretos.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Empresas reais compartilhando resultados reais com o Znex ERP.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:shadow-emerald/5"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-golden text-golden"
                  />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-light text-sm font-bold text-emerald-dark">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
