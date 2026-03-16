import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Logo placeholder - using a simple leaf emoji style for now */}
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
              🌿
            </div>
            <Link href="/" className="font-serif text-2xl font-bold text-foreground tracking-tight">
              Duurzaam<span className="text-primary italic">Duinoord</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
             <Link href="/" className="text-foreground/80 hover:text-primary transition duration-300 font-medium">Home</Link>
             <Link href="/mobiliteit" className="text-foreground/80 hover:text-primary transition duration-300 font-medium">Mobiliteit</Link>
             <Link href="/energie" className="text-foreground/80 hover:text-primary transition duration-300 font-medium">Energie</Link>
             <Link href="/circulair" className="text-foreground/80 hover:text-primary transition duration-300 font-medium">Circulair</Link>
             <Link href="/leefomgeving" className="text-foreground/80 hover:text-primary transition duration-300 font-medium">Leefomgeving</Link>
          </div>

          <div className="flex items-center space-x-4">
             <Link 
               href="/edit/test" 
               className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-primary text-primary rounded-full font-medium tracking-wide uppercase text-xs transition duration-300 hover:bg-primary/5"
             >
               Bewerk Site
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
