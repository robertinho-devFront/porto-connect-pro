import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Politique de confidentialité | Ponte Atlântica";
const description =
  "Comment vos données sont collectées, utilisées et conservées lorsque vous nous contactez via le formulaire du site.";

export const Route = createFileRoute("/politique-de-confidentialite")({
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
  component: Confidentialite,
});

function Confidentialite() {
  return (
    <main className="container-page max-w-3xl py-20">
      <Link to="/" className="text-sm text-steel hover:text-copper">
        ← Retour à l'accueil
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-primary md:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-4 text-sm text-steel">
        Cette page est maintenue par l'éditeur du site pour expliquer, en langage clair, comment vos
        informations sont traitées.
      </p>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
        <section>
          <h2 className="text-lg font-semibold text-primary">Données collectées</h2>
          <p className="mt-2">
            Les informations que vous saisissez dans le formulaire de contact : nom, prénom,
            société, fonction, téléphone, email, secteur, type de besoin, budget, délai et
            description du projet.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-primary">Utilisation</h2>
          <p className="mt-2">
            Ces données servent uniquement à répondre à votre demande et à préparer une proposition
            d'accompagnement. Elles ne sont ni vendues, ni utilisées à des fins publicitaires.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-primary">Conservation</h2>
          <p className="mt-2">
            Vos informations sont conservées le temps nécessaire au suivi de votre demande, puis
            supprimées sur demande.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-primary">Vos droits</h2>
          <p className="mt-2">
            Vous pouvez demander l'accès, la rectification ou la suppression de vos données en
            écrivant à contact@ponte-atlantica.fr.
          </p>
        </section>
      </div>
    </main>
  );
}
