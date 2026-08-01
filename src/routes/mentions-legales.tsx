import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Mentions légales | Ponte Atlântica";
const description = "Mentions légales du site Ponte Atlântica, mise en relation d'entreprises entre la France et la région de Porto.";

export const Route = createFileRoute("/mentions-legales")({
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
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <main className="container-page max-w-3xl py-20">
      <Link to="/" className="text-sm text-steel hover:text-copper">
        ← Retour à l'accueil
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-primary md:text-4xl">Mentions légales</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
        <section>
          <h2 className="text-lg font-semibold text-primary">Éditeur du site</h2>
          <p className="mt-2">
            Ponte Atlântica — activité de mise en relation et de sourcing entre entreprises
            françaises et portugaises. Coordonnées complètes à compléter par le propriétaire du site
            (raison sociale, adresse, numéro d'immatriculation, numéro de TVA).
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-primary">Contact</h2>
          <p className="mt-2">contact@ponte-atlantica.fr</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-primary">Hébergement</h2>
          <p className="mt-2">
            Le site est hébergé par un prestataire d'hébergement web ; ses coordonnées sont à
            renseigner par l'éditeur.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-primary">Propriété intellectuelle</h2>
          <p className="mt-2">
            L'ensemble des contenus de ce site (textes, images, identité visuelle) est protégé.
            Toute reproduction sans autorisation est interdite.
          </p>
        </section>
      </div>
    </main>
  );
}
