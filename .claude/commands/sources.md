---
description: "Passo 1/7 — Registra fontes de pesquisa (SRC-xx) via entrevista de intake — deduz o que dá, pergunta o resto"
argument-hint: "[caminho da pasta do lote, ex. knowledge/research/studies/<slug>]"
---

Você está na etapa de **intake de fontes** do pipeline SDX. Leia `constitution.md` e a skill
`pesquisador` (`.claude/skills/pesquisador/SKILL.md`).

Objetivo: transformar cada arquivo/origem em um registro **SRC-xx** bem contextualizado no
manifesto `sources.md`, ANTES de qualquer síntese. A fonte é a raiz da rastreabilidade.

Entrada: $ARGUMENTS  (a pasta do lote; se não existir, ajude a criar `knowledge/research/studies/<slug>/raw/`)

Comportamento — conduza uma **entrevista de intake**, uma fonte por vez:

1. **Abra e leia cada arquivo** em `raw/`. Deduza tudo que o próprio arquivo revela:
   - planilha → abas, colunas, nº de linhas, o que parece cada linha;
   - PDF/relatório → título, autor se houver, estrutura/seções;
   - CSV de tickets/analytics → campos e volume;
   - transcrição/entrevista → nº de falantes, duração se indicada.
   Preencha os campos que der para inferir e **mostre ao usuário para confirmar**.
2. **Pergunte só o que não dá para saber pelo arquivo** — tipicamente `origem`, `metodo`,
   `amostra`, vieses (`contexto`). Uma pergunta de cada vez quando algo estiver ambíguo.
   Adapte as perguntas ao `tipo`:
   - **planilha:** o que cada linha representa? qual aba/colunas importam (`recorte`)?
   - **entrevista/survey:** quantas pessoas, como recrutadas, quão estruturado?
   - **tickets/analytics:** filtrou por quê? qual período? qual viés (ex. só quem reclamou)?
   - **site:** qual a URL e a `data_captura`? Avise para salvar a página em `raw/` (PDF/markdown),
     pois conteúdo online muda.
3. Atribua `confiabilidade` (alta | media | baixa) junto com o usuário, de forma conservadora.
4. **Escreva o manifesto** `sources.md` na pasta do lote, um bloco por fonte, usando
   `templates/source.tmpl.md`. IDs estáveis SRC-001, SRC-002…
5. Ao fim, liste os SRC criados e pare. Sugira `/research` (síntese) como próximo passo.

Calibração (opcional): se o usuário pedir modo "enxuto", pergunte só o essencial para a fonte
ser confiável; no modo "minucioso", puxe método e limitações com rigor.

Regras:
- Não invente metadado. O que não for confirmado fica em branco ou como "a confirmar".
- Registrar ≠ sintetizar. Aqui você só cataloga a fonte; insights vêm no `/research`.
