import {
  Bell,
  ChevronDown,
  Crosshair,
  FileText,
  LayoutDashboard,
  Search,
  SlidersHorizontal,
  Target,
} from "lucide-react";

const rows = [
  ["94","Mantenimiento integral de instalaciones","Ajuntament de Barcelona","€428.000","14 días"],
  ["89","Asistencia técnica para sistemas de información","Administración General","€186.500","9 días"],
  ["83","Automatización de procesos y tratamiento de datos","Entidad pública empresarial","€96.000","21 días"],
  ["78","Soporte y evolución de aplicaciones corporativas","Consorci públic","€312.000","17 días"],
  ["74","Servicios de consultoría técnica especializada","Empresa pública","€74.000","6 días"],
];

export default function Dashboard() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <a className="brand dashBrand" href="/"><span className="brandMark"><Crosshair size={15}/></span> RADAR</a>
        <div className="sideSection">
          <span className="sideLabel">Workspace</span>
          <a className="sideLink active" href="#"><LayoutDashboard size={16}/> Oportunidades</a>
          <a className="sideLink" href="#"><Target size={16}/> Perfil de empresa</a>
          <a className="sideLink" href="#"><FileText size={16}/> Expedientes guardados</a>
        </div>
        <div className="sideSection">
          <span className="sideLabel">Vistas</span>
          <a className="sideLink" href="#"><span className="viewDot green"/> Prioridad alta <b>3</b></a>
          <a className="sideLink" href="#"><span className="viewDot amber"/> Revisar hoy <b>7</b></a>
          <a className="sideLink" href="#"><span className="viewDot gray"/> Todas <b>34</b></a>
        </div>
        <div className="sidebarBottom">
          <div className="companyAvatar">AC</div>
          <div><strong>Acme Ingeniería</strong><span>Plan Pro</span></div>
          <ChevronDown size={15}/>
        </div>
      </aside>

      <section className="dashMain">
        <header className="dashHeader">
          <div>
            <h1>Oportunidades</h1>
            <p>Contratos que encajan con el perfil de Acme Ingeniería.</p>
          </div>
          <button className="iconButton"><Bell size={17}/></button>
        </header>

        <div className="dashToolbar">
          <div className="dashSearch"><Search size={16}/><input placeholder="Buscar por organismo, CPV o servicio…"/></div>
          <button className="filterButton"><SlidersHorizontal size={15}/> Filtros <span>3</span></button>
        </div>

        <div className="dashMetrics">
          <div><span>Nuevas hoy</span><strong>12</strong><small>+4 vs. ayer</small></div>
          <div><span>Prioridad alta</span><strong>3</strong><small>score ≥ 85</small></div>
          <div><span>Valor potencial</span><strong>€1,42M</strong><small>oportunidades abiertas</small></div>
          <div><span>Próximo cierre</span><strong>6 días</strong><small>consultoría técnica</small></div>
        </div>

        <div className="opportunityTable">
          <div className="tableTop">
            <div><strong>Feed priorizado</strong><span>34 oportunidades activas</span></div>
            <div className="freshness"><span className="liveDot"/> Actualizado hace 4 min</div>
          </div>
          <div className="tableHeader">
            <span>Match</span><span>Oportunidad</span><span>Organismo</span><span>Valor</span><span>Plazo</span>
          </div>
          {rows.map((r) => (
            <div className="tableRow" key={r[1]}>
              <span><b className={Number(r[0]) >= 85 ? "scoreHigh" : "scoreMid"}>{r[0]}</b></span>
              <span className="tableTitle"><strong>{r[1]}</strong><small>Ver expediente →</small></span>
              <span>{r[2]}</span>
              <span className="tableMoney">{r[3]}</span>
              <span>{r[4]}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
