---
description: "Passo 3/7 — Responde a uma pergunta de pesquisa aberta — sobre a sua evidência ou externa (desk) — marcando a procedência"
argument-hint: "\"<pergunta de investigação>\""
---

Você está na etapa de **investigação** do pipeline SDX. Carregue a skill `pesquisador`
e leia `constitution.md`.

Diferente do `/research` (que sintetiza material que você já tem), aqui você faz uma
**pergunta aberta** — ex.: "quais são os comportamentos padrão de acesso no onboarding?".

Entrada (a pergunta): $ARGUMENTS

Faça:

1. **Decida a estratégia** (ou pergunte ao usuário quando ambíguo):
   - **sobre a evidência** → responda a partir das fontes em `knowledge/` e `raw/`
     (analytics, logs, entrevistas). Achados marcam `procedencia: evidencia` e citam SRC-xx.
   - **externa (desk research)** → busque conhecimento externo/benchmarks. Para CADA achado
     externo, registre a fonte: crie um `SRC-xx` (tipo `site`) com URL e `data_captura`, e
     salve a página em `raw/` quando possível. Achados marcam `procedencia: desk`.
   - **sem fonte** → se for só raciocínio do agente, marque `procedencia: hipotese` e
     `confianca: baixa`, com um rótulo explícito "a validar".
2. **Grave os achados como insights** (`templates/insight.tmpl.md`), cada um com a
   `procedencia` correta. Nunca disfarce desk research ou hipótese de evidência.
3. Se a investigação revelar que falta dado próprio, recomende coletar (e depois `/sources`).
4. Atualize o índice e mostre um resumo separando o que é evidência, desk e hipótese. Pare.

Regras (honestidade epistemológica — inegociável):
- Um achado sem fonte verificável NUNCA vira `procedencia: evidencia`.
- Desk research sempre carrega URL + data de captura. Conteúdo externo muda.
- Deixe claro ao usuário o grau de confiança de cada achado.
