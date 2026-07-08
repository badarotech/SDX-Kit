---
description: "Passo 5/7 — Converte necessidades em tasks acionáveis com critérios de aceite"
argument-hint: "[slug da jornada]"
---

Você está na **fase 2 (Especificar)** do pipeline SDX. Leia `constitution.md`.

Jornada: $ARGUMENTS

Objetivo: ler `journeys/<slug>/needs.md` e produzir `journeys/<slug>/tasks.md` —
a decomposição das necessidades em tasks que o time consegue executar.

Faça:

1. Leia `outcome.md` e `needs.md` da jornada.
2. Para cada `NEED-xxx`, derive uma ou mais **tasks** (`TASK-001`, `TASK-002`…). Cada task deve:
   - referenciar a need de origem (`need: NEED-xxx`);
   - ter critérios de aceite herdados/refinados dos AC da need;
   - ter um escopo pequeno o suficiente para ser desenhada e prototipada;
   - marcar dependências entre tasks quando existirem.
3. Sinalize quando o escopo for grande demais e a jornada deveria ser dividida.
4. Verifique cobertura: **toda need tem ao menos uma task**; todo AC está coberto.
5. Escreva `tasks.md` e mostre um resumo com o mapa need → tasks. Pare.
   Sugira `/design <slug>` como próximo passo.

Regras:
- Não avance para design ou protótipo aqui.
- Se um AC não puder virar task verificável, aponte o problema em vez de mascarar.
