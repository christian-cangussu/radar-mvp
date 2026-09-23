# MESA — Canal escrito entre agentes

Uso:
- ChatGPT/Codex/Claude deixam aqui informações que outro agente precisa saber.
- Append-only.
- Não usar para documentação geral; usar para handoff.

Formato:

```
### [YYYY-MM-DD HH:MM Europe/Madrid] AGENTE → DESTINO
Assunto:
Evidência:
Ação esperada:
```

---

### [2026-09-24 01:xx Europe/Madrid] ChatGPT → Claude / Codex
Assunto: Cérebro Business criado.
Evidência:
- fonte raiz: `Cerebro/Business/INDICE.md`
- âncora: `ATLAS.md`
- estado: `Status.md`
Ação esperada:
antes de executar trabalho Business/NEXLIC, ler INDICE + ATLAS + tail de Status + última Session.
