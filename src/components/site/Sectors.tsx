import {
  Factory,
  Hammer,
  Building2,
  HardHat,
  Zap,
  Shirt,
  Armchair,
  Truck,
  MonitorSmartphone,
  Wrench,
} from "lucide-react";

const SECTORS = [
  { icon: Factory, label: "Industrie" },
  { icon: Hammer, label: "Métallurgie" },
  { icon: Building2, label: "Construction" },
  { icon: HardHat, label: "BTP" },
  { icon: Zap, label: "Énergie" },
  { icon: Shirt, label: "Textile" },
  { icon: Armchair, label: "Mobilier" },
  { icon: Truck, label: "Logistique" },
  { icon: MonitorSmartphone, label: "Services numériques" },
  { icon: Wrench, label: "Sous-traitance" },
];

export function Sectors() {
  return (
    <section id="secteurs" className="bg-surface py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Secteurs</p>
          <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
            Les domaines dans lesquels nous intervenons
          </h2>
          <p className="mt-4 text-lg text-steel">
            Nous vous mettons en relation avec des entreprises fiables dans les secteurs qui vous
            intéressent.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {SECTORS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="group rounded-md border border-border bg-card p-5 transition-colors hover:border-copper/60"
            >
              <Icon
                className="size-5 text-steel transition-colors group-hover:text-copper"
                aria-hidden="true"
              />
              <span className="mt-4 block text-sm font-semibold text-primary">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
