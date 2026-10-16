# Como mudança entra neste repositório

Site institucional da Virtus Apex (Astro). Vale para qualquer sessão do Claude que trabalhe aqui.

1. **A `main` só recebe mudança por pull request.** Push direto na `main` é só do dono do
   repositório (GitHub `ViniciusBenevides`) e só quando ele pedir. O GitHub recusa o resto.
2. **Comece da `main` atualizada:** `git fetch origin && git switch -c <nome-curto> origin/main`.
3. **Antes de abrir o PR:** `git fetch origin && git merge origin/main`, resolva os conflitos do
   seu lado e rode `npm run build`. Só abra com o build passando.
4. **Abra com `gh pr create`**, em português simples: o que muda, por que e como conferir.
5. **Um PR por entrega, do tamanho que ela tiver.** Não divida uma entrega em vários PRs: cada
   merge publica, e o site ficaria pela metade entre um e outro. Separe os commits por assunto e
   liste os assuntos na descrição: assim dá para revisar por partes. PR à parte só para o que não
   pode esperar a entrega (ex.: consertar algo quebrado no ar). Se for demorar, abra cedo como
   rascunho (`gh pr create --draft`) e traga a `main` para a branch de vez em quando.
6. **Não suba arquivo solto** (print de tela, rascunho) dentro de `src/`.

O merge é do dono, pelo botão "Create a merge commit" (o único habilitado). Push na `main` publica
o site em virtusapex.com, pela Vercel, e cada PR ganha um link de prévia.
