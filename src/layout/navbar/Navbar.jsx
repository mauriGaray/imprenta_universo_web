import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./navbar.css";

const navigation = [
  { name: "INICIO", href: "#", current: false },
  { name: "UBICACIÓN", href: "#", current: false },
  { name: "PORTFOLIO", href: "#", current: false },
  { name: "SOLICITE COTIZACIÓN", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 nav__container">
          <div className="relative flex h-24 items-center">
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-custom-black hover:bg-white hover:text-custom-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-1 items-center">
                <img
                  alt="Imprenta Universo"
                  src="/img/logo universo svg.svg"
                  className="h-12 w-auto lg:h-8 w-auto pr-5"
                />
              </div>
              <div className="hidden md:flex md:ml-auto md:items-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-black hover:bg-gray-900 hover:text-white",
                        "rounded-md mt-2 px-3 py-2 text-sm font-medium"
                      )}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className=" sm:hidden ">
          <div className="space-y-1 px-2 pb-3 pt-2 absolute z-50 w-[100%]">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-black hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium navbar__disclosure--item--panel"
                )}>
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
