import { ComponentConfig } from "@measured/puck";
import { Mail } from "lucide-react";
import { designMaster, getCtaClass, type CtaTone } from "../../design/theme-master";

export type ContactCTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  email: string;
  tone: CtaTone;
  secondaryText: string;
  secondaryLink: string;
  tertiaryText: string;
  tertiaryLink: string;
};

export const ContactCTABlock: ComponentConfig<ContactCTAProps> = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    buttonText: { type: "text" },
    buttonLink: { type: "text" },
    email: { type: "text" },
    tone: {
      type: "radio",
      options: [
        { label: "Terracotta", value: "terracotta" },
        { label: "Moss", value: "moss" },
        { label: "Paper", value: "paper" },
      ],
    },
    secondaryText: { type: "text" },
    secondaryLink: { type: "text" },
    tertiaryText: { type: "text" },
    tertiaryLink: { type: "text" },
  },
  defaultProps: {
    title: "Doe mee!",
    description:
      "Wil je meedoen met een van onze initiatieven? Neem contact met ons op of kom langs bij een van onze bijeenkomsten.",
    buttonText: "Neem contact op",
    buttonLink: "/contact",
    email: "info@duurzaamduinoord.nl",
    tone: "paper",
    secondaryText: "",
    secondaryLink: "",
    tertiaryText: "",
    tertiaryLink: "",
  },
  render: ({
    title,
    description,
    buttonText,
    buttonLink,
    email,
    tone,
    secondaryText,
    secondaryLink,
    tertiaryText,
    tertiaryLink,
  }) => {
    const actions = [
      buttonText ? { text: buttonText, href: buttonLink, className: designMaster.buttons.secondary } : null,
      secondaryText ? { text: secondaryText, href: secondaryLink, className: designMaster.buttons.quiet } : null,
      tertiaryText ? { text: tertiaryText, href: tertiaryLink, className: designMaster.buttons.primary } : null,
    ].filter(Boolean) as Array<{ text: string; href: string; className: string }>;

    return (
      <section className="px-4 py-12 md:px-8 md:py-16">
        <div className={`dd-shell max-w-5xl text-center ${getCtaClass(tone)}`}>
          <div className="px-8 py-12 md:px-14 md:py-16">
            <h2 className="dd-title">{title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-current/76">{description}</p>

            {actions.length ? (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {actions.map((action) => (
                  <a key={`${action.text}-${action.href}`} href={action.href} className={action.className}>
                    {action.text}
                  </a>
                ))}
              </div>
            ) : null}

            {email ? (
              <div className="mt-6">
                <a href={`mailto:${email}`} className={designMaster.buttons.ghost}>
                  <Mail size={16} />
                  {email}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  },
};
