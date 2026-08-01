import { Button } from "@/components/ui/button";
import founder from "@/assets/fondateur.jpg";

export function About() {
  return (
    <section id="a-propos" className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        <div className="relative">
          <img
            src={founder}
            alt="Portrait professionnel du fondateur de Ponte Atlântica"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-md object-cover shadow-[var(--shadow-card)]"
          />
        </div>

        <div>
          <p className="eyebrow">À propos</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
            Un interlocuteur unique, des deux côtés
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-steel">
            Franco-portugais, j'accompagne les entreprises qui souhaitent développer leurs relations
            commerciales au Portugal. Mon rôle est de simplifier la recherche de partenaires fiables
            et de faciliter les échanges entre les deux marchés.
          </p>
          <div className="mt-8">
            <Button asChild variant="steel" size="lg">
              <a href="#contact">Planifier un échange</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
