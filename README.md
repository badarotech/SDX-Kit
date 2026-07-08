# Spec-Driven Experience Kit (SDX)

Um boilerplate para projetos de **Design de Experiência** guiados por especificação.
A premissa é a mesma do Spec-Driven Development, mas aplicada à experiência:

> **A spec é a fonte da verdade. O protótipo é um artefato gerado.**

Cada fase escreve um artefato em markdown com IDs estáveis, e a próxima fase o consome.
Isso garante **rastreabilidade**: todo elemento do protótipo final aponta de volta para
uma necessidade de negócio ou de usuário.

## O pipeline

```
Fontes → Pesquisar → Descobrir → Especificar → Spec de design → Protótipo
(SRC-xx)  (RES-xx)   (outcome+need)  (tasks+AC)    (fluxos, HAX)     (front-end + DS)
                                                     ↑
                                              input humano (gate)
```

| Fase | Comando | Entrada | Saída |
|------|---------|---------|-------|
| 0. Fontes | `/sources` | arquivos brutos (PDF, planilha, site, tickets) | `sources.md` (SRC-xx) |
| 0b. Pesquisar | `/research` | fontes já registradas | insights (`RES-xx`) com procedência |
| 0c. Investigar | `/investigate` | uma pergunta aberta | insights (evidência/desk/hipótese) |
| 1. Descobrir | `/discover` | brief, evidências | `outcome.md`, `needs.md` |
| 2. Especificar | `/specify` | `needs.md` | `tasks.md` |
| 3. Spec de design | `/design` | `tasks.md` + `constitution.md` | `design-spec.md` (para no gate humano) |
| 4. Protótipo | `/prototype` | `design-spec.md` + `design-system/` | `prototype/` (front-end) |

## Comandos de autoria guiada

Além das fases do pipeline, o kit tem comandos que conduzem você por perguntas para escrever
um artefato à mão, um item por vez. Rodam sob demanda, não em ordem, e todos têm o prefixo `add-`.

| Comando | Pergunta sobre | Gera |
|---------|----------------|------|
| `/add-source` | uma fonte (caminho ou URL): origem, método, viés | `SRC-xx` em `sources.md` |
| `/add-insight` | um achado: fontes, procedência, confiança, implicação | `RES-xx` em `research/insights/` |
| `/add-need` | outcome de negócio e necessidades (JTBD) de uma jornada | `outcome.md`, `needs.md` |
| `/add-task` | tasks a partir de uma necessidade | `TASK-xx` em `tasks.md` |
| `/add-persona` | uma persona ancorada em evidência | `PERSONA-xx` em `personas/` |
| `/add-principle` | um princípio direcional de experiência | `PRIN-xx` em `principles.md` |
| `/add-term` | um termo do glossário | `DEF-xx` em `glossary.md` |

Relação com o pipeline: `/add-insight`, `/add-need` e `/add-task` são as versões manuais de
`/research`, `/discover` e `/specify`. Os comandos do pipeline derivam em lote a partir de
material ou de artefatos anteriores; os `add-*` deixam você autorar um item por vez, por entrevista.
Persona, princípio e glossário só existem na forma guiada.

## A unidade atômica: a jornada

Todo trabalho vive dentro de `journeys/<slug>/`. Uma jornada tem **um** `outcome`
de negócio no topo e uma ou mais `needs` (Jobs To Be Done) penduradas nele.
Você especifica experiências, não telas soltas.

## O ponto crítico: o Design System é um contrato

Para a fase 4 gerar SEU produto (e não UI genérica), o design system precisa existir
como **contrato legível por máquina**, não só como um Figma:

- `design-system/tokens.json` + `tokens.css` — cor, tipografia, espaçamento, raio…
- `design-system/components.registry.md` — inventário de componentes: props, estados, quando usar.
- `design-system/voice-and-tone.md`: contrato de voz e tom, consultado ao escrever microtexto.

Regra de ouro: **reusar componente existente por padrão; só propor novo quando nada serve.**

## Duas camadas que atravessam projetos

Além das jornadas, o kit tem duas camadas globais que preservam a **continuidade de intenção** — o raciocínio e a evidência que costumam se perder no handoff:

- **`knowledge/`** — a *memória* do time. Fontes catalogadas (`SRC-xx`, em `research/studies/<lote>/sources.md`), insights atômicos (`RES-xx`) que citam suas fontes e declaram procedência (evidência/desk/hipótese), personas (`PERSONA-xx`), princípios (`PRIN-xx`), glossário (`DEF-xx`) e decisões (ADR). A cadeia da rastreabilidade nasce aqui: `SRC → RES → NEED → design → protótipo`. Alimente-a com `/sources` (intake de um lote inteiro), `/add-source` (atalho para uma fonte via caminho ou URL), `/research` (síntese) e `/investigate` (perguntas abertas). Para autoria manual por entrevista, use a família `/add-*`: `/add-insight`, `/add-need` (outcome e needs), `/add-task`, `/add-persona`, `/add-principle` e `/add-term` (glossário).
- **`.claude/skills/`** — o *ofício* do time. Cada skill (`SKILL.md`) codifica o método e as heurísticas de uma disciplina (pesquisador, crítica de design…). Os comandos carregam a skill certa: `/sources`, `/research` e `/investigate` usam `pesquisador`; `/design` e `/prototype` usam `critica-de-design` e `ux-writer`. É a forma de institucionalizar o conhecimento tácito dos seniores.

A distinção-chave: **comandos** dizem *o que fazer quando*; **skills** dizem *como fazer bem*.

## Como usar

Este kit foi feito para rodar no **Claude Code** sobre o próprio repositório.

1. Suba este repo no seu Git.
2. Abra a pasta no Claude Code.
3. Preencha `design-system/` com seus tokens e componentes reais.
4. Ajuste `constitution.md` com as regras de marca e de AX do seu produto.
5. Crie uma jornada: `cp -r journeys/exemplo-onboarding-b2b journeys/minha-jornada`
   (ou rode `/discover` para começar do zero).
6. Rode as fases em ordem, revisando os artefatos entre cada uma.

Veja `journeys/exemplo-onboarding-b2b/` para um exemplo completo e preenchido.

## Ordem de construção recomendada

Não comece pelos comandos. Comece pelo `design-system/` (o gargalo) e monte o
pipeline "de trás pra frente": primeiro faça o `/prototype` funcionar a partir de
um `design-spec.md` escrito à mão; só quando o protótipo sair bom, automatize as
fases de cima.

## Fundamentação

- Spec-Driven Development (GitHub Spec Kit, AWS Kiro) — spec-first, artefatos em disco.
- HAX Toolkit / 18 Guidelines for Human-AI Interaction (Microsoft Research) — ver `constitution.md`.
- Continuous Discovery / Opportunity Solution Tree (Teresa Torres) — fase 1.
- Jobs To Be Done — formato das necessidades.
- DIRECT / Agent Experience (AX) — para partes consumidas por agentes.
