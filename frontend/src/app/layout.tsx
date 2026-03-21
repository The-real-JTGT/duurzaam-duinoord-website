import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duurzaam Duinoord",
  description: "Een burgerinitiatief voor een duurzame, aantrekkelijke en leefbare wijk in Den Haag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${newsreader.variable} ${plusJakartaSans.variable}`}
    >
      <body className="dd-theme antialiased font-sans text-foreground bg-background min-h-screen flex flex-col">
        <div className="dd-page flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
