import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  Crosshair,
  FileText,
  Filter,
  Search,
  ShieldCheck,
} from "lucide-react";
import LeadForm from "./lead-form";

const opportunities = [
  {
    score: 94,
    title: "Servicio de mantenimiento integral de instalaciones",
    buyer: "Ajuntament de Barcelona",
    value: "€428.000",
    deadline: "14 días",
    cpv: "50700000",
    match: "Experiencia y CPV alineados",
  },
  {
    score: 89,
    title: "Asistencia técnica para sistemas de información",
    buyer: "Administración General",
    value: "€186.500",
    deadline: "9 días",
    cpv: "72200000",
    match: "Capacidad técnica compatible",
  },
  {
    score: 83,
    title: "Automatización de procesos y tratamiento de datos",
    buyer: "Entidad pública empresarial",
    value: "€96.000",
    deadline: "21 días",
    cpv: "72500000",
    match: "Alta afinidad por servicios",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#">
          <span className="brandMark"><Crosshair size={16} /></span>
          NEXLIC
        </a>
        <div className="navLinks">
          <a href="#producto">Producto</a>
          <a href="#metodo">Cómo funciona</a>
          <a href="#precio">Precio</a>
        </div>
        <div className="navActions">
          <a className="textButton" href="/dashboard">Ver producto</a>
          <a className="button buttonDark" href="#demo">
            Solicitar acceso <ArrowRight size={15} />
          </a>
        </div>
      </nav>

      <section className="hero shell">
        <div className="heroCopy">
          <div className="eyebrow"><span /> Inteligencia de contratación pública</div>
          <h1>
            El contrato ya está publicado.
            <br />
            <em>La pregunta es si lo vas a ver a tiempo.</em>
          </h1>
          <p className="heroLead">
            NEXLIC revisa contratación pública, entiende qué vende tu empresa y
            prioriza únicamente las oportunidades que merecen una decisión.
          </p>
          <div className="heroActions">
            <a className="button buttonAccent" href="#demo">
              Analizar mi empresa <ArrowRight size={16} />
            </a>
            <a className="button buttonGhost" href="/dashboard">
              Explorar el producto
            </a>
          </div>
          <div className="trustLine">
            <span><ShieldCheck size={15}/> Fuentes oficiales</span>
            <span><Filter size={15}/> Filtrado por CPV</span>
            <span><CalendarClock size={15}/> Vigilancia continua</span>
          </div>
        </div>

        <div className="productStage" aria-label="Vista previa de NEXLIC">
          <div className="stageTop">
            <div className="stageTitle">
              <span className="liveDot" />
              Feed de oportunidades
            </div>
            <div className="stageMeta">Actualizado hace 4 min</div>
          </div>

          <div className="stageSearch">
            <Search size={15} />
            <span>Ingeniería · Mantenimiento · Catalunya</span>
            <kbd>⌘ K</kbd>
          </div>

          <div className="primaryOpportunity">
            <div className="opportunityHeader">
              <div>
                <div className="microLabel">MEJOR MATCH DE HOY</div>
                <h3>Servicio de mantenimiento integral de instalaciones</h3>
              </div>
              <div className="scoreRing">
                <strong>94</strong>
                <span>match</span>
              </div>
            </div>
            <div className="opportunityStats">
              <div><span>Valor estimado</span><strong>€428.000</strong></div>
              <div><span>Plazo</span><strong>14 días</strong></div>
              <div><span>CPV</span><strong>50700000</strong></div>
            </div>
            <div className="matchReason">
              <Check size={14} />
              Encaja con 4 de 5 capacidades registradas de tu empresa
            </div>
          </div>

          <div className="miniRows">
            {opportunities.slice(1).map((item) => (
              <div className="miniRow" key={item.title}>
                <div className="miniScore">{item.score}</div>
                <div className="miniCopy">
                  <strong>{item.title}</strong>
                  <span>{item.buyer}</span>
                </div>
                <div className="miniValue">
                  <strong>{item.value}</strong>
                  <span>{item.deadline}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="stageFooter">
            <span>12 oportunidades nuevas</span>
            <span className="muted">3 requieren revisión</span>
          </div>
        </div>
      </section>

      <section className="proofStrip">
        <div className="shell proofInner">
          <div className="proofHeadline">Menos portales. Más decisiones.</div>
          <div className="proofItem"><strong>01</strong><span>Detectar</span></div>
          <div className="proofItem"><strong>02</strong><span>Entender</span></div>
          <div className="proofItem"><strong>03</strong><span>Priorizar</span></div>
          <div className="proofItem"><strong>04</strong><span>Actuar</span></div>
        </div>
      </section>

      <section className="section shell" id="producto">
        <div className="sectionIntro">
          <div className="eyebrow"><span /> Producto</div>
          <h2>No es un buscador de licitaciones.<br/>Es una bandeja de decisiones.</h2>
          <p>
            Lo importante no es encontrar más expedientes. Es saber cuáles
            justifican el tiempo de tu equipo antes que el resto.
          </p>
        </div>

        <div className="featureGrid">
          <article className="feature featureLarge">
            <div className="featureIcon"><Crosshair size={18}/></div>
            <h3>Matching empresa × contrato</h3>
            <p>NEXLIC compara actividad, CPV, geografía, importe, capacidades y señales del expediente.</p>
            <div className="signalBoard">
              <div className="signalRow"><span>CPV compatible</span><b>+24</b></div>
              <div className="signalRow"><span>Capacidad técnica</span><b>+31</b></div>
              <div className="signalRow"><span>Geografía</span><b>+18</b></div>
              <div className="signalRow"><span>Historial del comprador</span><b>+13</b></div>
              <div className="signalTotal"><span>Score NEXLIC</span><strong>86</strong></div>
            </div>
          </article>

          <article className="feature">
            <div className="featureIcon"><FileText size={18}/></div>
            <h3>80 páginas → 90 segundos</h3>
            <p>Presupuesto, solvencia, fechas, criterios y riesgos en un resumen que permite decidir rápido.</p>
            <div className="documentCard">
              <span>PLIEGO_TECNICO.pdf</span>
              <div className="docLine w90"/>
              <div className="docLine w70"/>
              <div className="docHighlight">Solvencia técnica · 3 contratos similares</div>
              <div className="docLine w80"/>
            </div>
          </article>

          <article className="feature">
            <div className="featureIcon"><Building2 size={18}/></div>
            <h3>Aprende cómo compra cada organismo</h3>
            <p>Histórico de adjudicaciones, importes y patrones para contextualizar cada oportunidad.</p>
            <div className="buyerCard">
              <div><span>Organismo</span><strong>Ajuntament de Barcelona</strong></div>
              <div className="buyerStats">
                <span><b>24</b> contratos analizados</span>
                <span><b>€7,8M</b> volumen</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="darkSection" id="metodo">
        <div className="shell">
          <div className="darkIntro">
            <div className="eyebrow eyebrowDark"><span /> Operación</div>
            <h2>Un analista que empieza antes que tu jornada.</h2>
            <p>NEXLIC vigila, ordena y prepara. Tu equipo entra cuando existe una decisión real.</p>
          </div>
          <div className="timeline">
            {[
              ["06:00","Ingesta","Nuevos expedientes y cambios publicados"],
              ["06:03","Clasificación","CPV, importe, territorio y categoría"],
              ["06:05","Matching","Cada contrato contra el perfil de tu empresa"],
              ["06:07","Resumen","Requisitos, riesgos, fechas y recomendación de revisión"],
              ["06:10","Entrega","Solo las oportunidades por encima de tu umbral"],
            ].map(([time,title,body], i) => (
              <div className="timelineRow" key={title}>
                <div className="timelineTime">{time}</div>
                <div className="timelineDot"><span>{i+1}</span></div>
                <div className="timelineText"><strong>{title}</strong><span>{body}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="splitStatement">
          <div>
            <div className="eyebrow"><span /> Principio</div>
            <h2>El problema nunca fue la falta de información.</h2>
          </div>
          <div className="statementCopy">
            <p>
              La información pública ya existe. Está fragmentada, llega en formatos incómodos
              y exige demasiadas horas para convertirla en una decisión comercial.
            </p>
            <p>
              NEXLIC convierte publicación pública en una lista priorizada de oportunidades
              que tu empresa realmente puede perseguir.
            </p>
          </div>
        </div>
      </section>

      <section className="pricingSection shell" id="precio">
        <div className="pricingCard">
          <div>
            <div className="eyebrow"><span /> Acceso inicial</div>
            <h2>Cuesta menos que perder una sola oportunidad.</h2>
            <p>Empezamos con un único plan mientras afinamos el producto con las primeras empresas.</p>
          </div>
          <div className="priceBlock">
            <div><strong>€199</strong><span>/mes</span></div>
            <ul>
              <li><Check size={15}/> Perfil de empresa</li>
              <li><Check size={15}/> Matching y prioridad</li>
              <li><Check size={15}/> Resumen de expedientes</li>
              <li><Check size={15}/> Alertas de nuevas oportunidades</li>
            </ul>
            <a className="button buttonAccent fullButton" href="#demo">Solicitar acceso <ArrowRight size={15}/></a>
          </div>
        </div>
      </section>

      <section className="finalCta shell" id="demo">
        <div className="finalEyebrow">NEXLIC / ACCESO ANTICIPADO</div>
        <h2>Antes de venderte nada,<br/>te enseñamos qué estás dejando pasar.</h2>
        <p>Envíanos la web de tu empresa. Preparamos una muestra con oportunidades de tu sector.</p>
        <LeadForm />
        <div className="formNote">Sin tarjeta. Sin demo de 45 minutos. Una muestra con oportunidades reales.</div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brandMark"><Crosshair size={15}/></span> NEXLIC</div>
        <div>Contratación pública, sin ruido.</div>
        <div className="footerRight">España · 2026</div>
      </footer>
    </main>
  );
}
