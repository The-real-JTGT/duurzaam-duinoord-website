import { Render } from "@measured/puck";
import { config } from "../puck.config";
import { getPuckContent } from "../lib/get-puck-content";
import { EditButton } from "../components/EditButton";

export default async function HomePage() {
  const puckData = await getPuckContent("/");

  // If Puck content exists in Supabase, render it
  if (puckData) {
    return (
      <>
        <Render config={config} data={puckData} />
        <EditButton slug="home" />
      </>
    );
  }

  // Otherwise, render the static fallback homepage
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-32 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 tracking-tight">
            Welkom bij{" "}
            <span className="text-primary italic">Duurzaam Duinoord</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-12 leading-relaxed">
            Een bewonersinitiatief voor een duurzame, aantrekkelijke en leefbare
            wijk in Den Haag. Samen werken we aan mobiliteit, energie, circulaire
            economie en onze leefomgeving.
          </p>
          <a
            href="/edit/home"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-white rounded-full font-medium tracking-widest uppercase text-sm transition duration-300 hover:bg-opacity-90 hover:scale-105"
          >
            Begin met Bewerken →
          </a>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Four Pillars Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Onze <span className="italic text-primary">Thema&apos;s</span>
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="block w-12 h-px bg-primary/40" />
              <span className="block w-2 h-2 rounded-full bg-primary" />
              <span className="block w-12 h-px bg-primary/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚲",
                title: "Mobiliteit",
                description:
                  "Slimme, schone vervoersoplossingen. Autodelen, fietsen en meer ruimte voor mensen.",
                href: "/mobiliteit",
              },
              {
                icon: "☀️",
                title: "Energie",
                description:
                  "Verduurzaming van historische woningen. Isolatie, warmtepompen en zonnepanelen.",
                href: "/energie",
              },
              {
                icon: "♻️",
                title: "Circulaire Economie",
                description:
                  "Minder afval, meer hergebruik. Repair Café, deelplatforms en inzamelacties.",
                href: "/circulair",
              },
              {
                icon: "🌿",
                title: "Leefomgeving",
                description:
                  "Een groenere, koelere wijk. Geveltuinen, tegelwippen en biodiversiteit.",
                href: "/leefomgeving",
              },
            ].map((pillar, index) => (
              <a
                key={index}
                href={pillar.href}
                className="bg-white rounded-3xl p-8 border border-border shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-soft-md group block"
              >
                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <span className="text-primary font-medium text-sm tracking-widest uppercase group-hover:translate-x-1 transition duration-300 inline-block">
                  Lees meer →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-foreground text-white rounded-[40px] p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/3" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Doe mee!
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Wil je meedoen met een van onze initiatieven? Neem contact met ons
              op of kom langs bij een van onze bijeenkomsten.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium tracking-widest uppercase text-sm transition duration-300 hover:bg-opacity-90 hover:scale-105"
              >
                Neem Contact Op
              </a>
              <a
                href="mailto:info@duurzaamduinoord.nl"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-full font-medium tracking-wide text-sm transition duration-300 hover:bg-white/10"
              >
                ✉ info@duurzaamduinoord.nl
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
