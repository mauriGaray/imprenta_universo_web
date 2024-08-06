import React from "react";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const stats = [
  { name: "+595 981 482599", value: "Teléfono", href: "tel:+595981482599" },
  {
    name: "imp.universo@gmail.com",
    value: "Email",
    href: "mailto:imp.universo@gmail.com",
  },
  {
    name: "Honorio González c/ Padre Kreusser, Encarnación, Py",
    value: "Dirección",
    href: "https://maps.app.goo.gl/nB1Gfx7k5qG5MP4H8",
  },
  {
    name: "Lun. a Vie. 07:30 a 12:00 y 13:30 a 18:00 / Sáb. 08:00 a 12:00",
    value: "Horario",
  },
];

export const Ubicacion = () => {
  return (
    <div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 isolate overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-85">
          {/* Capa transparente */}
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                ¿Cuál es tu próximo proyecto?
              </h2>
              <p className="mt-6 text-2xl leading-8 text-white">
                Visitanos para descubrir cómo nuestro equipo puede ayudarte a
                dar vida a tus proyectos con soluciones de impresión de alta
                calidad. Estamos aquí para brindarte asesoramiento personalizado
                y un servicio de calidad.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:ml-12 lg:w-1/2 flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.2206119397047!2d-55.862292225257356!3d-27.337570611088026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945795047143856f%3A0xfe168449178cb5c2!2sImprenta%20Universo!5e0!3m2!1ses-419!2sar!4v1722957706995!5m2!1ses-419!2sar"
                className="border-0"
                width="100%"
                height="400"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Link to={stat.href}>
                  <div key={stat.name} className="flex flex-col">
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white flex">
                      {stat.value}
                    </dd>
                    <dt className="text-xl leading-7 text-white">
                      {stat.name}
                    </dt>
                  </div>
                </Link>
              ))}
            </dl>
            <Link to={"https://maps.app.goo.gl/nB1Gfx7k5qG5MP4H8"}>
              <Button className=" flex justify-center mx-auto mt-8 p-4 rounded bg-custom-pink py-2 px-4  text-sm font-bold text-white data-[hover]:bg-pink-950 data-[active]:bg-pink-800">
                IR A GOOGLE MAPS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
