---
description: "Passo 4/7 — Descobre e enquadra uma jornada — captura outcome de negócio e necessidades de usuário (JTBD)"
argument-hint: "[descrição breve da jornada ou do problema]"
---

Você está na **fase 1 (Descobrir e enquadrar)** do pipeline SDX. Leia `constitution.md` antes de começar.

Objetivo: transformar uma ideia vaga em um `outcome.md` (resultado de negócio) e um
`needs.md` (necessidades de usuário como Jobs To Be Done), ancorados em evidência.

Entrada do usuário: $ARGUMENTS

Faça, nesta ordem:

1. **Consulte o conhecimento existente PRIMEIRO** (reusar antes de criar): leia
   `knowledge/research/index.md`, `knowledge/personas/` e `knowledge/principles.md`.
   Aproveite insights (`RES-xx`), personas (`PERSONA-xx`) e princípios (`PRIN-xx`) que já
   existem em vez de recomeçar do zero. Se faltar evidência, sugira rodar `/research` antes.
2. **Defina o slug da jornada** (kebab-case) e crie `journeys/<slug>/` se não existir.
3. **Entreviste** o usuário para preencher lacunas — uma pergunta de cada vez quando a
   resposta não estiver clara. Busque: qual resultado de negócio, quem é o usuário, qual
   a evidência (entrevistas, tickets, dados), quais restrições.
3. Se houver evidência bruta na pasta (transcrições, notas), leia e **extraia oportunidades**
   no espírito de uma Opportunity Solution Tree: agrupe por outcome, formule como JTBD,
   e cite a fonte de cada uma.
4. **Escreva os artefatos** usando `templates/outcome.tmpl.md` e `templates/need.tmpl.md`:
   - `journeys/<slug>/outcome.md` (um outcome, com métrica e meta)
   - `journeys/<slug>/needs.md` (uma ou mais needs; IDs NEED-001, NEED-002…)
5. Atribua IDs estáveis. Ligue cada need ao outcome (`outcome:`) e, quando houver, à
   evidência e persona do `knowledge/` (`evidencia: [RES-xx]`, `persona: PERSONA-xx`).
6. Ao terminar, **mostre um resumo** e pare. Sugira rodar `/specify` como próximo passo.

Regras:
- Não invente evidência. Se algo é suposição, marque como "hipótese a validar".
- Toda need precisa de pelo menos um critério de aceite verificável.
- Escreva em disco, não só no chat.
