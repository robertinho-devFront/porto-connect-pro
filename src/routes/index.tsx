import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { Solution } from "@/components/site/Solution";
import { Sectors } from "@/components/site/Sectors";
import { Advantages } from "@/components/site/Advantages";
import { About } from "@/components/site/About";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const title = "Mise en relation France–Portugal | Partenaires à Porto";
const description =
  "Nous identifions les entreprises portugaises adaptées à vos besoins dans la région de Porto et facilitons chaque étape de la mise en relation. Réponse sous 48h.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ponte Atlântica",
  description,
  areaServed: ["France", "Porto, Portugal"],
  serviceType: "Sourcing et mise en relation d'entreprises France–Portugal",
  availableLanguage: ["fr", "pt"],
};

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Sectors />
        <Advantages />
        <About />
        <ContactForm />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
