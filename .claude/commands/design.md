---
description: "Passo 6/7 — Produz a spec de design (fluxos, telas, estados, regras HAX) e PARA no gate humano"
argument-hint: "[slug da jornada]"
---

Você está na **fase 3 (Spec de design)** do pipeline SDX. Leia `constitution.md` e
`design-system/components.registry.md` antes de começar, e carregue a skill
`critica-de-design` (`.claude/skills/critica-de-design/SKILL.md`) para autoavaliar a spec.
Ao definir qualquer microtexto (labels, CTAs, erros, estados vazios), consulte
`design-system/voice-and-tone.md` e carregue a skill `ux-writer`.

Jornada: $ARGUMENTS

Objetivo: produzir `journeys/<slug>/design-spec.md` a partir de `tasks.md`, usando
`templates/design-spec.tmpl.md`.

Faça:

1. Leia `outcome.md`, `needs.md`, `tasks.md` e o registry de componentes.
2. Desenhe o **fluxo macro** (caminho feliz + ramificações) e depois cada **tela** com
   seus **estados** (vazio, carregando, sucesso, erro).
3. Para cada tela, **selecione componentes existentes do registry** (reuse por padrão).
   Só proponha um componente novo quando nenhum existente servir — e, se propuser,
   registre-o como proposta explícita no fim da spec.
4. Aplique as guidelines HAX pertinentes e **cite o ID** (ex.: HAX-G9 na tela de erro).
5. Preencha a tabela de **rastreabilidade** (need → AC → tela → como é satisfeito).
6. **PARE no gate humano.** Deixe a seção "Notas de input humano" pronta para edição,
   marque `status: em-revisao` e peça revisão explícita. NÃO gere protótipo.

Quando o time revisar e aprovar (`status: aprovado`, `revisado_por` preenchido),
o próximo passo é `/prototype <slug>`.

Regras:
- Explore alternativas quando a complexidade justificar, depois convirja.
- Nada de tela sem estado de erro e de carregamento.
