# Convenções do projeto (lido pelo Claude Code)

Este é um kit spec-driven para Design de Experiência. Antes de qualquer coisa,
leia `constitution.md` — ele contém as regras inegociáveis (princípios HAX + marca + AX).

## Princípios operacionais

1. **A spec é a fonte da verdade.** Nunca gere protótipo sem um `design-spec.md` aprovado.
2. **Rastreabilidade obrigatória.** Todo artefato referencia IDs (`OUT-xx`, `NEED-xx`,
   `AC-xx`). Todo elemento de design/protótipo cita o `AC` que satisfaz.
3. **Escreva artefatos em disco, não no terminal.** Cada fase grava um arquivo markdown
   em `journeys/<slug>/` para revisão. Não despeje o resultado só no chat.
4. **Reuse antes de criar.** Ao desenhar ou prototipar, use componentes já existentes em
   `design-system/components.registry.md`. Só proponha um componente novo quando nenhum
   existente servir — e, nesse caso, registre a proposta explicitamente.
5. **Respeite os gates humanos.** A fase `/design` PARA e pede revisão antes de seguir
   para `/prototype`. Não pule.
6. **Delibere antes de produzir.** Explore o problema, faça as perguntas que faltam, e só
   então escreva o artefato.
7. **Procedência sempre explícita.** Todo insight cita `fontes: [SRC-xx]` e declara
   `procedencia` (evidencia | desk | hipotese). Confiança nunca excede a das fontes;
   `alta` exige triangulação. Achado sem fonte é `hipotese`, nunca `evidencia`.

8. **Estágio é derivado.** O estágio de uma jornada vem dos artefatos existentes e seus
   `status`, nunca de um campo à mão. Use `/status` para computá-lo.

## Estrutura

- `.claude/commands/` — os comandos (as fases do pipeline).
- `templates/` — modelos dos artefatos.
- `design-system/` — o contrato legível por máquina (tokens + registry + componentes + voz e tom).
- `journeys/<slug>/` — onde o trabalho de cada jornada acontece.
- `knowledge/` — memória cross-journey: pesquisa, personas, princípios, glossário, decisões.
- `.claude/skills/` — o ofício do time: método e heurísticas por disciplina (SKILL.md).

## Convenção de IDs

- `OUT-01` … outcome de negócio (arquivo `outcome.md`)
- `NEED-001` … necessidade / JTBD (arquivo `needs.md`)
- `TASK-001` … task derivada de uma need (arquivo `tasks.md`)
- `AC-1` … critério de aceite (dentro de uma need/task)
- `HAX-Gn` … referência a uma guideline da constitution
- `SRC-xxx` … fonte de pesquisa catalogada (`knowledge/research/studies/<lote>/sources.md`)
- `RES-xxx` … insight de pesquisa (cita `fontes: [SRC-xx]` e declara `procedencia`)
- `PERSONA-xx` … persona · `PRIN-xx` … princípio · `DEF-xx` … definição · `ADR-xxx` … decisão de design

## Estágio da jornada (derivado dos artefatos)
O estágio de uma jornada NÃO é um campo editado à mão: ele é derivado dos artefatos existentes e
de seus `status`. Regra (pare no primeiro que bater):
- sem `outcome.md`: Não iniciada.
- `outcome.md` + `needs.md`, sem `tasks.md`: Definição.
- `tasks.md`, sem `design-spec.md`: Especificação pronta.
- `design-spec.md` não aprovada: Design em revisão (gate humano).
- `design-spec.md` aprovada, sem `prototype/`: Design aprovado.
- `prototype/` com arquivos: Protótipo gerado.
Use `/status` para computar o estágio de uma jornada (ou de todas) e ver o próximo passo.
