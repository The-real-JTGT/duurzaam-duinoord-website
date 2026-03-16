import React from "react";
import { Render } from "@measured/puck";
import { config } from "../../puck.config";
import { getPuckContent } from "../../lib/get-puck-content";
import { EditButton } from "../../components/EditButton";

export default async function LeefomgevingPage() {
  const puckData = await getPuckContent("/leefomgeving");

  if (puckData) {
    return (
      <>
        <Render config={config} data={puckData} />
        <EditButton slug="leefomgeving" />
      </>
    );
  }

  return (
    <>
      <EditButton slug="leefomgeving" />
      {/* Hero */}
      <section className="relative w-full py-24 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-4xl mb-8">
            🌿
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Duurzame <span className="italic text-primary">Leefomgeving</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Een prettige, gezonde en groene wijk voor mens én natuur.
            Samen maken we Duinoord groener en koeler.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Thema's */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
            Onze focus
          </h2>
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="block w-12 h-px bg-primary/40" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-12 h-px bg-primary/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🌱", title: "Groen & Biodiversiteit", desc: "Geveltuinen, boomspiegels, bijen/vlinderhotels, inheemse planten en tegelwippen voor een groene, natuurinclusieve wijk." },
              { icon: "💧", title: "Klimaatadaptatie & Water", desc: "Regentonnen, waterdoorlatende bestrating, tegelwippen, groene koele plekken en bewust omgaan met water." },
              { icon: "🌬️", title: "Gezonde Lucht", desc: "Minder fijnstof door metingen en bewustwording in de wijk." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-border shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-soft-md group text-center">
                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat doen wij al? */}
      <section className="w-full py-16 px-4 md:px-8 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Wat doen wij al?
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-12 h-px bg-primary/40" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-12 h-px bg-primary/40" />
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-soft">
            <ul className="space-y-4">
              {[
                "Jaarlijkse tegelwipactie",
                "Organisatie van de Go Green Markt",
                "Zichtbaar maken vergroende plekken in Duinoord",
                "Test met wormenhotel",
                "Insectenhotels maken",
                "Lezing over kurksedumdaken",
                "Fijnstofmetingen",
                "Uitlenen van CO₂-meter om binnenklimaat te meten",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:text-white transition duration-300">
                    ✓
                  </span>
                  <span className="text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wat zouden we nog kunnen doen? */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Wat zouden we nog kunnen doen?
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-12 h-px bg-primary/40" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-12 h-px bg-primary/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💰", title: "Subsidies", desc: "Noemen van subsidieregelingen op de website, zoals subsidie klimaatadaptatie gemeente" },
              { icon: "🌺", title: "Minikwekerij", desc: "Minikwekerij inrichten op het Helena van Doeverenplantsoen" },
              { icon: "🌧️", title: "Regentonnen & Compost", desc: "Acties rondom regentonnen en compostbakken voor de wijk" },
              { icon: "🥬", title: "Voedsel", desc: "Initiatieven rondom plantaardig eten, koken en je eigen groenten verbouwen" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-border shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-soft-md group">
                <div className="w-14 h-14 rounded-full bg-muted/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat doen anderen? */}
      <section className="w-full py-16 px-4 md:px-8 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Wat doen anderen?
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-12 h-px bg-primary/40" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-12 h-px bg-primary/40" />
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-soft">
            <ul className="space-y-4">
              {[
                "Werkgroep Groen Duinoord – informatie over vergroening en klimplanten",
                "Stadstuinen opzetten – Zeeheldentuin, Schilderswijk",
                "Werkgroep Groene Kansen Statenkwartier – inspiratiedagen en geveltuincompetities",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-accent/15 flex items-center justify-center text-accent text-xs font-bold group-hover:bg-accent group-hover:text-white transition duration-300">
                    →
                  </span>
                  <span className="text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-foreground text-white rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/3" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Vergroen jouw straat!
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Wil je een geveltuin aanleggen, meedoen met tegelwippen of een regenton plaatsen?
              Neem contact met ons op!
            </p>
            <a
              href="mailto:info@duurzaamduinoord.nl"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium tracking-widest uppercase text-sm transition duration-300 hover:bg-opacity-90 hover:scale-105"
            >
              Doe Mee
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
