import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duurzaam Duinoord",
  description: "Een duurzame, aantrekkelijke en leefbare wijk in Den Haag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased font-sans text-foreground bg-background min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
      </body>
    </html>
  );
}
