import CompanyDemo from "../company-demo";

export default function Page() {
  return <CompanyDemo
    company="PERSEUS CIBERSEGURIDAD"
    domain="pers.eus"
    sector="Ciberseguridad"
    location="Euskadi · España"
    opportunities={[
      {
        score: 94,
        title: "Renovación del sistema de Firewalls y plataforma de seguridad asociada en Cyberzaintza",
        buyer: "EJIE / Cyberzaintza · Euskadi",
        value: "€198.347 sin IVA",
        deadline: "08 oct 2026 · 10:00",
        cpv: "32500000 · 48730000 · 50332000",
        source: "https://www.ejie.euskadi.eus/"
      },
      {
        score: 91,
        title: "Operación, mantenimiento y monitorización de infraestructura de red y seguridad IT",
        buyer: "Consorcio de Aguas Bilbao Bizkaia",
        value: "€400.000 base · €1,2M estimado",
        deadline: "30 sep 2026 · 13:00",
        cpv: "72315000 · 72700000",
        source: "https://www.contratacion.euskadi.eus/"
      },
      {
        score: 89,
        title: "Servicios de Ciberseguridad para Canal de Isabel II",
        buyer: "Canal de Isabel II · Madrid",
        value: "€5M base · €6,25M estimado",
        deadline: "08 oct 2026 · 23:59",
        cpv: "SOC · OTS · Riesgos y madurez",
        source: "https://contratos-publicos.comunidad.madrid/contrato-publico/servicios-ciberseguridad-canal-isabel-ii-sa-mp"
      }
    ]}
  />;
}