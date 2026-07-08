---
description: "Passo 2/7 — Sintetiza as fontes já registradas (SRC-xx) em insights atômicos, com procedência e fontes citadas"
argument-hint: "[caminho da pasta do lote ou tema]"
---

Você está na etapa de **síntese** do pipeline SDX. Carregue a skill `pesquisador`
(`.claude/skills/pesquisador/SKILL.md`) e leia `constitution.md`.

Objetivo: destilar as fontes já catalogadas em **insights** atômicos, citáveis e ancorados.
Este comando NÃO faz o intake de fontes — ele consome o que o `/sources` registrou.

Entrada: $ARGUMENTS

Faça:

1. **Leia o manifesto** `sources.md` do lote e os arquivos em `raw/` que ele aponta.
2. **Cheque a procedência das fontes ANTES de sintetizar.** Se uma fonte relevante não tem
   `origem`, `metodo` ou `contexto` declarados, **pare e mande de volta ao `/sources`**:
   diga qual SRC está incompleta e ofereça registrá-la antes de continuar. Não sintetize em
   cima de evidência mal descrita.
3. **Extraia insights atômicos** com `templates/insight.tmpl.md`. Cada insight DEVE:
   - citar as fontes que o sustentam (`fontes: [SRC-003, SRC-004]`);
   - declarar `procedencia: evidencia` (veio das fontes do lote);
   - respeitar a **regra de triangulação** (ver skill): a `confianca` do insight não pode ser
     maior que a das fontes; fonte única → no máximo "media"; "alta" exige 2+ fontes independentes.
4. Ligue cada insight às **personas** e **jornadas**. Crie/atualize persona quando a evidência
   justificar (e cite as SRC).
5. Registre **definições** novas em `glossary.md` e princípios em `principles.md` quando emergirem.
6. Atualize `knowledge/research/index.md`. Mostre os IDs criados e pare. Sugira `/discover`.

Regras:
- Todo insight aponta para ao menos uma SRC (exceto hipótese pura — que é papel do `/investigate`).
- Não infle confiança. Separe observação (o que a fonte mostra) de interpretação (o que você conclui).
