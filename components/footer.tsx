export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-golden">
                <span className="text-sm font-bold text-golden-dark">Z</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                NEX <span className="font-medium text-muted-foreground">ERP</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sistema ERP completo para assistencia tecnica de celulares e
              comercio geral.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Produto
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Recursos",
                "Planos",
                "Comando Quantum",
                "Atualizacoes",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2">
              {["Sobre nos", "Blog", "Carreiras", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="flex flex-col gap-2">
              {[
                "Termos de Uso",
                "Politica de Privacidade",
                "LGPD",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Znex Sistemas. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido por{" "}
            <span className="font-medium text-foreground">
              Robert Dias Pereira
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
