import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-foreground text-white py-16 px-4 md:px-8 mt-auto rounded-t-[40px] md:rounded-t-[80px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
              🌿
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">
              Duurzaam<span className="text-primary italic">Duinoord</span>
            </span>
          </div>
          <p className="text-white/70 max-w-sm leading-relaxed mb-8">
            Een bewonersinitiatief voor een duurzame, aantrekkelijke en leefbare wijk in Den Haag. Samen maken we het verschil.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-xl font-semibold mb-6 flex items-center gap-2">Thema's</h4>
          <ul className="space-y-4 text-white/70">
            <li><Link href="/mobiliteit" className="hover:text-primary transition duration-300">Mobiliteit</Link></li>
            <li><Link href="/energie" className="hover:text-primary transition duration-300">Energie</Link></li>
            <li><Link href="/circulair" className="hover:text-primary transition duration-300">Circulaire Economie</Link></li>
            <li><Link href="/leefomgeving" className="hover:text-primary transition duration-300">Leefomgeving</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-serif text-xl font-semibold mb-6">Contact</h4>
           <p className="text-white/70 hover:text-primary transition duration-300 cursor-pointer">
             info@duurzaamduinoord.nl
           </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
        &copy; {new Date().getFullYear()} Duurzaam Duinoord. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}
