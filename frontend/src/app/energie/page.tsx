import React from "react";
import { Render } from "@measured/puck";
import { config } from "../../puck.config";
import { getPuckContent } from "../../lib/get-puck-content";
import { EditButton } from "../../components/EditButton";

export default async function EnergiePage() {
  const puckData = await getPuckContent("/energie");

  if (puckData) {
    return (
      <>
        <Render config={config} data={puckData} />
        <EditButton slug="energie" />
      </>
    );
  }

  return (
    <>
    <EditButton slug="energie" />
      {/* Hero */}
      <section className="relative w-full py-24 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-4xl mb-8">
            ☀️
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight">
            <span className="italic text-primary">Energie</span> in Duinoord
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Het verduurzamen van onze historische woningen is een van de belangrijkste uitdagingen.
            Comfortabeler wonen met een lagere energierekening en een kleinere ecologische voetafdruk.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Wat doen wij al? */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Wat doen wij al?
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-12 h-px bg-primary/40" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-12 h-px bg-primary/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "💡", title: "Energiecoaching", desc: "Getrainde buurtgenoten geven gratis advies op maat over jouw woning." },
              { icon: "🔥", title: "Warmtetransitie", desc: "Wij volgen de gemeentelijke plannen voor een aardgasvrij Duinoord en informeren de wijk." },
              { icon: "📷", title: "Metingen", desc: "Warmtebeelden om lekken op te sporen en CO₂-meters voor een gezond binnenklimaat." },
              { icon: "🎙️", title: "Kennis delen", desc: "Via webinars, workshops en onze eigen podcast over energiethematiek." },
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

      {/* Wat gaan we doen? */}
      <section className="w-full py-16 px-4 md:px-8 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Wat gaan we doen?
          </h2>
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-12 h-px bg-primary/40" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-12 h-px bg-primary/40" />
          </div>

          {/* Hulp bij beslissen */}
          <div className="mb-10">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">Hulp bij beslissen</h3>
            <div className="bg-white rounded-3xl p-8 border border-border shadow-soft">
              <ul className="space-y-4">
                {[
                  "Keuzehulp 'Wat past bij mijn woning?' – Praktische stappenplannen op basis van bouwjaar en budget",
                  "'De Duinoord-standaard' – Verduurzamingspaden voor monumentale herenhuizen (1890-1910)",
                  "Offerte-spreekuur – Samen offertes voor isolatie, glas en warmtepompen doornemen",
                  "Subsidie-wijzer – Eén helder overzicht van beschikbare vergoedingen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:text-white transition duration-300">✓</span>
                    <span className="text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Leren van de buren */}
          <div className="mb-10">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">Leren van de buren</h3>
            <div className="bg-white rounded-3xl p-8 border border-border shadow-soft">
              <ul className="space-y-4">
                {[
                  "Maatregel van de maand – Elke maand één concrete ingreep met checklist en kosten",
                  "Bewonersverhalen & case studies – Eerlijke verhalen over comfort, geluid en leerpunten",
                  "Vaste kennisbank – Bibliotheek met webinars en hand-outs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-accent/15 flex items-center justify-center text-accent text-xs font-bold group-hover:bg-accent group-hover:text-white transition duration-300">→</span>
                    <span className="text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Samen aan de slag */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">Samen aan de slag</h3>
            <div className="bg-white rounded-3xl p-8 border border-border shadow-soft">
              <ul className="space-y-4">
                {[
                  "Try-before-you-buy (Energie-bieb) – Leen radiatorventilatoren, energiemeters of een inductieplaat",
                  "Collectieve inkoop – Samen sterker bij aanschaf van isolatie, glas of warmtepompen",
                  "Energiebesparingschallenge – Een sportieve strijd tussen straten",
                  "Zon zonder dak – Hulp voor bewoners die willen investeren in zonne-energie",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:text-white transition duration-300">✓</span>
                    <span className="text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              Bespaar energie, bespaar geld
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Vraag gratis energiecoaching aan of meld je aan voor onze collectieve inkoopacties.
            </p>
            <a
              href="mailto:info@duurzaamduinoord.nl"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium tracking-widest uppercase text-sm transition duration-300 hover:bg-opacity-90 hover:scale-105"
            >
              Vraag Advies Aan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
