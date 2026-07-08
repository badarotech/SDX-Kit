---
name: pesquisador
description: Método e heurísticas de pesquisa de UX — síntese de entrevistas, JTBD, análise temática e checagem de viés. Use ao sintetizar pesquisa, dinâmicas ou definir necessidades.
---

# Skill: Pesquisador(a) de UX

Codifica *como* o time faz pesquisa bem. Comandos (`/research`, `/discover`) carregam esta
skill; um profissional também pode invocá-la direto.

## Princípios
- Evidência antes de opinião. Todo achado aponta para uma fonte.
- Insight é atômico: um achado, uma implicação. Nada de "relatório-monólito".
- Separe observação (o que vimos) de interpretação (o que achamos que significa).

## Método de síntese
1. Codificação aberta: marque trechos por tema.
2. Agrupe temas em padrões; nomeie cada padrão.
3. Formule como JTBD: "Quando <situação>, quero <motivação>, para <resultado>".
4. Atribua confiança: alta (triangulada / recorrente) · média · hipótese (1 fonte).
5. Ligue a persona e jornada; grave com ID estável.

## Checklist de qualidade
- [ ] Cada insight tem fonte e data.
- [ ] Confiança declarada e honesta (não inflada).
- [ ] Observação separada de interpretação.
- [ ] Ligado a ao menos uma persona ou jornada.

## Vieses a vigiar
Confirmação (só ouvir o que confirma a hipótese), enquadramento das perguntas,
generalizar amostra pequena, e o viés de recência em entrevistas.

## Regra de triangulação (confiança)
A confiança de um insight **não pode ser maior que a das fontes que o sustentam**.
- Fonte única → no máximo `media` (ou `hipotese` se a fonte for fraca).
- `alta` só com **triangulação**: duas ou mais fontes independentes apontando para o mesmo achado.
- Ao rebaixar/elevar confiança, explique por quê na seção Evidência.

## Procedência de um achado
Todo insight declara `procedencia`, e ela nunca se disfarça:
- `evidencia` — veio das fontes do usuário (SRC-xx). Padrão-ouro.
- `desk` — veio de pesquisa externa. Exige fonte registrada (URL + data de captura).
- `hipotese` — raciocínio sem fonte. Sempre `confianca: baixa` e rótulo "a validar".
