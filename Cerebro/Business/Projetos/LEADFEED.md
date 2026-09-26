# LeadFeed

Última atualização: 2026-09-26 · Europe/Madrid

## Tese
Micro-negócio B2B de baixa intervenção: o comprador informa cliente ideal, zona e oferta; o sistema pesquisa, filtra e entrega prospectos priorizados.

## Oferta de validação
- LeadFeed — Lote Fundador
- 50 prospectos B2B
- €19 pagamento único
- Espanha
- entrega digital por email
- sem permanência

## Produto
Código adicionado ao mesmo repositório em:
- `app/leadfeed/page.tsx`
- `app/leadfeed/leadfeed-form.tsx`

A landing grava pedidos na tabela `public.leads` do Supabase com `source='leadfeed'` e metadata de sector, localização e oferta.

O fluxo suporta `NEXT_PUBLIC_LEADFEED_PAYMENT_URL`; quando essa env var existir, um pedido válido é guardado e o browser segue para o checkout.

## Automação
O agente horário existente NEXLIC Revenue Agent foi ampliado com uma lane LeadFeed para:
- detectar novos pedidos LeadFeed;
- deduplicar Gmail;
- verificar checkout/pagamentos PayPal;
- entregar 50 leads reais após pagamento confirmado;
- fazer prospecção de compradores em volume muito baixo e com contexto;
- registrar fulfillment para impedir duplicação.

## Estado verificável
- Código LeadFeed está em `main`.
- Supabase Radar está ACTIVE_HEALTHY.
- PayPal atual possui apenas o link NEXLIC ACTIVE no momento da verificação.
- A criação do link PayPal LeadFeed foi preparada com €19 e notas obrigatórias, mas o conector abriu formulário interativo; portanto NÃO existe ainda checkout LeadFeed confirmado/ativo.
- Netlify continua com deploy de produção antigo; tentativa via conector devolveu instrução de CLI, não um deploy executado. Portanto `/leadfeed` ainda NÃO é declarado publicado.
- Execução imediata do Revenue Agent atualizado foi solicitada; isso confirma apenas o pedido de execução, não o resultado do run.

## Próximo gate
1. ativar/confirmar o payment link LeadFeed;
2. definir `NEXT_PUBLIC_LEADFEED_PAYMENT_URL`;
3. obter deploy verde e verificar `/leadfeed`;
4. deixar o agente operar aquisição → pagamento → entrega.
