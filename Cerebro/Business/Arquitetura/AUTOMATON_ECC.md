# AUTOMATON + ECC — Revenue Operator Architecture

Última atualização: 2026-09-27

## Objetivo

Construir um operador autônomo que exista para **gerar receita real**, não para maximizar atividade ou número de features.

Princípio:
> Automaton fornece runtime, heartbeat, persistência, orçamento e autonomia.
> ECC fornece disciplina de execução, skills, verificação, aprendizagem e segurança.
> Cérebro Business fornece memória estratégica e estado comercial.

## Verdade atual

NEXLIC ainda não provou venda.
- Receita NEXLIC confirmada: €0.
- Pipeline existe, mas não prova demanda.
- O sistema deve tratar NEXLIC como hipótese comercial, não dogma.

## Regra de validação

Nenhuma oferta recebe investimento indefinido.

Cada experimento deve registrar:
- custo de compute;
- prospects qualificados;
- abordagens válidas;
- respostas;
- previews vistos;
- reuniões;
- pagamentos;
- receita;
- razão de perda.

Se não houver sinal suficiente, reduzir orçamento ou encerrar.

## Arquitetura

```
Coolify / VPS
└── Revenue Automaton
    ├── Runtime Automaton
    │   ├── ReAct loop
    │   ├── heartbeat
    │   ├── persistent state
    │   ├── budget / survival
    │   └── worker orchestration
    │
    ├── ECC-derived operating layer
    │   ├── continuous learning / instincts
    │   ├── plan -> execute -> verify
    │   ├── build-fix / TDD / review
    │   ├── security / destructive-action gates
    │   └── strategic context compaction
    │
    ├── Cérebro Business
    │   ├── Atlas
    │   ├── Status
    │   ├── Sessions
    │   ├── Decisions
    │   └── Revenue experiments
    │
    └── Business tools
        ├── public procurement data
        ├── web/company research
        ├── Supabase
        ├── Close
        ├── email @nexlic.es
        ├── GitHub
        ├── PayPal
        └── analytics
```

## ECC: o que reaproveitar

ECC é MIT e pode ser adaptado.

Usar seletivamente:
- continuous-learning-v2;
- project-scoped instincts;
- plan/verify workflows;
- build-fix;
- security-review concepts;
- destructive shell gating;
- token/context budgeting;
- strategic compaction;
- evaluator/promote/rollback pattern.

Não copiar tudo.
ECC tem centenas de skills/agentes e pode inflar contexto e custo.
Regra: lazy-load apenas a skill acionada pela tarefa.

## Revenue workers

### 1. Offer Scout
Procura dores e ofertas vendáveis usando sinais reais.

### 2. Prospect Hunter
Encontra ICP + decisor + evidência.

### 3. Delivery Builder
Cria o ativo que prova valor: preview, relatório, diagnóstico, demo ou automação.

### 4. Sales Operator
Mantém CRM, acompanha respostas e conduz até CTA/pagamento.

### 5. Product Engineer
Só programa quando existe gargalo comercial comprovado.

### 6. Verifier
Confere:
- fontes;
- build;
- links;
- elegibilidade não inventada;
- entrega;
- pagamentos.

### 7. CFO / Allocator
Move compute para experimentos que mostram sinal e corta desperdício.

## Experimentos econômicos atuais

### A. NEXLIC Managed
Resultado vendido: monitorização + priorização + GO/NO-GO.
Não depende de dashboard sofisticado.

### B. NEXLIC Tender Check
Produto avulso.
Cliente fornece licitação/PDF -> recebe análise paga.

### C. Automation/Freelance Operator
Pequenas integrações Python/n8n/API para gerar caixa mais rápido.

### D. Novas ofertas
Automaton pode propor novas ofertas, mas só entram no portfólio após:
1. evidência de dor;
2. cliente identificável;
3. entrega possível com nosso stack;
4. preço testável em <= 7 dias.

## Kill criteria

Uma ideia não continua só porque parece boa.

Sinais para reduzir/matar:
- muitas abordagens qualificadas e zero resposta;
- previews vistos sem CTA;
- interesse mas ninguém paga;
- entrega custa mais que margem;
- depende de feature grande antes de qualquer compra.

Sinais para aumentar orçamento:
- respostas explícitas;
- pedido de preço;
- pedido de demo;
- pedido de análise;
- pagamento;
- renovação.

## Segurança

- sem acesso irrestrito a carteira principal;
- orçamento diário rígido;
- secrets fora do repo;
- ação destrutiva bloqueada/confirmada;
- logs append-only;
- nenhuma mutação de produção sem verificação;
- nenhuma comunicação massiva ou enganosa.

## North Star

Antes de receita:
> intenção de compra verificável.

Depois:
> lucro = receita - compute - infraestrutura - custo de entrega.
