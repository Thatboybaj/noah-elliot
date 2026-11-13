import type { Metadata } from "next";
import { ContactHero } from "@/components/ContactHero";
import { contactPage, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
};

export default function ContactPage() {
  return (
    <main id="main">
      <ContactHero content={contactPage} />
    </main>
  );
}
