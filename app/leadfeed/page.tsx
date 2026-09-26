import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Database, Filter, Mail, MapPin, Radar, Sparkles } from "lucide-react";
import LeadFeedForm from "./leadfeed-form";

export const metadata: Metadata = {
  title: "LeadFeed — Prospectos B2B listos para vender",
  description: "Dinos qué vendes y dónde. LeadFeed encuentra y prioriza empresas que encajan con tu oferta y te entrega una lista accionable.",
};

const features = [
  ["Señales reales", "Priorizamos empresas con señales útiles: crecimiento, actividad, necesidad visible y encaje con tu oferta."],
  ["Sin listas basura", "No vendemos bases de datos gigantes. Cada lote se filtra por sector, zona y problema que puedes resolver."],
  ["Listo para contactar", "Recibes empresa, web, motivo del encaje y el ángulo de contacto para empezar a vender."],
];

export default function LeadFeedPage() {
  return (
    <main className="lf-page">
      <style>{`
        .lf-page{min-height:100vh;background:#07110d;color:#f3f7f5;font-family:Arial,Helvetica,sans-serif}
        .lf-wrap{width:min(1120px,calc(100% - 36px));margin:auto}
        .lf-nav{display:flex;align-items:center;justify-content:space-between;padding:24px 0}
        .lf-brand{display:flex;gap:10px;align-items:center;font-weight:900;font-size:20px;letter-spacing:-.4px}
        .lf-dot{width:12px;height:12px;border-radius:99px;background:#53e38c;box-shadow:0 0 24px #53e38c}
        .lf-pill{border:1px solid #244235;border-radius:999px;padding:8px 12px;color:#9cc7af;font-size:13px}
        .lf-hero{display:grid;grid-template-columns:1.2fr .8fr;gap:56px;align-items:center;padding:74px 0 82px}
        .lf-kicker{display:inline-flex;align-items:center;gap:8px;color:#69e99a;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:1.3px}
        .lf-title{font-size:clamp(44px,7vw,82px);line-height:.96;letter-spacing:-4px;margin:18px 0 24px;max-width:780px}
        .lf-title span{color:#67e89a}
        .lf-sub{font-size:19px;line-height:1.6;color:#a8bcb2;max-width:720px;margin:0 0 30px}
        .lf-price{display:flex;align-items:baseline;gap:10px;margin-top:24px}
        .lf-price strong{font-size:34px}.lf-price span{color:#8fa59a}
        .lf-card{background:linear-gradient(180deg,#112019,#0b1712);border:1px solid #294737;border-radius:24px;padding:24px;box-shadow:0 30px 80px #0008}
        .lf-preview{display:grid;gap:12px;margin-top:18px}
        .lf-row{display:grid;grid-template-columns:44px 1fr auto;gap:12px;align-items:center;padding:14px;background:#0d1a14;border:1px solid #213b2e;border-radius:14px}
        .lf-logo{width:44px;height:44px;border-radius:11px;background:#183025;display:grid;place-items:center;color:#67e89a}
        .lf-row b{display:block;font-size:14px}.lf-row small{color:#82988d}.lf-score{color:#67e89a;font-weight:900}
        .lf-proof{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:0 0 78px}
        .lf-feature{border-top:1px solid #244235;padding-top:20px}.lf-feature h3{font-size:17px;margin:10px 0}.lf-feature p{color:#8fa59a;line-height:1.6;margin:0;font-size:14px}
        .lf-how{background:#0b1712;border-top:1px solid #183126;border-bottom:1px solid #183126;padding:78px 0}
        .lf-howgrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:60px}
        .lf-how h2{font-size:42px;letter-spacing:-2px;margin:0 0 14px}.lf-how p{color:#95aa9f;line-height:1.6}
        .lf-steps{display:grid;gap:14px}.lf-step{display:flex;gap:14px;padding:18px;border:1px solid #244235;border-radius:16px;background:#0e1c16}
        .lf-stepnum{min-width:32px;height:32px;border-radius:99px;display:grid;place-items:center;background:#67e89a;color:#07110d;font-weight:900}
        .lf-step b{display:block;margin:2px 0 5px}.lf-step span{color:#90a59a;font-size:14px}
        .lf-cta{padding:84px 0}.lf-ctaBox{display:grid;grid-template-columns:1fr .9fr;gap:48px;align-items:start;background:#102019;border:1px solid #2a4a39;border-radius:26px;padding:38px}
        .lf-cta h2{font-size:40px;letter-spacing:-2px;margin:0 0 14px}.lf-cta p{color:#9bb0a5;line-height:1.6}
        .lf-badges{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}.lf-badge{display:flex;align-items:center;gap:7px;font-size:13px;color:#b9cbc1}
        .lf-foot{padding:30px 0 50px;color:#61766b;font-size:12px;text-align:center}
        @media(max-width:800px){.lf-hero,.lf-howgrid,.lf-ctaBox{grid-template-columns:1fr}.lf-hero{padding-top:38px}.lf-title{letter-spacing:-2px}.lf-proof{grid-template-columns:1fr}.lf-card{order:2}.lf-ctaBox{padding:24px}}
      `}</style>
      <div className="lf-wrap">
        <nav className="lf-nav">
          <div className="lf-brand"><span className="lf-dot" /> LeadFeed</div>
          <div className="lf-pill">Lote fundador · España</div>
        </nav>

        <section className="lf-hero">
          <div>
            <div className="lf-kicker"><Radar size={16}/> Prospección que trabaja por ti</div>
            <h1 className="lf-title">50 empresas que <span>encajan</span> con lo que vendes.</h1>
            <p className="lf-sub">Dinos tu cliente ideal, la zona y tu oferta. LeadFeed rastrea, filtra y prioriza prospectos para que abras el correo y ya tengas a quién vender.</p>
            <div className="lf-price"><strong>19 €</strong><span>primer lote fundador · 50 prospectos</span></div>
          </div>

          <div className="lf-card">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div><b>Vista previa del lote</b><div style={{fontSize:12,color:"#7f958a",marginTop:4}}>Ejemplo: clínicas · Barcelona</div></div>
              <Sparkles size={20} color="#67e89a"/>
            </div>
            <div className="lf-preview">
              {[
                ["A","Clínica Aurora","Sin reserva online","94"],
                ["M","MedEstetic BCN","WhatsApp sin automatizar","91"],
                ["N","NovaDerma","Crecimiento + nueva sede","87"],
                ["V","Vitalia Clinic","Formulario sin seguimiento","84"],
              ].map(([l,n,s,score])=>(
                <div className="lf-row" key={n}>
                  <div className="lf-logo">{l}</div>
                  <div><b>{n}</b><small>{s}</small></div>
                  <div className="lf-score">{score}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lf-proof">
          {features.map(([title,text],i)=>(
            <div className="lf-feature" key={title}>
              {i===0?<Database size={20} color="#67e89a"/>:i===1?<Filter size={20} color="#67e89a"/>:<Mail size={20} color="#67e89a"/>}
              <h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </section>
      </div>

      <section className="lf-how">
        <div className="lf-wrap lf-howgrid">
          <div><div className="lf-kicker"><MapPin size={16}/> Cero configuración complicada</div><h2>Lo configuras una vez. Nosotros hacemos la búsqueda.</h2><p>El lote se construye alrededor de tu oferta, no alrededor de una base de datos genérica.</p></div>
          <div className="lf-steps">
            <div className="lf-step"><div className="lf-stepnum">1</div><div><b>Dinos a quién vendes</b><span>Sector, ciudad o zona y qué problema resuelves.</span></div></div>
            <div className="lf-step"><div className="lf-stepnum">2</div><div><b>LeadFeed filtra y prioriza</b><span>Buscamos señales de encaje y descartamos ruido.</span></div></div>
            <div className="lf-step"><div className="lf-stepnum">3</div><div><b>Recibes el lote por email</b><span>50 empresas priorizadas y una razón clara para contactar.</span></div></div>
          </div>
        </div>
      </section>

      <section className="lf-cta" id="empezar">
        <div className="lf-wrap lf-ctaBox">
          <div>
            <div className="lf-kicker"><Sparkles size={16}/> Founding batch</div>
            <h2>Empieza con 50 prospectos por 19 €.</h2>
            <p>Sin permanencia. Este primer lote sirve para validar tu nicho y la calidad del filtro. Si no encontramos suficiente encaje, no rellenamos la lista con basura.</p>
            <div className="lf-badges">
              <span className="lf-badge"><CheckCircle2 size={15}/> Sin permanencia</span>
              <span className="lf-badge"><CheckCircle2 size={15}/> Entrega digital</span>
              <span className="lf-badge"><CheckCircle2 size={15}/> Filtro por zona</span>
            </div>
          </div>
          <LeadFeedForm />
        </div>
      </section>
      <footer className="lf-wrap lf-foot">LeadFeed · producto experimental del laboratorio Business · España</footer>
    </main>
  );
}
