import { Globe2, Network, Clock, UserRound } from "lucide-react";

const ITEMS = [
  {
    icon: Globe2,
    title: "Double culture",
    text: "Compréhension des attentes françaises et portugaises.",
  },
  { icon: Network, title: "Réseau local", text: "Accès à des entreprises qualifiées." },
  { icon: Clock, title: "Gain de temps", text: "Une recherche externalisée et structurée." },
  {
    icon: UserRound,
    title: "Interlocuteur unique",
    text: "Un seul contact tout au long du projet.",
  },
];

export function Advantages() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container-page">
        <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">Pourquoi travailler avec nous ?</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t border-primary-foreground/20 pt-6">
              <Icon className="size-6 text-copper" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
