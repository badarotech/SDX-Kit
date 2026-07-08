---
id: NEED-001
tipo: usuario            # usuario | negocio
jornada: <slug-da-jornada>
outcome: OUT-01          # a qual outcome serve
evidencia: []            # insights que embasam: [RES-012, RES-018]
persona: ""              # PERSONA-03
prioridade: media        # alta | media | baixa
metrica: "<sinal observável de que a need foi atendida>"
status: rascunho
---

## JTBD
Quando <situação>, eu quero <motivação>, para <resultado esperado>.

## Contexto
Quem é o usuário, o que ele já sabe/tem, o que o trava hoje.
Ancore em evidência quando houver (cite a fonte: entrevista, ticket, dado).

## Critérios de aceite
- [ ] AC-1: <condição verificável>
- [ ] AC-2: <condição verificável>  (regra HAX-Gn se aplicável)

## Restrições de design
- Reusar componentes: <ex.: Stepper, Card, Toast — ver registry>
- Limites: <ex.: máx. 3 passos>

## Fora de escopo (non-goals)
- <o que esta need explicitamente NÃO resolve>
