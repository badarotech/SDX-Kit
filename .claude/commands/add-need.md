---
description: "Autoria guiada: define Outcome e Necessidades (JTBD) de uma jornada por meio de perguntas"
argument-hint: "[slug da jornada]"
---

Autoria guiada de **Outcome e Necessidades** de uma jornada. Leia `constitution.md` e consulte
`knowledge/`. É a versão manual do `/discover`.

Conduza com perguntas (uma de cada vez quando ambíguo):

1. Qual a jornada (slug)? Crie `journeys/<slug>/` se não existir.
2. Já existe `outcome.md`? Se não, defina o OUTCOME:
   - Qual resultado de negócio? Um resultado (uma métrica que muda), não uma feature.
   - Métrica-chave, linha de base e meta. Contexto e restrições.
   - Escreva `outcome.md` com `templates/outcome.tmpl.md`.
3. Para cada NECESSIDADE (uma por vez):
   - JTBD: "Quando <situação>, quero <motivação>, para <resultado>".
   - Persona (reuse de `knowledge/personas/`) e evidência (`RES-xx`). Sem evidência, marque como
     hipótese e sugira `/add-insight` ou `/research` antes de prosseguir.
   - Critérios de aceite verificáveis (ligue `HAX-Gn` quando fizer sentido).
   - Restrições de design, não-objetivos, prioridade e métrica.
4. Atribua IDs (`NEED-xxx`), ligue cada need ao outcome, escreva/atualize `needs.md`, verifique
   cobertura, mostre resumo e pare. Sugira `/add-task` ou `/specify`.

Regras: reuse antes de criar; toda need com ao menos um critério; um outcome nunca é uma feature.
