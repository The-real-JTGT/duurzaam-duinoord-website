import Link from "next/link";
import { Mail } from "lucide-react";
import { designMaster } from "../design/theme-master";

export function Footer() {
  return (
    <footer className="dd-footer">
      <div className="dd-shell grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-6">
            <span className="dd-footer__brand">{designMaster.siteName}</span>
          </div>
          <p className="dd-footer__copy max-w-md leading-8">{designMaster.tagline}</p>
        </div>

        <div>
          <h4 className="mb-5 font-serif text-2xl italic text-primary">Verken</h4>
          <ul className="space-y-3">
            {designMaster.footerLinks.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link href={item.href} className="dd-footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-serif text-2xl italic text-primary">Contact</h4>
          <div className="flex flex-col gap-4">
            <Link
              href="mailto:info@duurzaamduinoord.nl"
              className="dd-footer__link inline-flex items-center gap-2"
            >
              <Mail size={16} />
              info@duurzaamduinoord.nl
            </Link>
            <p className="dd-footer__copy leading-7">
              Deel een idee, sluit aan bij een project, of vraag hulp bij een duurzame stap in huis of straat.
            </p>
          </div>
        </div>
      </div>

      <div className="dd-shell dd-footer__meta">
        &copy; {new Date().getFullYear()} {designMaster.siteName}. {designMaster.siteMark}.
      </div>
    </footer>
  );
}
