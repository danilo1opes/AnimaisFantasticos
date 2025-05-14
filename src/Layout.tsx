export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-default text-brand-paragraph">
      {/* mobile */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_120px_minmax(300px,_800px)_1fr]">
        {children}
      </div>
    </div>
  );
}

{
  /* 
      1fr (esquerda)	Espaço que ficara flexível à esquerda
      120px	Coluna fixa — onde pode ser usada para uma sidebar, ícones, ou ate espaçamentos
      minmax(300px, 800px)	Coluna central responsiva — cresce de 300px até no máximo 800px
      1fr (direita)	Espaço que ficara flexivel à direita
      */
}
