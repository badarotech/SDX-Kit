---
name: ux-writer
description: Método para escrever microtexto de interface (labels, erros, estados vazios, CTAs) aplicando o contrato de Voz e Tom. Use ao redigir ou revisar qualquer texto de UI nas fases de design e protótipo.
---

# Skill: UX Writer

Codifica COMO escrever bom microtexto. As fases `/design` e `/prototype` carregam esta skill.
A fonte da voz é `design-system/voice-and-tone.md`. Leia esse contrato antes de escrever.

## Ordem de prioridade
1. Clareza. O texto precisa ser entendido de primeira, sem contexto extra.
2. Concisão. Corte toda palavra que não muda o sentido.
3. Voz. Só depois de claro e curto, ajuste ao tom da marca.

## Padrões por tipo
- Botão / CTA: verbo mais objeto, 1 a 3 palavras, sentence case, sem ponto final. Diz a ação real.
- Mensagem de erro: o que aconteceu, seguido de como recuperar. Não culpe o usuário. Casa com HAX-G9.
- Estado vazio: diga o que é, por que está vazio e a ação primária para sair dali.
- Confirmação: curta e específica ("Convite enviado"), nunca genérica ("Sucesso!").
- Placeholder e ajuda: dê um exemplo concreto, não uma instrução vaga.

## Filtro (herdado do contrato)
- Nunca: disruptivo, revolucionário, estado da arte, de ponta, holístico, mágico.
- Evite jargão corporativo e adjetivo exagerado. Prefira linguagem funcional na prática.
- Vocabulário de marketing não entra em label ou erro de UI.

## Checklist de revisão
- [ ] Entendível sem contexto extra.
- [ ] Nada supérfluo (cada palavra tem função).
- [ ] Erro tem saída acionável.
- [ ] Coerente com a voz do contrato e com os termos do glossary.md.
