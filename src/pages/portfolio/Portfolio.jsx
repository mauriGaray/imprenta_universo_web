import React from "react";

const products = [
  {
    id: 1,

    href: "#",

    imageSrc: "img/FOTO 10.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,

    href: "#",

    imageSrc: "img/FOTO 11.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,

    href: "#",

    imageSrc: "img/FOTO 12.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,

    href: "#",

    imageSrc: "img/FOTO 13.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,

    href: "#",

    imageSrc: "img/FOTO 14.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    href: "#",
    imageSrc: "img/foto 3.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    href: "#",
    imageSrc: "img/FOTO 15.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 8,
    href: "#",
    imageSrc: "img/FOTO 4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 9,
    href: "#",
    imageSrc: "img/foto 2.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  ,
  {
    id: 10,

    href: "#",

    imageSrc: "img/FOTO 17.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,

    href: "#",

    imageSrc: "img/FOTO 18.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 12,

    href: "#",

    imageSrc: "img/FOTO 5.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 13,

    href: "#",

    imageSrc: "img/FOTO 7.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 14,

    href: "#",

    imageSrc: "img/FOTO 8.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 15,

    href: "#",

    imageSrc: "img/FOTO 9.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 16,

    href: "#",

    imageSrc: "img/fotos 1.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 17,

    href: "#",

    imageSrc: "img/FOTOS 16.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 18,

    href: "#",

    imageSrc: "img/FOTOS 6.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 19,

    href: "#",

    imageSrc: "img/portfolio0.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 20,

    href: "#",

    imageSrc: "img/portfolio3.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 21,

    href: "#",

    imageSrc: "img/portfolio4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 22,

    href: "#",

    imageSrc: "img/portfolio5.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 23,

    href: "#",

    imageSrc: "img/portfolio6.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 24,

    href: "#",

    imageSrc: "img/FOTO 20.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];
const Portfolio = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-12 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Impresiones que dejan huellas
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-900">
          En nuestra imprenta, fusionamos creatividad y tecnología para ofrecer
          soluciones de impresión excepcionales. Desde tarjetas de presentación
          hasta catálogos y grandes formatos, cada proyecto refleja la esencia y
          la identidad de tu marca. Explora nuestro portfolio y descubre cómo
          hemos ayudado a nuestros clientes a destacar con diseños inspiradores
          y una calidad que impresiona.
        </p>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
