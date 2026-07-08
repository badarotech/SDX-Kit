---
description: "Passo 7/7 — Gera o protótipo front-end a partir da spec de design aprovada e do design system"
argument-hint: "[slug da jornada]"
---

Você está na **fase 4 (Protótipo)** do pipeline SDX. Leia `constitution.md`.

Jornada: $ARGUMENTS

Pré-requisito: `journeys/<slug>/design-spec.md` com `status: aprovado`.
Se não estiver aprovado, **pare** e peça para concluir o gate da fase 3.

Objetivo: gerar o front-end em `journeys/<slug>/prototype/` consumindo o **contrato**
do design system.

Faça:

1. Carregue o contrato do design system:
   - `design-system/tokens.css` (importe; não redefina cores/tipografia à mão);
   - `design-system/components.registry.md` (a fonte da verdade de quais componentes
     existem, suas props e estados);
   - `design-system/components/` (as implementações reais — reuse-as).
2. Para cada tela do `design-spec.md`, monte a página usando **apenas** componentes do
   registry e as variáveis de token. Nunca invente cor, espaçamento ou componente fora do
   contrato. Se faltar um componente, pare e sinalize (não improvise um substituto).
3. Implemente todos os **estados** especificados (vazio, carregando, sucesso, erro).
4. **Rastreabilidade no código:** cada bloco/tela deve conter um comentário citando o
   `AC` que satisfaz (ex.: `<!-- satisfaz NEED-023/AC-2 -->`).
5. Comece pela **fidelidade estática** (HTML + tokens). Só adicione estado/interatividade
   (React) se a spec pedir.
6. Ao terminar, liste o que foi gerado e qualquer AC que não pôde ser satisfeito com os
   componentes atuais.

Regras:
- O design system é lei. Divergência dele é bug, não licença criativa.
- Todo microtexto do protótipo segue `design-system/voice-and-tone.md`. Carregue a skill `ux-writer`.
- Sem protótipo sem spec aprovada.
