import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";
const callouts = [
  {
    name: "Tarjetas publicitarias",
    description:
      "Tarjetas impresas de alta calidad para promociones y marketing.",
    imageSrc: "/img/FOTO 14.jpg",
    imageAlt: "Tarjeta publicitarias",
  },
  {
    name: "Pasacalles",
    description:
      "Impresión de pasacalles resistentes y duraderos para eventos y publicidad.",
    imageSrc: "/img/FOTO 11.jpg",
    imageAlt: "Pasacalles",
  },
  {
    name: "Publicidad corporativa",
    description:
      "Soluciones de impresión para mejorar la imagen corporativa de tu empresa.",
    imageSrc: "/img/fotos 1.jpg",
    imageAlt: "Publicidad corporativa",
  },
];

export default function PortfolioSection() {
  return (
    <div className="bg-gray-100 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-16">
          <h2 className="text-2xl font-bold text-gray-900">
            CONOZCA NUESTROS TRABAJOS!
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-auto w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75  sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {callout.name}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
          <Link to={"/portfolio"}>
            <Button className=" flex justify-center mx-auto mt-8 p-4 rounded bg-custom-pink py-2 px-4  text-sm font-bold text-white data-[hover]:bg-pink-950 data-[active]:bg-pink-800">
              VER PORTFOLIO
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
