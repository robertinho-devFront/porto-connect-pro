import { Button } from "@/components/ui/button";

const STEPS = [
  {
    title: "Analyse du besoin",
    text: "Nous clarifions votre projet, vos volumes, vos exigences techniques et votre calendrier.",
  },
  {
    title: "Recherche ciblée",
    text: "Nous activons notre réseau dans la région de Porto et sourçons les entreprises pertinentes.",
  },
  {
    title: "Sélection des partenaires",
    text: "Nous vérifions la fiabilité, les capacités réelles et la disponibilité de chaque entreprise.",
  },
  {
    title: "Mise en relation accompagnée",
    text: "Nous organisons les échanges, traduisons si besoin et suivons le projet jusqu'à l'accord.",
  },
];

export function Solution() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Notre méthode</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
            Nous simplifions vos démarches
          </h2>
          <p className="mt-4 text-lg text-steel">
            Un processus clair en quatre étapes, avec un seul interlocuteur du début à la fin.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative md:pt-10">
              <span
                className="absolute left-0 top-3 hidden h-px w-full bg-border md:block"
                aria-hidden="true"
              />
              <span
                className="relative z-10 flex size-7 items-center justify-center rounded-full bg-primary font-display text-xs font-semibold text-primary-foreground md:absolute md:left-0 md:top-0 md:-translate-y-1/2"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-primary md:mt-0">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <Button asChild variant="cta" size="lg">
            <a href="#contact">Demander une étude gratuite</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
