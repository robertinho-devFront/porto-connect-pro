import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const SECTEURS = [
  "Industrie",
  "Métallurgie",
  "Construction",
  "BTP",
  "Énergie",
  "Textile",
  "Mobilier",
  "Logistique",
  "Services numériques",
  "Sous-traitance",
  "Autre",
];

const BESOINS = [
  "Recherche de fournisseur",
  "Sous-traitance de production",
  "Partenariat commercial",
  "Recherche de client au Portugal",
  "Implantation / prospection",
  "Autre",
];

const BUDGETS = [
  "Moins de 10 000 €",
  "10 000 € – 50 000 €",
  "50 000 € – 200 000 €",
  "Plus de 200 000 €",
  "À définir",
];

const DELAIS = ["Dès que possible", "Sous 1 à 3 mois", "Sous 3 à 6 mois", "Plus de 6 mois"];

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-primary">
        {label}
      </Label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
            Parlez-nous de votre projet
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            Décrivez votre besoin en quelques lignes. Nous revenons vers vous avec une première
            analyse et des pistes concrètes de partenaires.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-steel">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
              Réponse sous 24 à 48 heures, par un interlocuteur unique.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
              Première étude gratuite et sans engagement.
            </li>
            <li className="flex items-start gap-3">
              <Lock className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
              Vos informations restent strictement confidentielles.
            </li>
          </ul>
        </div>

        <div className="rounded-md border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
          {sent ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2 className="mx-auto size-10 text-copper" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-primary">Merci pour votre demande</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-steel">
                Votre demande a bien été reçue. Nous reviendrons vers vous sous 24 à 48 heures.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="nom" label="Nom">
                  <Input id="nom" name="nom" autoComplete="family-name" required />
                </Field>
                <Field id="prenom" label="Prénom">
                  <Input id="prenom" name="prenom" autoComplete="given-name" required />
                </Field>
                <Field id="societe" label="Société">
                  <Input id="societe" name="societe" autoComplete="organization" required />
                </Field>
                <Field id="fonction" label="Fonction">
                  <Input id="fonction" name="fonction" autoComplete="organization-title" />
                </Field>
                <Field id="telephone" label="Téléphone">
                  <Input id="telephone" name="telephone" type="tel" autoComplete="tel" required />
                </Field>
                <Field id="email" label="Email">
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </Field>
                <Field id="secteur" label="Secteur">
                  <select id="secteur" name="secteur" className={selectClass} required defaultValue="">
                    <option value="" disabled>
                      Sélectionnez un secteur
                    </option>
                    {SECTEURS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field id="besoin" label="Type de besoin">
                  <select id="besoin" name="besoin" className={selectClass} required defaultValue="">
                    <option value="" disabled>
                      Sélectionnez un besoin
                    </option>
                    {BESOINS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field id="budget" label="Budget estimatif">
                  <select id="budget" name="budget" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Sélectionnez un budget
                    </option>
                    {BUDGETS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field id="delai" label="Délai souhaité">
                  <select id="delai" name="delai" className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Sélectionnez un délai
                    </option>
                    {DELAIS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="description" label="Description du projet">
                <Textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  placeholder="Produits ou services recherchés, volumes, contraintes techniques…"
                />
              </Field>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="rgpd"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  required
                  aria-required="true"
                />
                <Label htmlFor="rgpd" className="text-xs leading-relaxed font-normal text-steel">
                  J'accepte que mes informations soient utilisées pour être recontacté au sujet de
                  ma demande, conformément à la politique de confidentialité.
                </Label>
              </div>

              <Button type="submit" variant="cta" size="xl" className="w-full" disabled={!consent}>
                Recevoir une étude gratuite
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
