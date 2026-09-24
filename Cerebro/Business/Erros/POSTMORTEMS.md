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

## PM-006 — Projeto Netlify errado + deploy não verificado (2026-09-24)
**Falha:** uma alteração de produto foi associada a `radar-mvp-christian` e uma URL foi apresentada ao owner antes de confirmar que o projeto canônico de produção era `nexlic` e que o novo commit estava efetivamente publicado.

**Impacto:** preview PERSEUS não ficou disponível no produto correto; perda de confiança e retrabalho.

**Causa:** confiança excessiva no contexto conversacional e em resultado parcial de projeto, sem reabrir o Cérebro canônico + verificar identidade do projeto/deploy antes da ação.

**Regra preventiva:** para NEXLIC, início de qualquer ação = INDICE → ATLAS → tail Status → latest Session → sistema real. Para hosting/deploy, confirmar explicitamente nome/site/URL e deploy SHA/estado antes de editar ou declarar publicado. Nunca declarar deploy a partir de commit GitHub ou branch URL apenas.

**Estado adicional:** screenshot do owner em 24/09 mostra Netlify em operational credits: produção existente live, novos production deploys e Agent Runners pausados. Migração Coolify + domínio próprio ficou como ação futura do owner em casa; não incorrer custos automaticamente.
