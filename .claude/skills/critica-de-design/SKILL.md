---
name: critica-de-design
description: Avaliação heurística de uma experiência (heurísticas de Nielsen + guidelines HAX + acessibilidade). Use ao revisar uma spec de design ou um protótipo.
---

# Skill: Crítica de design

Codifica *como* o time avalia qualidade de experiência. O comando `/design` carrega esta
skill; use também em revisões antes de aprovar um gate.

## Como avaliar
Para cada tela/fluxo, verifique as três lentes abaixo e aponte problemas com severidade
(bloqueia | melhora | polimento). Cite o critério violado.

### Lente 1 — Heurísticas de Nielsen (resumo)
Visibilidade do status; correspondência com o mundo real; controle e liberdade do usuário;
consistência; prevenção de erros; reconhecer em vez de lembrar; flexibilidade;
design minimalista; ajuda a reconhecer/recuperar de erros; ajuda e documentação.

### Lente 2 — Guidelines HAX (quando há IA)
Percorra as guidelines relevantes da `constitution.md` (HAX-G1…G18). Foco frequente:
G1 (deixar claro o que faz), G9 (correção de erro), G11 (explicabilidade).

### Lente 3 — Acessibilidade (mínimos)
Contraste AA; foco visível; alvo ≥44px; informação não transmitida só por cor;
label visível em campos.

## Saída da crítica
Lista priorizada: `[severidade] tela — problema — critério — sugestão`.
Nada de crítica vaga: toda observação vem com o critério e um próximo passo.
