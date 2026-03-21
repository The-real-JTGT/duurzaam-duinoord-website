import { Config } from "@measured/puck";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BulletListBlock, BulletListProps } from "./components/blocks/BulletList";
import { ContactCTABlock, ContactCTAProps } from "./components/blocks/ContactCTA";
import { FeatureCardBlock, FeatureCardProps } from "./components/blocks/FeatureCard";
import { GridBlock, GridProps } from "./components/blocks/Grid";
import { HeroBlock, HeroProps } from "./components/blocks/Hero";
import { ImageBannerBlock, ImageBannerProps } from "./components/blocks/ImageBanner";
import { SectionHeaderBlock, SectionHeaderProps } from "./components/blocks/SectionHeader";
import { FeaturedStoryBlock, FeaturedStoryProps } from "./components/blocks/FeaturedStory";
import { getPanelClass } from "./design/theme-master";

type Props = {
  Hero: HeroProps;
  SectionHeader: SectionHeaderProps;
  FeatureCard: FeatureCardProps;
  Grid: GridProps;
  ImageBanner: ImageBannerProps;
  FeaturedStory: FeaturedStoryProps;
  BulletList: BulletListProps;
  ContactCTA: ContactCTAProps;
  Text: { content: string; tone: "paper" | "moss" | "glass" };
};

type RootProps = {
  title: string;
};

export const config: Config<Props, RootProps> = {
  root: {
    render: ({ children }) => {
      return (
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-grow">{children}</div>
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
    FeaturedStory: FeaturedStoryBlock,
    BulletList: BulletListBlock,
    ContactCTA: ContactCTABlock,
    Text: {
      fields: {
        content: { type: "textarea" },
        tone: {
          type: "radio",
          options: [
            { label: "Paper", value: "paper" },
            { label: "Moss", value: "moss" },
            { label: "Glass", value: "glass" },
          ],
        },
      },
      defaultProps: {
        content: "Voeg hier uw tekst in...",
        tone: "paper",
      },
      render: ({ content, tone }) => {
        const paragraphs = content
          .split(/\n\s*\n/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean);

        return (
          <section className="px-4 py-6 md:px-8 md:py-8">
            <div className={`dd-shell max-w-4xl p-7 md:p-9 ${getPanelClass(tone)}`}>
              <div className="dd-prose">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        );
      },
    },
  },
};
