import {
  BookOpenIcon,
  BuildingOfficeIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
const features = [
  {
    name: "Publicitarias",
    description:
      "Realizamos impresiones publicitarias que captan la atención y transmiten tu mensaje de manera efectiva. Desde afiches y volantes hasta banners y carteles",
    icon: PaintBrushIcon,
  },
  {
    name: "Corporativas",
    description:
      "Proveemos servicios de impresión corporativa de excelencia, ideales para material promocional, tarjetas de presentación, y documentos empresariales.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Editoriales",
    description:
      "Ofrecemos servicios de impresión editorial de alta calidad, perfectos para libros, revistas y otros materiales impresos.",
    icon: BookOpenIcon,
  },
  {
    name: "y mucho más...",
    description:
      "Calendarios, catálogos, folletos, volantes, adhesivos, carpetas, impresión en microperforado, talonarios de factura.",
    icon: RocketLaunchIcon,
  },
];

export default function Example() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-custom-pink">
            Calidad y puntualidad
          </h2>
          <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Impresiones de alta calidad
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            Ofrecemos una amplia gama de servicios de impresión para cubrir
            todas tus necesidades. Contamos con experiencia en impresión en
            general y podemos brindarte resultados de alta calidad.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-bold leading-7 text-black">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-custom-pink">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-900">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
