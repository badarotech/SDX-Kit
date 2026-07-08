# Constitution — princípios inegociáveis da experiência

Este documento é lido em TODA fase do pipeline. Ele define o que é uma boa experiência
neste produto. Divide-se em três blocos: (A) guidelines de interação humano-IA,
(B) princípios de Agent Experience, (C) regras de marca e conteúdo (você preenche).

---

## A. 18 Guidelines for Human-AI Interaction (Microsoft HAX)

Aplique estas guidelines sempre que a experiência envolver IA. Cada uma tem um ID
(`HAX-Gn`) que deve ser citado nos critérios de aceite quando relevante.

### No início da interação
- **HAX-G1 — Deixe claro o que o sistema pode fazer.** O usuário deve entender as
  capacidades antes de usar.
- **HAX-G2 — Deixe claro quão bem o sistema faz o que faz.** Comunique o nível de
  confiança / limites de acurácia; não superestime.

### Durante a interação
- **HAX-G3 — Ofereça o serviço no momento certo do contexto.** Aja quando faz sentido
  para a tarefa e o ambiente atual.
- **HAX-G4 — Mostre informação contextualmente relevante.** Nada de despejar tudo.
- **HAX-G5 — Respeite normas sociais relevantes.** Tom, formalidade e cultura do usuário.
- **HAX-G6 — Mitigue vieses sociais.** Garanta que linguagem e comportamento não
  reforcem estereótipos.

### Quando o sistema erra
- **HAX-G7 — Facilite a invocação.** Fácil pedir ajuda / acionar o serviço quando preciso.
- **HAX-G8 — Facilite a dispensa.** Fácil ignorar ou descartar sugestões indesejadas.
- **HAX-G9 — Facilite a correção.** Fácil editar, refinar ou recuperar de um erro.
- **HAX-G10 — Reduza o escopo na dúvida.** Em incerteza, aja de forma conservadora ou
  peça desambiguação em vez de errar em cheio.
- **HAX-G11 — Deixe claro por que o sistema fez o que fez.** Explicabilidade.

### Ao longo do tempo
- **HAX-G12 — Lembre de interações recentes.** Mantenha memória de curto prazo útil.
- **HAX-G13 — Aprenda com o comportamento do usuário.** Personalize com o tempo.
- **HAX-G14 — Atualize e adapte com cautela.** Mudanças de comportamento não devem
  desorientar.
- **HAX-G15 — Incentive feedback granular.** Permita ao usuário sinalizar o que foi bom/ruim.
- **HAX-G16 — Comunique as consequências das ações do usuário.** Antecipe o efeito de
  ações que afetam o comportamento futuro do sistema.
- **HAX-G17 — Ofereça controles globais.** Deixe o usuário personalizar/monitorar e
  desligar o que o sistema faz.
- **HAX-G18 — Notifique sobre mudanças.** Avise quando capacidades forem adicionadas
  ou alteradas.

> Fonte: Amershi et al., "Guidelines for Human-AI Interaction", CHI 2019 (Microsoft Research).

---

## B. Princípios de Agent Experience (AX)

Aplique quando a experiência for consumida por agentes (APIs, ferramentas para agentes,
fluxos automatizados). Baseado no acrônimo DIRECT:

- **Determinístico** — mesma entrada, mesmo formato de saída. Sem "às vezes null".
- **Introspectável** — capacidades e schemas legíveis por máquina, sem depender de docs em prosa.
- **Recuperável** — erros estruturados e acionáveis; o agente diagnostica e corrige sozinho.
- **Explícito** — limites e restrições claros; o agente age com confiança.
- **Consistente** — mesmos padrões em todo lugar, para o agente generalizar.
- **Testável** — dá para tentar uma ação com segurança antes de efetivá-la.

---

## C. Regras de marca e conteúdo  (PREENCHER)

> Substitua os placeholders abaixo pelas regras do seu produto.

### Voz e tom
A voz e o tom do produto estão em `design-system/voice-and-tone.md` (contrato de conteúdo
consumido por `/design` e `/prototype`, via skill `ux-writer`).

### Acessibilidade (mínimos)
- Contraste AA (WCAG 2.2) em todo texto.
- Todo estado interativo tem foco visível e alvo tocável ≥ 44px.
- Nenhuma informação transmitida só por cor.

### Regras de negócio transversais
- _[ex.: toda tela de erro deve oferecer um caminho de recuperação — casa com HAX-G9]_
- _[ex.: nenhum dado sensível em parâmetros de URL]_

### Idioma
- Idioma principal da UI: pt-BR
