"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

export default function LeadForm() {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const supabase = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) return null;
    return createClient(url, key);
  }, []);

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase || !website.trim() || !email.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const normalizedWebsite = website
      .trim()
      .replace(/^https?:\/\//i, "")
      .replace(/\/$/, "");

    const { error } = await supabase.from("leads").insert({
      website: normalizedWebsite,
      email: email.trim().toLowerCase(),
      source: "website",
      metadata: {
        landing: "nexlic",
        path: window.location.pathname,
        query: window.location.search,
      },
    });

    setStatus(error ? "error" : "success");
  }

  if (status === "success") {
    return (
      <div className="leadSuccess" role="status">
        <span><Check size={17} /></span>
        <div>
          <strong>Recibido.</strong>
          <p>Vamos a revisar tu empresa y preparar una muestra con oportunidades que encajen.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <form className="companyForm" onSubmit={submitLead}>
        <div className="urlInput">
          <span>https://</span>
          <input
            name="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            placeholder="tuempresa.es"
            aria-label="Web de tu empresa"
            autoComplete="url"
            required
          />
        </div>
        <div className="urlInput">
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="tu@empresa.es"
            aria-label="Email profesional"
            autoComplete="email"
            required
          />
        </div>
        <button className="button buttonDark" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Analizando…" : "Analizar empresa"} <ArrowUpRight size={16} />
        </button>
      </form>
      {status === "error" ? (
        <div className="formError">No hemos podido enviar los datos. Inténtalo de nuevo.</div>
      ) : null}
    </>
  );
}
