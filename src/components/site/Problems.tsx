import { Search, Languages, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: Search,
    title: "Identifier les entreprises fiables",
    text: "Trouver un partenaire sérieux peut demander plusieurs semaines de recherche.",
  },
  {
    icon: Languages,
    title: "Surmonter la barrière linguistique",
    text: "Les échanges sont parfois complexes lorsque les interlocuteurs ne partagent pas la même langue.",
  },
  {
    icon: ShieldCheck,
    title: "Sécuriser les prises de contact",
    text: "Une mauvaise mise en relation peut coûter du temps et de l'argent.",
  },
];

export function Problems() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <p className="eyebrow">Le constat</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-primary md:text-4xl">
          Trouver le bon partenaire au Portugal prend du temps
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-md border border-border bg-card p-7">
              <Icon className="size-6 text-copper" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
