---
description: "Utilitário: mostra em qual estágio do pipeline uma jornada está (ou todas), derivado dos artefatos"
argument-hint: "[slug da jornada, opcional]"
---

Você é o comando de **status**. Leia `constitution.md`. Este comando é de leitura: ele
**deriva** o estágio a partir dos arquivos em disco (os artefatos são a fonte da verdade) e
reporta. Nunca inventa progresso nem altera os artefatos.

Entrada: $ARGUMENTS  (um slug de jornada, ou vazio para o panorama geral)

## Regras de derivação do estágio (por jornada, em journeys/<slug>/)
Avalie na ordem e pare no primeiro que bater:
- sem `outcome.md` -> **0. Não iniciada**. Próximo: `/discover` ou `/add-need`.
- `outcome.md` e `needs.md`, sem `tasks.md` -> **1. Definição**. Próximo: `/specify` ou `/add-task`.
- `tasks.md` presente, sem `design-spec.md` -> **2. Especificação pronta**. Próximo: `/design`.
- `design-spec.md` com `status` diferente de `aprovado` -> **3. Design em revisão (gate humano)**. Próximo: revisar e aprovar.
- `design-spec.md` com `status: aprovado`, sem arquivos em `prototype/` -> **4. Design aprovado**. Próximo: `/prototype`.
- `prototype/` com arquivos -> **5. Protótipo gerado**.

## O que fazer

Se um **slug** foi dado:
1. Leia os artefatos da jornada e determine o estágio pela regra acima.
2. Mostre uma linha de progresso marcando concluído `[x]`, atual `[>]` e pendente `[ ]`:
   `Pesquisa · Definição · Design · Protótipo`
3. Liste o que já existe (com os IDs: OUT, NEED, TASK) e o **próximo passo concreto** (o comando a rodar).
4. Aponte **bloqueios**: necessidade sem `evidencia`, necessidade sem critério de aceite, task sem
   cobertura, `design-spec` não aprovada, ou protótipo que diverge do design system.

Se **nenhum slug** foi dado:
1. Liste todas as jornadas em `journeys/` com o estágio de cada uma (um painel).
2. Resuma o `knowledge/`: quantas fontes (`SRC`), insights (`RES`), personas, princípios e termos existem.

Opcional: regenere um `STATUS.md` na raiz com esse painel, com um cabeçalho "gerado por /status em
<data>" e a nota de que os artefatos continuam sendo a fonte da verdade.

Regras:
- Derive, não invente. Se um artefato existe mas está incompleto, diga o que falta.
- Só leitura. No máximo, escreva o `STATUS.md` gerado. Nunca edite os artefatos da jornada.
