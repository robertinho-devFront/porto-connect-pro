import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/351900000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-steel text-steel-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-primary md:hidden"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
