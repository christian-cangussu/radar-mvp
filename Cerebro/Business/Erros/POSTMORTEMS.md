# POSTMORTEMS — Erros que não podem se repetir

## PM-001 — Next.js vulnerável bloqueado pelo Netlify

Data: 2026-09-24

Sintoma:
Netlify recusou deploy por CVE na versão de Next.js.

Correção:
atualização para versão corrigida.

Aprendizado:
dependências de framework precisam estar em versão segura antes de lançar.

---

## PM-002 — JSX quebrado por replace automático

Data: 2026-09-24

Sintoma:
um replace inseriu `\\n` literal entre elementos JSX no pricing.

Causa:
edição textual automatizada sem validação imediata de build.

Regra criada:
uma mudança lógica → build → próxima mudança.

---

## PM-003 — OpenGraph quebrou prerender

Data: 2026-09-24

Sintomas:
- falha de dynamic font;
- `ImageResponse` exigiu display explícito em div com múltiplos filhos.

Causa:
OG image foi tratada como React DOM normal, mas `next/og` usa restrições próprias.

Regra:
- não depender de fonte remota para OG;
- containers multi-child em ImageResponse devem declarar display;
- OG faz parte do build gate, não é detalhe cosmético.

---

## PM-004 — Empilhar commits com produção vermelha

Data: 2026-09-24

Problema:
foram adicionadas features enquanto deploy anterior ainda estava falhando/skipped.

Impacto:
ficou mais difícil separar erro de código, infra e configuração.

Regra permanente:
produção vermelha congela novas features.

---

## PM-005 — Update de documento append-only com placeholder

Data: 2026-09-24

Sintoma:
uma chamada de atualização de `Cerebro/Business/Status.md` recebeu `PLACEHOLDER` como conteúdo completo e substituiu temporariamente o histórico append-only.

Causa:
foi usado `update_file`, que substitui o ficheiro inteiro, antes de montar localmente `conteúdo atual + nova entrada`.

Impacto:
o histórico ficou ausente no HEAD por um commit. A versão anterior continuava íntegra no Git e foi restaurada imediatamente; nenhuma informação ficou perdida no estado final.

Correção:
recuperar `Status.md` do commit imediatamente anterior, acrescentar a entrada correta e gravar novamente.

Regra permanente:
para qualquer ficheiro append-only: **fetch atual → construir conteúdo completo em memória → verificar que começa pelo conteúdo anterior → update_file**. Nunca chamar `update_file` com placeholder ou conteúdo parcial.