import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-porto.jpg";

const TRUST = [
  "Réponse sous 48h",
  "Réseau d'entreprises dans la région de Porto",
  "Accompagnement en français et en portugais",
];

export function Hero() {
  return (
    <section id="accueil" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow animate-fade-up">Mise en relation France · Portugal</p>
          <h1
            className="mt-5 animate-fade-up text-4xl leading-[1.08] font-semibold text-primary md:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            Développez votre activité au Portugal avec un interlocuteur unique
          </h1>
          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-steel"
            style={{ animationDelay: "160ms" }}
          >
            Nous identifions les entreprises portugaises adaptées à vos besoins et facilitons chaque
            étape de la mise en relation.
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild variant="cta" size="xl" className="transition-transform duration-300 hover:-translate-y-0.5">
              <a href="#contact">Demander une étude gratuite</a>
            </Button>
            <Button asChild variant="outline" size="xl" className="transition-transform duration-300 hover:-translate-y-0.5">
              <a href="#contact">Planifier un échange</a>
            </Button>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {TRUST.map((item, i) => (
              <li
                key={item}
                className="flex animate-fade-up items-start gap-2 text-sm text-steel"
                style={{ animationDelay: `${320 + i * 90}ms` }}
              >
                <Check className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 animate-soft-float border-l-2 border-t-2 border-copper/60 lg:block" />
          <img
            src={heroImage}
            alt="Immeuble de bureaux contemporain dans un quartier d'affaires de la région de Porto"
            width={1280}
            height={1600}
            className="relative aspect-[4/5] w-full animate-fade-up rounded-md object-cover shadow-[var(--shadow-card)] transition-transform duration-700 hover:scale-[1.01]"
            style={{ animationDelay: "200ms" }}
          />
        </div>
      </div>
    </section>
  );
}
