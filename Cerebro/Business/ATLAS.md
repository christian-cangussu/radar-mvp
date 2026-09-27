# BUSINESS ATLAS — O negócio em um documento

Última atualização: 2026-09-24 · Europe/Madrid

## §0 — Âncora

O projeto **Business** existe para transformar capacidade técnica, automação e IA em receita real.

Objetivo atual:
> **primeiro euro da NEXLIC, depois transformar o processo em máquina repetível.**

A regra é simples:
- receita e prova real > features;
- evidência > narrativa;
- automação > trabalho manual repetitivo;
- personalização > spam;
- build verde > velocidade aparente.

## §1 — Owner

Owner: Christian Cangussu.

Pode usar nome, email, contas e conectores autorizados para operar o negócio.
Não pedir decisões rotineiras.
Escalar apenas o que exige confirmação irreversível, informação que não existe ou autorização obrigatória da plataforma.

## §2 — Projeto ativo

### NEXLIC
Produto B2B para contratação pública em Espanha.

Posicionamento:
> **Inteligencia para contratación pública.**

Promessa:
> **No mostramos más licitaciones; priorizamos cuáles merece la pena perseguir.**

Mercado inicial:
- Espanha;
- SMEs/mid-market;
- empresas que já vendem, licitam ou têm capacidade de vender ao setor público;
- setores prioritários: IT, engenharia, manutenção/facilities, construção, energia/instalações, serviços técnicos.

Oferta atual:
- Founding 20;
- €79/mês;
- onboarding/configuração incluídos;
- matching empresa × oportunidade;
- resumo de expedientes;
- alertas;
- demonstração de valor antes da compra.

Produção:
- https://nexlic.netlify.app

Pagamento verificado:
- PayPal ACTIVE;
- Produto: NEXLIC Founding 20 - Primer mes;
- €79 EUR;
- https://www.paypal.com/ncp/payment/PLB-NVF56AYGCHAC

## §3 — Máquina de receita

Fluxo alvo:

```
dados públicos / sinais de contratação
→ empresa ICP
→ decisor
→ preview personalizado com oportunidades reais
→ contato permitido / inbound / LinkedIn
→ lead
→ Close
→ demo opcional via Calendly
→ PayPal €79
→ onboarding
→ retenção
```

## §4 — Stack comercial

- GitHub — código + Cérebro
- Netlify — produção
- Supabase — leads/companies/opportunities/matches
- Gmail — inbound/respostas
- Close — CRM/pipeline
- Calendly — reunião
- Clay — prospecção/enriquecimento
- Crustdata — pesquisa de empresas/pessoas
- Metricool — conteúdo/LinkedIn
- PayPal — cobrança

## §5 — Estado atual

Prospects com preview:
- agap2 Spain
- Recodme
- SOTEC CONSULTING

Pipeline Close:
- Preview Ready
- Demo Completed
- Proposal Sent
- Contract Sent
- Won
- Lost

Landing:
- captação via Supabase;
- metadata social;
- pricing Founding 20;
- demos personalizadas.

## §6 — NOW

1. Produção sempre verde.
2. LinkedIn launch → tráfego real.
3. Leads inbound → resposta rápida.
4. Encontrar empresas com sinal real de contratação pública.
5. Criar preview relevante.
6. Converter primeira empresa a €79.
7. Documentar objeções e motivos de compra/não compra.

## §7 — NEXT

Depois do primeiro pagamento:
1. onboarding real;
2. acompanhar uso e valor percebido;
3. fechar primeiro case;
4. revisar preço;
5. automatizar ingestão PLACSP/CPV/documentos;
6. expandir aquisição com prova social real.

## §8 — NÃO FAZER

- não construir dashboard sofisticado sem comprador;
- não inventar métricas;
- não dizer que empresa pode licitar sem validar requisitos;
- não disparar email comercial indiscriminado;
- não misturar números mock com oportunidades reais sem rotular;
- não empilhar commits quando build está vermelho;
- não criar ferramentas/conectores sem impacto provável em receita.

## §9 — Métrica principal

Até o primeiro cliente:
> número de conversas qualificadas e intenção de compra.

Depois do primeiro cliente:
> MRR + retenção + oportunidades relevantes entregues por cliente.


## §10 — Hosting / continuidade (2026-09-24)
- Netlify exibiu aviso de **operational credits**: sites publicados seguem online, mas production deploys e Agent Runners estão pausados até próximo ciclo ou upgrade.
- Não gastar com upgrade Netlify agora.
- Decisão do owner para executar em casa: migrar o repositório NEXLIC para **Coolify** e comprar/configurar domínio próprio. Compra/domínio requer ação/autorização do owner; não executar custo automaticamente.
- Até a migração, prioridade comercial continua primeira receita; não tratar impossibilidade de deploy Netlify como motivo para parar prospecção.


## §11 — Portfólio de domínios NEXLIC (2026-09-27)

Domínios do owner:
- **nexlic.es** — domínio principal / Espanha / produto comercial principal.
- **nexlic.online** — produto transacional self-service: análise pontual de licitação / GO-NO-GO / Tender Check.
- **nexlic.eu** — expansão UE: oportunidades europeias e contratos transfronteiriços.
- **nexlic.net** — infraestrutura B2B/white-label/API/rede de parceiros; não priorizar antes de haver uso real.

Regra:
> Não criar quatro empresas independentes. Usar um backend, um CRM, um Cérebro Business e um operador Automaton. Cada domínio testa uma hipótese de receita diferente.

### Oferta por domínio

**nexlic.es — Managed Procurement Intelligence**
- Free preview;
- Founding 20 €79/mês enquanto valida;
- oferta preferida para receita inicial: serviço gerenciado €149–€249/mês;
- entrega: oportunidades priorizadas, requisitos, riscos e GO/NO-GO.

**nexlic.online — Tender Check**
- produto avulso e quase automático;
- cliente envia link/PDF de licitação;
- recebe resumo executivo + requisitos + riscos + GO/NO-GO;
- hipótese de preço inicial para teste: €19–€49 por análise;
- objetivo: gerar primeiro dinheiro sem exigir assinatura.

**nexlic.eu — EU Tender Radar**
- monitorização de oportunidades UE/TED e contratos transfronteiriços;
- alvo inicial: empresas espanholas com capacidade de vender fora de Espanha;
- só ativar comercialmente após validar pipeline espanhol ou encontrar sinal claro de procura.

**nexlic.net — White-label / API / Partner Network**
- feeds estruturados;
- análise de pliegos via API;
- white-label para consultorias de licitações;
- parceria/subcontratação;
- alto ticket potencial, mas NEXT, não NOW.

### Estratégia econômica

Ordem de teste:
1. vender serviço gerenciado em nexlic.es;
2. lançar Tender Check em nexlic.online;
3. provar conversão e margem;
4. só então ativar nexlic.eu;
5. API/white-label em nexlic.net quando houver clientes/partners reais.

### Operação autônoma desejada

Um único Business Automaton:
- pesquisa empresas e oportunidades;
- analisa pliegos;
- cria previews dinâmicos;
- atualiza Close;
- lê inbound;
- envia por @nexlic.es quando permitido;
- entrega análise;
- acompanha pagamento;
- registra tudo no Cérebro Business;
- mede receita por domínio e corta experimentos que só gastam compute.

Objetivo:
> transformar os domínios em experimentos de receita, não em projetos paralelos que consomem atenção.
