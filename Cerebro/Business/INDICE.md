# 🧭 ÍNDICE DO CÉREBRO BUSINESS

> Porta única de entrada para qualquer agente que trabalhe no projeto Business.
> O objetivo é preservar contexto, poupar tokens e impedir que decisões se percam entre chats/agentes.

## 1. Ler SEMPRE ao iniciar

1. `Cerebro/Business/INDICE.md` — esta porta.
2. `Cerebro/Business/ATLAS.md` — direção, modelo operacional, NOW/NEXT.
3. Últimas ~120 linhas de `Cerebro/Business/Status.md`.
4. A sessão mais recente em `Cerebro/Business/Sessions/`.

Nada mais é obrigatório. O resto entra por pergunta.

## 2. Regra de leitura

1. Não despejar a biblioteca inteira no contexto.
2. Procurar primeiro, ler depois.
3. Um assunto por consulta.
4. Ficheiros grandes são registros, não documentos para leitura integral.
5. Se uma resposta não estiver documentada, medir no sistema real e depois registrar.
6. Histórico é append-only. Não reescrever o passado para fazê-lo parecer mais limpo.

## 3. Donos da verdade

| Pergunta | Ficheiro |
|---|---|
| Para onde o Business vai? | [[ATLAS]] |
| O que já aconteceu? | [[Status]] |
| O que foi decidido e por quê? | [[DECISOES]] |
| O que é a NEXLIC agora? | [[NEXLIC]] |
| Como vendemos? | [[PLAYBOOK]] |
| Quais conectores/sistemas existem? | [[STACK]] |
| Que erros não podem se repetir? | [[POSTMORTEMS]] |
| O que os agentes precisam falar entre si? | [[MESA]] |
| O que aconteceu numa sessão específica? | `Sessions/YYYY-MM-DD.md` |

## 4. Escrita obrigatória

Após qualquer lote material:

- acrescentar em `Status.md`;
- atualizar a sessão do dia;
- atualizar o ficheiro temático afetado;
- registrar decisão nova em `DECISOES.md` se mudou estratégia/regra;
- registrar erro estrutural em `Erros/POSTMORTEMS.md`;
- usar `MESA.md` se a informação precisar ser entregue a outro agente.

## 5. Prioridade

O Cérebro existe para fazer dinheiro com menos retrabalho.

Quando documentação e estado real divergirem:
1. medir o sistema real;
2. corrigir o documento;
3. registrar a correção no Status.

## 6. Regra operacional principal

**Nenhum agente pode declarar algo como feito sem evidência verificável.**

Exemplos:
- deploy = só está feito quando build/deploy estiver verde e URL responder;
- pagamento = só existe quando o link real estiver ativo;
- lead = só existe quando há pessoa/empresa real registrada;
- cliente = só existe quando houve acordo/pagamento;
- oportunidade pública = só é chamada de aberta se a fonte pública atual confirmar.
