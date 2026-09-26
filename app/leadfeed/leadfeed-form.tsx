"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

export default function LeadFeedForm() {
  const [sector,setSector]=useState("");
  const [location,setLocation]=useState("");
  const [offer,setOffer]=useState("");
  const [email,setEmail]=useState("");
  const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");

  const supabase = useMemo(() => {
    const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    return url && key ? createClient(url,key) : null;
  },[]);

  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!supabase){ setStatus("error"); return; }
    setStatus("sending");
    const {error}=await supabase.from("leads").insert({
      website: `leadfeed:${sector.trim()}:${location.trim()}`.slice(0,500),
      email: email.trim().toLowerCase(),
      source: "leadfeed",
      metadata: {
        landing:"leadfeed",
        sector:sector.trim(),
        location:location.trim(),
        offer:offer.trim(),
        path:window.location.pathname,
        query:window.location.search
      }
    });
    if(error){setStatus("error");return;}
    setStatus("success");
    const paymentUrl=process.env.NEXT_PUBLIC_LEADFEED_PAYMENT_URL;
    if(paymentUrl) window.location.href=paymentUrl;
  }

  const inputStyle={width:"100%",boxSizing:"border-box" as const,background:"#09140f",border:"1px solid #2b4c3a",borderRadius:12,padding:"13px 14px",color:"#f3f7f5",fontSize:14,outline:"none"};
  const labelStyle={display:"grid",gap:7,fontSize:12,color:"#9db1a6",fontWeight:700};

  if(status==="success" && !process.env.NEXT_PUBLIC_LEADFEED_PAYMENT_URL){
    return <div style={{padding:24,border:"1px solid #2b4c3a",borderRadius:16,background:"#0a1611"}}><CheckCircle2 color="#67e89a"/><b style={{display:"block",marginTop:12}}>Solicitud recibida.</b><p style={{color:"#90a59a",lineHeight:1.5,fontSize:14}}>Tu configuración está guardada. Te enviaremos el enlace de activación del lote fundador.</p></div>
  }

  return (
    <form onSubmit={submit} style={{display:"grid",gap:12,padding:20,borderRadius:18,background:"#0a1611",border:"1px solid #284735"}}>
      <label style={labelStyle}>Cliente ideal / sector<input style={inputStyle} value={sector} onChange={e=>setSector(e.target.value)} placeholder="Ej. clínicas estéticas" required/></label>
      <label style={labelStyle}>Ciudad o zona<input style={inputStyle} value={location} onChange={e=>setLocation(e.target.value)} placeholder="Ej. Barcelona" required/></label>
      <label style={labelStyle}>Qué vendes<input style={inputStyle} value={offer} onChange={e=>setOffer(e.target.value)} placeholder="Ej. automatización de WhatsApp" required/></label>
      <label style={labelStyle}>Email de entrega<input style={inputStyle} type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@empresa.es" required/></label>
      <button type="submit" disabled={status==="sending"} style={{marginTop:4,border:0,borderRadius:12,padding:"14px 16px",background:"#67e89a",color:"#06110c",fontSize:14,fontWeight:900,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
        {status==="sending"?"Guardando…":"Quiero mi lote por 19 €"} <ArrowRight size={17}/>
      </button>
      {status==="error"?<div style={{fontSize:12,color:"#ff9b9b"}}>No hemos podido guardar la solicitud. Inténtalo de nuevo.</div>:null}
      <div style={{fontSize:11,color:"#61766b",lineHeight:1.45}}>Guardamos estos datos para preparar tu lote. El pago se realiza por PayPal cuando el enlace de compra está activo.</div>
    </form>
  );
}
