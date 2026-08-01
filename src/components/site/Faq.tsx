import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    q: "Comment sélectionnez-vous les entreprises ?",
    a: "Nous rencontrons les entreprises, vérifions leurs références, leurs capacités de production et leur disponibilité réelle avant de vous les présenter.",
  },
  {
    q: "Travaillez-vous uniquement avec Porto ?",
    a: "Notre réseau est concentré sur la région de Porto et le nord du Portugal. Selon votre besoin, nous pouvons élargir la recherche au reste du pays.",
  },
  {
    q: "Combien coûte votre accompagnement ?",
    a: "La première étude est gratuite. Ensuite, nous convenons d'un forfait ou d'une mission au temps passé, défini à l'avance et sans frais cachés.",
  },
  {
    q: "Quels sont les délais habituels ?",
    a: "Vous recevez une réponse sous 24 à 48 heures. Une première sélection de partenaires est généralement présentée sous deux à trois semaines.",
  },
  {
    q: "Puis-je demander plusieurs devis ?",
    a: "Oui. Nous pouvons solliciter plusieurs entreprises en parallèle afin que vous puissiez comparer les offres.",
  },
];

export function Faq() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
            Tout ce que vous devez savoir
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-steel">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
