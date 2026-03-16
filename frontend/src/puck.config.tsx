import { Config } from "@measured/puck";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroBlock, HeroProps } from "./components/blocks/Hero";
import { FeatureCardBlock, FeatureCardProps } from "./components/blocks/FeatureCard";
import { GridBlock, GridProps } from "./components/blocks/Grid";
import { SectionHeaderBlock, SectionHeaderProps } from "./components/blocks/SectionHeader";
import { ImageBannerBlock, ImageBannerProps } from "./components/blocks/ImageBanner";
import { BulletListBlock, BulletListProps } from "./components/blocks/BulletList";
import { ContactCTABlock, ContactCTAProps } from "./components/blocks/ContactCTA";

// Define the shape of all available Blocks
type Props = {
  Hero: HeroProps;
  SectionHeader: SectionHeaderProps;
  FeatureCard: FeatureCardProps;
  Grid: GridProps;
  ImageBanner: ImageBannerProps;
  BulletList: BulletListProps;
  ContactCTA: ContactCTAProps;
  Text: { content: string };
};

type RootProps = {
  title: string;
};

// Create the Puck configuration mapping components to the builder
export const config: Config<Props, RootProps> = {
  root: {
    render: ({ children }) => {
      return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      );
    },
  },
  categories: {
    layout: {
      title: "Layout",
      components: ["Hero", "SectionHeader", "Grid"],
    },
    content: {
      title: "Inhoud",
      components: ["Text", "BulletList", "ImageBanner"],
    },
    cards: {
      title: "Kaarten",
      components: ["FeatureCard"],
    },
    actions: {
      title: "Acties",
      components: ["ContactCTA"],
    },
  },
  components: {
    Hero: HeroBlock,
    SectionHeader: SectionHeaderBlock,
    FeatureCard: FeatureCardBlock,
    Grid: GridBlock,
    ImageBanner: ImageBannerBlock,
    BulletList: BulletListBlock,
    ContactCTA: ContactCTABlock,
    Text: {
      fields: {
        content: { type: "textarea" },
      },
      defaultProps: {
        content: "Voeg hier uw tekst in...",
      },
      render: ({ content }) => (
        <div className="w-full py-8 md:py-12 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed">{content}</p>
          </div>
        </div>
      ),
    },
  },
};
