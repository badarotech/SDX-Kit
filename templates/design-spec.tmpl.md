---
jornada: <slug-da-jornada>
outcome: OUT-01
needs: [NEED-001, NEED-002]
status: rascunho          # rascunho | em-revisao | aprovado
revisado_por: ""          # preenchido no gate humano
---

# Spec de design — <nome da jornada>

## Fluxo (visão macro)
Sequência de passos/telas do início ao fim. Descreva o caminho feliz e onde ele ramifica.

1. <passo> → 2. <passo> → 3. <passo>

## Telas e estados

### Tela 1: <nome>
- **Objetivo:** o que o usuário faz aqui. (atende: NEED-001 / AC-1)
- **Componentes (do registry):** Header, Card, Button.primary
- **Estados:** vazio · carregando · sucesso · erro
- **Conteúdo/copy:** textos-chave (respeitar voz da constitution)
- **Regras HAX:** ex.: HAX-G9 — erro mostra ação de recuperação.

### Tela 2: <nome>
...

## Rastreabilidade
Tabela need → tela → critério, para conferência antes do protótipo.

| Need   | AC   | Tela      | Como é satisfeito |
|--------|------|-----------|-------------------|
| NEED-001 | AC-1 | Tela 1  | <descrição>       |

## Notas de input humano
> Área reservada para o time editar e direcionar antes da aprovação (o gate).
