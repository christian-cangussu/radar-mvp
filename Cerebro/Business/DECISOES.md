# DECISÕES — Constituição Business

Registro append-only. Mudanças futuras substituem decisões por nova entrada; não apagar a antiga.

## Leis permanentes

### L0 — Verdade operacional
Nada é "feito" sem prova no sistema real.

### L1 — Receita antes de feature
Antes do primeiro cliente, toda feature precisa responder: "isto aumenta a chance de alguém pagar?"

### L2 — Um build vermelho congela feature work
Corrigir causa exata → validar verde → só então continuar.

### L3 — Personalização antes de volume
Poucos prospects com forte evidência e preview específico > centenas de leads genéricos.

### L4 — Não inventar tração
Sem logos falsos, clientes falsos, savings inventados, scores apresentados como fatos ou licitações expiradas como abertas.

### L5 — Dados públicos são matéria-prima, não garantia
NEXLIC prioriza análise. Elegibilidade final depende dos pliegos, solvência e requisitos.

### L6 — Cérebro obrigatório
Toda ação material atualiza Status + Session + nota temática relevante.

---

## Registro de decisões

### D-001 — 2026-09-23 — Produto inicial
Escolhido: inteligência de contratação pública para Espanha.

Motivo:
- dor recorrente;
- dados públicos disponíveis;
- compradores B2B identificáveis;
- compatível com automação/IA.

### D-002 — 2026-09-24 — Marca
Marca escolhida: **NEXLIC**.
"Radar" fica como conceito/feature, não marca principal.

### D-003 — 2026-09-24 — Oferta
Founding 20 = **€79/mês**.

Motivo:
reduzir fricção do primeiro pagamento enquanto concorrentes já possuem mais maturidade/features.

### D-004 — 2026-09-24 — Aquisição
Principal wedge de aquisição:
**preview personalizado da empresa usando oportunidades públicas reais.**

### D-005 — 2026-09-24 — Deploy
Netlify é o host principal inicial.
Domínio próprio é adiado até existir validação/primeiro cliente.

### D-006 — 2026-09-24 — Pagamento
PayPal é o mecanismo inicial de cobrança.
Link oficial ativo:
https://www.paypal.com/ncp/payment/PLB-NVF56AYGCHAC

### D-007 — 2026-09-24 — Engenharia
Depois de incidentes de build, adota-se:
- uma mudança lógica por vez;
- ler erro exato;
- build verde antes da próxima alteração.

### D-008 — 2026-09-24 — Semântica do pipeline
Criado estágio **Qualified Prospect** antes de Preview Ready.

Motivo:
uma empresa pesquisada com bom ICP e matches preliminares não deve aparecer como se um preview já estivesse construído. A progressão correta passa a ser:
Qualified Prospect → Preview Ready → Demo Completed → Proposal Sent → Contract Sent → Won/Lost.


## 2026-09-26 — LeadFeed como segunda lane de receita
Decisão: validar LeadFeed em paralelo, sem substituir NEXLIC.
- Oferta inicial: 50 prospects B2B / €19 one-time.
- Regra: máximo de automação e mínima intervenção do owner.
- Não criar infraestrutura cara nem assinatura sofisticada antes de primeira venda.
- Reutilizar repo/Supabase/agente horário existentes para reduzir custo e tempo.
- Checkout LeadFeed deve ser específico; é proibido reutilizar o link de pagamento NEXLIC.
- Nenhum deploy ou checkout é considerado pronto sem verificação real.
