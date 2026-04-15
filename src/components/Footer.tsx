import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Footer7 } from "@/components/ui/footer-7";
import truenorthLogo from '/Images/True North_text badge black (1).svg';

export function Footer() {
  return (
    <Footer7
      logo={{
        url: "/",
        src: truenorthLogo,
        alt: "True North Strategies",
        title: "True North Strategies",
      }}
socialLinks={[
        { icon: <FaInstagram className="w-5 h-5" />, href: "#", label: "Instagram" },
        { icon: <FaFacebook className="w-5 h-5" />, href: "#", label: "Facebook" },
        { icon: <FaLinkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
      ]}
      sections={[
        {
          title: "Coaching",
          links: [
            { name: "Marketing Coaching", href: "/coaching/marketing" },
            { name: "Sales Coaching", href: "/coaching/sales" },
            { name: "Operations Coaching", href: "/coaching/operations" },
          ],
        },
        {
          title: "Who We Serve",
          links: [
            { name: "HVAC", href: "/who-we-serve/hvac" },
            { name: "Plumbing", href: "/who-we-serve/plumbing" },
            { name: "Electrical", href: "/who-we-serve/electrical" },
            { name: "Garage Doors", href: "/who-we-serve/garage-doors" },
            { name: "Other Trades", href: "/who-we-serve/other-trades" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "About", href: "/about" },
            { name: "Events", href: "/events" },
            { name: "Book a Discovery Call", href: "/connect" },
          ],
        },
      ]}
      copyright={`© ${new Date().getFullYear()} True North Strategies. All rights reserved.`}
      legalLinks={[
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
      ]}
    />
  );
}
