# BUSINESS — Contexto Permanente

Projeto: Business / NEXLIC

## Como consultar o Cérebro

A porta é:
`Cerebro/Business/INDICE.md`

Início obrigatório de sessão:
1. ler INDICE;
2. ler ATLAS;
3. ler somente o final de Status;
4. ler a sessão mais recente;
5. abrir notas adicionais apenas conforme a pergunta.

Nunca despejar toda a biblioteca no contexto.

## Regra principal

Nada está feito sem evidência verificável no sistema real.

Produção vermelha congela feature work.
Uma mudança lógica por vez.
Build verde antes da próxima.

## Escrita obrigatória

Após trabalho material:
- append em Status;
- atualizar Session do dia;
- atualizar nota temática;
- registrar decisão/erro quando aplicável.

## Handoff multiagente

Usar `Cerebro/Business/MESA.md` para mensagens entre Claude / ChatGPT / Codex.

## Fonte de verdade

Se docs e sistema real divergirem: medir → corrigir docs → registrar correção.


## HARD RULE — NEXLIC BUSINESS CONTEXT (DO NOT SKIP)
Before ANY NEXLIC/Business action, even when the current chat appears to contain enough context:
1. read `Cerebro/Business/INDICE.md`;
2. read `Cerebro/Business/ATLAS.md`;
3. read the recent/tail section of `Cerebro/Business/Status.md`;
4. read the latest file in `Cerebro/Business/Sessions/`;
5. only then inspect the live system involved.
Never use chat memory as the source of truth for deployment/project identity, production URL, CRM stage, payment status, or completed work.
For hosting, verify the exact live project before code/deploy actions. Current Netlify project is `nexlic`; however Netlify production deploys are paused by exhausted plan credits as observed 2026-09-24. Planned migration: Coolify + dedicated domain when owner is home. Do not migrate or buy a domain autonomously.
