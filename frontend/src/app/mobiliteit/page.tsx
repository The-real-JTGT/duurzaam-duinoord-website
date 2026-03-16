import React from "react";
import Link from "next/link";
import { Render } from "@measured/puck";
import { config } from "../../puck.config";
import { getPuckContent } from "../../lib/get-puck-content";
import { EditButton } from "../../components/EditButton";

export default async function MobiliteitPage() {
  const puckData = await getPuckContent("/mobiliteit");

  if (puckData) {
    return (
      <>
        <Render config={config} data={puckData} />
        <EditButton slug="mobiliteit" />
      </>
    );
  }

  return (
    <>
    <EditButton slug="mobiliteit" />
      {/* Hero */}
      <section className="relative w-full py-24 md:py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-4xl mb-8">
            🚲
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight">
            <span className="italic text-primary">Slimme</span> Mobiliteit
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            Schone, veilige vervoersoplossingen die de ruimte in Den Haag beter benutten.
            Minder autogebruik, meer delen en schonere lucht.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Wat is het */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Wat is het?
          </h2>
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-12 h-px bg-primary/40" />
            <span className="block w-2 h-2 rounded-full bg-primary" />
            <span className="block w-12 h-px bg-primary/40" />
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Slimme mobiliteit, ook smart mobility genoemd, gaat om schone, veilige vervoersoplossingen
            die de ruimte in Den Haag beter benutten. Ons doel is Duinoord duurzamer, aantrekkelijk
            en leefbaar te houden, met minder autogebruik, meer delen en schonere lucht.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            De gemeente is bezig met een mobiliteitstransitie. Dit betekent dat de gemeente manieren
            van vervoer aanmoedigt die zuinig met de ruimte omgaan en goed zijn voor de stad en zijn
            inwoners. Bijvoorbeeld lopen, fietsen en openbaar vervoer.
          </p>
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
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            In Duinoord zijn we bezig vooral met promotie voor het autodelen door onze bewonersgroep.
          </p>

          {/* Voordelen autodelen */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-soft mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">
              Voordelen van autodelen
            </h3>
            <ul className="space-y-4">
              {[
                "Je hebt geen kosten voor de aanschaf, onderhoud en reparatie van een eigen auto",
                "Je betaalt geen wegenbelasting en autoverzekering",
                "Voor elke gelegenheid een geschikte auto",
                "Geen zorg om verzekering, deze biedt het deelautoplatform aan",
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

          {/* Activiteiten */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-soft">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">
              Promotieactiviteiten
            </h3>
            <ul className="space-y-4">
              {[
                "Informatieavonden over autodelen in Duinoord",
                "Autodelen Duinoord aanwezig op de Go Green Markt",
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🚴", title: "Fietsstimulering", desc: "Fietsstimuleringsacties in de wijk" },
              { icon: "🚲", title: "Deelfietsen", desc: "Deelfietsen of deelbakfietsen beschikbaar maken" },
              { icon: "🌬️", title: "Verkeersveiligheid", desc: "Projecten rond verkeersveiligheid en luchtkwaliteit" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-border shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-soft-md text-center"
              >
                <div className="w-14 h-14 rounded-full bg-muted/30 flex items-center justify-center text-2xl mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
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
              Doe jij mee?
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Autodelen is goed voor de wijk en goed voor je portemonnee!
              De meeste auto&apos;s staan het grootste deel van de tijd stil.
            </p>
            <a
              href="mailto:info@duurzaamduinoord.nl"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium tracking-widest uppercase text-sm transition duration-300 hover:bg-opacity-90 hover:scale-105"
            >
              Neem Contact Op
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
