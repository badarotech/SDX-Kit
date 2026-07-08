---
description: "Autoria guiada: cria um insight (RES-xx) por meio de perguntas, com fontes e procedência"
argument-hint: "[tema do insight, opcional]"
---

Autoria guiada de um **insight**. Carregue a skill `pesquisador` e leia `constitution.md`.
Objetivo: escrever `knowledge/research/insights/RES-xxx.md` por meio de uma entrevista curta.
É a versão manual do que o `/research` e o `/investigate` fazem em lote.

Conduza com perguntas inteligentes (deduza do contexto, reuse o que já existe, uma pergunta de
cada vez quando algo estiver ambíguo):

1. Qual o achado, em uma frase? Comportamento observado, não palpite.
2. De onde vem? Cite as fontes (`SRC-xx` do `sources.md`). Se não houver fonte, defina a
   procedência: `desk` (externa, com URL e data de captura) ou `hipotese` (raciocínio a validar).
3. A qual persona e jornada se liga? Consulte `knowledge/personas/` e `journeys/` e reuse o que existe.
4. Confiança: aplique a triangulação (não excede a das fontes; `alta` só com duas ou mais fontes
   independentes apontando o mesmo achado).
5. Qual a implicação de design? Ligue a `HAX-Gn` ou `PRIN-xx` quando couber.

Depois: atribua o próximo `RES-xxx` (varra a pasta de insights), escreva o arquivo com
`templates/insight.tmpl.md`, atualize `knowledge/research/index.md`, mostre um resumo e pare.

Regras: não invente evidência; separe observação de interpretação; todo insight cita uma fonte
ou é declarado hipótese.
