import React from "react";

const PortfolioSection = () => {
  return (
    <>
      <div className="py-12 sm:py-16">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div className="mx-auto max-w-2xl lg:text-center"></div>
          <div>
            <h2 className="text-3xl font-bold leading-7 text-black">
              Conozca nuestros trabajos
            </h2>
            <p className="mt-2 text-base leading-7 text-gray-900">
              Descubra la calidad y variedad de nuestros proyectos de impresión,
              diseñados para satisfacer las necesidades más exigentes. Desde
              impresiones editoriales hasta publicitarias y corporativas,
              estamos comprometidos con la excelencia en cada detalle.
            </p>
          </div>{" "}
          <div>
            <img src="/img/impresion151515.PNG" alt="portfolio img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
