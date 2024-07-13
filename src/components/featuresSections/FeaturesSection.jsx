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
      "Nos especializamos en impresiones publicitarias que captan la atención y transmiten tu mensaje de manera efectiva. Desde afiches y volantes hasta banners y carteles",
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

export default function FeaturesSection() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/*Grid*/}
          <div className="lg:pr-8 lg:pt-4">
            {/*Primera columna*/}
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Calidad y puntualidad
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Impresiones de alta calidad
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ofrecemos una amplia gama de servicios de impresión para cubrir
                todas tus necesidades. Contamos con experiencia en impresión en
                general y podemos brindarte resultados de alta calidad. Confía
                en nosotros para obtener un servicio profesional y confiable en
                todas tus necesidades de impresión.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/*Segunda columna*/}
          <img
            alt="Product screenshot"
            src="../../../public/img/impresion.PNG"
            width={2432}
            height={1442}
            className="w-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
