import { Link } from "@tanstack/react-router";
import { Linkedin, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-14 text-primary-foreground">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary-foreground font-display text-sm font-semibold text-primary">
              PA
            </span>
            <span className="font-display text-sm font-semibold">Ponte Atlântica</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Mise en relation entre entreprises françaises et entreprises de la région de Porto.
          </p>
        </div>

        <nav aria-label="Liens légaux">
          <h2 className="text-sm font-semibold">Informations</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li>
              <Link to="/mentions-legales" className="hover:text-copper">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/politique-de-confidentialite" className="hover:text-copper">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-copper">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Nous joindre</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-copper"
              >
                <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/351900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-copper"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@ponte-atlantica.fr"
                className="inline-flex items-center gap-2 hover:text-copper"
              >
                <Mail className="size-4" aria-hidden="true" /> contact@ponte-atlantica.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Ponte Atlântica. Tous droits réservés.
      </div>
    </footer>
  );
}
