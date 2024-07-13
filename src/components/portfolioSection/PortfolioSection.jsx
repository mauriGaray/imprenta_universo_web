import { Button } from "@headlessui/react";
import "./portfolio.css";
const PortfolioSection = () => {
  return (
    <section className=" bg-custom-pink  portfolioSection__section--container">
      <div className="portfolioSection__div--containerH2P">
        <h2 className="text-2xl mt-5 font-bold leading-7 text-white ">
          CONOZCA NUESTROS TRABAJOS!
        </h2>
        <p className="mt-5 mb-5 text-base leading-7 text-white">
          Descubra la calidad y variedad de nuestros proyectos de impresión,
          diseñados para satisfacer las necesidades más exigentes.
        </p>
        <Button className="rounded bg-white py-2 px-4  text-sm font-bold text-custom-pink data-[hover]:bg-white data-[active]:bg-gray-300">
          VER PORTFOLIO
        </Button>
      </div>

      <img
        className="portfolio__img"
        src="/img/impresion151515.PNG"
        alt="portfolio img"
      />
    </section>
  );
};

export default PortfolioSection;
