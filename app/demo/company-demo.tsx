import { ArrowRight, Crosshair } from "lucide-react";

type Opportunity = {
  score: number;
  title: string;
  buyer: string;
  value: string;
  deadline: string;
  cpv: string;
  source: string;
};

type Props = {
  company: string;
  domain: string;
  sector: string;
  location: string;
  opportunities: Opportunity[];
};

export default function CompanyDemo({ company, domain, sector, location, opportunities }: Props) {
  return (
    <main className="demoShell">
      <nav className="nav shell">
        <a className="brand" href="/">
          <span className="brandMark"><Crosshair size={16} /></span>
          NEXLIC
        </a>
        <a className="button buttonDark" href="/#demo">Solicitar análisis <ArrowRight size={15}/></a>
      </nav>

      <section className="demoHero shell">
        <div className="demoKicker">Análisis preliminar preparado para {company}</div>
        <h1>Hemos encontrado oportunidades<br/>que podrían encajar con {company}.</h1>
        <p>
          Esta es una preselección inicial basada en la actividad pública de {company} y en licitaciones actualmente abiertas.
          NEXLIC no sustituye la revisión de solvencia ni de los pliegos: reduce el ruido para que el equipo empiece por lo que merece atención.
        </p>
        <div className="demoMeta">
          <span className="demoChip">{domain}</span>
          <span className="demoChip">{sector}</span>
          <span className="demoChip">{location}</span>
          <span className="demoChip">Datos públicos</span>
        </div>
      </section>

      <section className="shell demoGrid">
        {opportunities.map((op) => (
          <article className="demoOpp" key={op.title}>
            <div className="demoOppTop">
              <div className="microLabel">ENCAJE PRELIMINAR</div>
              <div className="demoScore">{op.score}</div>
            </div>
            <h2>{op.title}</h2>
            <p>{op.buyer}</p>
            <div className="demoStats">
              <div><span>Valor / presupuesto</span><strong>{op.value}</strong></div>
              <div><span>Cierre</span><strong>{op.deadline}</strong></div>
              <div><span>CPV / categoría</span><strong>{op.cpv}</strong></div>
              <div><span>Estado</span><strong>Abierta</strong></div>
            </div>
            <a className="demoSource" href={op.source} target="_blank" rel="noreferrer">Ver fuente pública ↗</a>
          </article>
        ))}
      </section>

      <section className="shell demoCta">
        <div>
          <h3>Esto es solo la primera criba.</h3>
          <p>Configuramos el perfil de empresa, afinamos CPVs, territorios e importes y dejamos el radar trabajando cada día.</p>
          <div className="demoDisclaimer">Los scores son una estimación preliminar de NEXLIC. La elegibilidad final requiere revisar pliegos, solvencia y requisitos de cada procedimiento.</div>
        </div>
        <div className="demoCtaRight">
          <a className="button buttonAccent" href="/#demo">Founding 20 · €79/mes <ArrowRight size={15}/></a>
        </div>
      </section>
    </main>
  );
}
