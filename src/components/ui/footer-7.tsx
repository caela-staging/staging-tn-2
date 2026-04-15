import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

export const Footer7 = ({
  logo,
  sections,
  description,
  socialLinks,
  copyright,
  legalLinks,
}: Footer7Props) => {
  return (
    <section className="bg-background border-t border-border/50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Left: logo */}
          <div className="flex flex-col gap-8 lg:shrink-0">
            {logo && (
              <Link to={logo.url}>
                <img src={logo.src} alt={logo.alt} title={logo.title} className="h-16 md:h-24 w-auto" />
              </Link>
            )}
          </div>

          {/* Right: link columns + social column */}
          <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 lg:gap-x-16 lg:justify-end lg:ml-auto lg:w-auto">
            {sections && sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="font-heading text-sm uppercase tracking-widest text-foreground mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-primary transition-colors">
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social column */}
            {socialLinks && (
              <div>
                <h3 className="font-heading text-sm uppercase tracking-widest text-foreground mb-5">
                  Follow Us On
                </h3>
                <ul className="flex flex-col gap-3 text-muted-foreground">
                  {socialLinks.map((social, idx) => (
                    <li key={idx} className="hover:text-primary transition-colors">
                      <a href={social.href} aria-label={social.label} className="flex items-center gap-2 text-sm">
                        {social.icon}
                        <span>{social.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p hidden><a href="http://www.freepik.com">Designed by kjpargeter / Freepik</a></p>
          <p>{copyright}</p>
          {legalLinks && (
            <ul className="flex gap-6">
              {legalLinks.map((link, idx) => (
                <li key={idx} className="hover:text-primary transition-colors">
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
