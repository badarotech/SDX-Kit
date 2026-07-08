# Registry de componentes

Fonte da verdade de **quais componentes existem**, suas props, estados e quando usar.
As fases `/design` e `/prototype` leem este arquivo. Regra: **reusar por padrão; só propor
novo quando nada aqui serve.**

Formato de cada entrada:
- **Props** — parâmetros aceitos (com valores permitidos).
- **Estados** — variações visuais/interativas obrigatórias.
- **Quando usar / Quando NÃO usar** — para desambiguar escolha.
- **Implementação** — arquivo em `components/` (ou "a implementar").

---

## Button
Ação primária de uma tela.
- **Props:** `variant` (primary | secondary | ghost | danger), `size` (sm | md), `icon` (opcional), `disabled`.
- **Estados:** default · hover · focus (foco visível) · active · disabled · loading.
- **Quando usar:** disparar uma ação. **NÃO usar:** para navegação pura (use Link).
- **Implementação:** `components/button.js`

## Link
Navegação entre destinos.
- **Props:** `href`, `external` (bool).
- **Estados:** default · hover · focus · visited.
- **Quando usar:** ir para outro lugar. **NÃO usar:** para ações (use Button).
- **Implementação:** a implementar

## Input
Entrada de texto de linha única.
- **Props:** `label`, `type` (text | email | password), `placeholder`, `required`, `error` (string).
- **Estados:** default · focus · preenchido · erro (mensagem + borda danger) · disabled.
- **Quando usar:** capturar um dado curto. Sempre com `label` visível (acessibilidade).
- **Implementação:** a implementar

## Card
Agrupa conteúdo relacionado em uma superfície.
- **Props:** `padding` (md | lg), `interactive` (bool — vira clicável).
- **Estados:** default · hover (se interactive).
- **Quando usar:** bloco de conteúdo delimitado. **NÃO usar:** para layout de página inteira.
- **Implementação:** `components/card.js`

## Stepper
Mostra progresso em um fluxo de múltiplos passos.
- **Props:** `steps` (array de labels), `current` (índice).
- **Estados:** passo concluído · passo atual · passo futuro.
- **Quando usar:** onboarding/checkout com passos claros. Casa com HAX-G1 (deixar claro o que vem).
- **Implementação:** a implementar

## Toast
Feedback transitório após uma ação.
- **Props:** `variant` (success | warning | danger | info), `message`, `action` (opcional).
- **Estados:** entrando · visível · saindo.
- **Quando usar:** confirmar ação ou avisar erro recuperável (casa com HAX-G9 quando traz `action` de desfazer/corrigir).
- **Implementação:** a implementar

## EmptyState
O que mostrar quando não há dados.
- **Props:** `title`, `description`, `action` (Button opcional).
- **Estados:** único.
- **Quando usar:** listas/áreas vazias. Toda tela com dados dinâmicos precisa de um.
- **Implementação:** a implementar

---

## Propostas de componentes novos
> Quando `/design` ou `/prototype` precisar de algo inexistente, registre aqui a proposta
> (nome, motivo, por que nenhum existente serve) em vez de improvisar no protótipo.

_(vazio)_
