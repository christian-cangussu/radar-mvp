import { ArrowRight, Crosshair, ShieldCheck, Clock3, BrainCircuit, AlertTriangle, CheckCircle2, RefreshCw, CalendarDays } from "lucide-react";

type Opportunity={score:number;title:string;buyer:string;value:string;deadline:string;cpv:string;source:string};
type Props={company:string;domain:string;sector:string;location:string;opportunities:Opportunity[]};

export default function CompanyDemo({company,domain,sector,location,opportunities}:Props){
 const top=opportunities[0];
 return <main className="decisionDemo">
  <nav className="nav shell"><a className="brand" href="/"><span className="brandMark"><Crosshair size={16}/></span>NEXLIC</a><div className="decisionLive"><span/>DECISION TWIN · LIVE PREVIEW</div></nav>
  <section className="decisionHero shell">
   <div><div className="demoKicker">PREPARADO PARA {company}</div><h1>No revises más licitaciones.<br/><em>Decide mejor cuáles perseguir.</em></h1><p>NEXLIC convierte oportunidades públicas en una cola de decisiones: evidencia, posibles bloqueadores, cambios y próximos pasos. Y recuerda por qué tu empresa dice GO o NO-GO.</p></div>
   <div className="decisionIdentity"><small>DNA EMPRESARIAL</small><strong>{company}</strong><span>{sector} · {location}</span><span>{domain}</span><b><BrainCircuit size={14}/> Memoria de decisión activa</b></div>
  </section>

  <section className="shell decisionStrip">
   <div><ShieldCheck/><span>Fuentes</span><b>Auditables</b></div><div><BrainCircuit/><span>Memoria</span><b>Privada</b></div><div><Clock3/><span>Decisiones</span><b>{opportunities.length} pendientes</b></div><div><AlertTriangle/><span>Prioridad</span><b>Killers primero</b></div>
  </section>

  <section className="shell decisionFocus">
   <div className="decisionFocusTop"><div><span className="decisionBadge">DECIDIR HOY</span><small>{top.buyer}</small><h2>{top.title}</h2></div><div className="decisionScore"><strong>{top.score}</strong><span>PRIORIDAD<br/>/ 100</span></div></div>
   <div className="decisionNumbers"><div><span>VALOR</span><b>{top.value}</b></div><div><span>CIERRE</span><b>{top.deadline}</b></div><div><span>ÁREA</span><b>{top.cpv}</b></div></div>

   <div className="decisionCards">
    <article><h3><CheckCircle2/> POR QUÉ MERECE ATENCIÓN</h3><p>Actividad y alcance técnico compatibles con el perfil público observado de {company}.</p><p>La oportunidad entra en el radar por señales específicas, no solo por palabras clave.</p><small>El encaje comercial no confirma elegibilidad.</small></article>
    <article className="danger"><h3><AlertTriangle/> KILLERS FIRST</h3><div className="decisionCheck amber"><b>Solvencia</b><span>Validar en PCAP antes de invertir horas.</span></div><div className="decisionCheck red"><b>Certificaciones / fabricante</b><span>Posible bloqueador. Revisión documental requerida.</span></div><div className="decisionCheck green"><b>Encaje de actividad</b><span>Señal pública coherente encontrada.</span></div></article>
    <article><h3><RefreshCw/> WHAT CHANGED?</h3><p><b>Nueva en tu radar.</b> Priorizada para revisión por NEXLIC.</p><p>No afirmamos cambios del pliego sin una versión anterior verificable.</p><small>Cuando exista una actualización, el Twin mostrará exactamente qué cambió.</small></article>
   </div>

   <div className="reversePlan"><div><h3><CalendarDays/> REVERSE DEADLINE</h3><p>Convierte la fecha límite en trabajo concreto.</p></div><div className="reverseSteps"><span><b>HOY</b> Validar blockers</span><i>→</i><span><b>26 SEP</b> GO / NO-GO</span><i>→</i><span><b>30 SEP</b> Evidencias / partners</span><i>→</i><span><b>05 OCT</b> Revisión</span><i>→</i><span><b>08 OCT</b> Cierre</span></div></div>

   <div className="decisionActions"><div><b>Tu decisión mejora la siguiente.</b><span>NEXLIC recordará el motivo para no repetir trabajo inútil.</span></div><button className="goBtn">GO · REVISAR</button><button className="noBtn">NO-GO</button><a href={top.source} target="_blank" rel="noreferrer">Ver evidencia ↗</a></div>
  </section>

  <section className="shell decisionQueue"><div className="decisionQueueHead"><div><small>DESPUÉS DE ESTA DECISIÓN</small><h2>Siguientes en la cola</h2></div><span>Prioridad ≠ probabilidad de adjudicación</span></div>
   {opportunities.slice(1).map(op=><article key={op.title}><div className="queueScore">{op.score}</div><div><small>REVISAR · {op.buyer}</small><h3>{op.title}</h3><p>{op.value} · {op.deadline}</p></div><a href={op.source} target="_blank" rel="noreferrer"><ArrowRight/></a></article>)}
  </section>

  <section className="shell decisionMemory"><div><small>EL ACTIVO QUE CRECE CON EL USO</small><h2>El Decision Twin recuerda lo que un buscador olvida.</h2><p>Capacidades confirmadas, límites, certificaciones, territorios, partners, motivos de descarte y resultados. El preview empieza solo con evidencia pública; el conocimiento privado aparece con decisiones reales del equipo.</p></div><div><span>Confirmado públicamente</span><b>Ciberseguridad</b><b>Actividad en contratación pública</b><em>Por confirmar: solvencia · certificaciones por expediente · preferencias internas</em></div></section>
  <section className="shell demoCta"><div><h3>No necesitas más alertas. Necesitas saber dónde merece la pena actuar.</h3><p>Founding 20 incluye configuración del perfil, radar continuo y Decision Twin desde el primer día.</p></div><div className="demoCtaRight"><a className="button buttonAccent" href="/#demo">Founding 20 · €79/mes <ArrowRight size={15}/></a></div></section>
 </main>
}