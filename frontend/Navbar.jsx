import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoBase from "../assets/LogoBase";
import Logo from "../assets/Logo";  
import { Popover, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",

    href: "/services",
    dropdownItems: [
      { name: "Service 1", href: "/service1" },
      { name: "Service 2", href: "/service2" },
      { name: "Service 3", href: "/service3" },
      { name: "Service 4", href: "/service4" },
    ],
  },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  

 function open () {
  set
 }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Popover as="header" className="relative">

<div className="flex text-left gap-x-6 bg-cyan-900/10 px-6 py-2.5 sm:px-3.5 ">
      <p className="text-sm leading-6 text-black">
      <strong className="font-semibold">Basic Elements Therapeutic Massage</strong>
        <a  href="tel:304-610-1947" className=" hover:font-bold">
          
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={2} cy={2} r={2} />
          </svg>
          (304) 610-1947<span aria-hidden="true"></span>
        </a>
        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={2} cy={2} r={2} />
          </svg>
          <a href="mailto:basicelements15@gmail.com" className=" hover:font-bold"   >
          basicelements15@gmail.com
          </a>
      </p>
      
    </div>
      <div className="bg-cyan-900/50 z-50 py-2">
        <nav
          className="relative mx-auto flex max-w-7xl items-center  justify-between px-5"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link to="/" className="flex flex-col items-center ">
                <span className="sr-only">
                  Basic Elements Therapeutic Massage
                </span>
                <LogoBase />
                
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-navText p-2 text-cyan-50 hover:bg-navText/50 focus:outline-none focus:ring-2 focus:ring-cyan-200">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            <div className="hidden space-x-4 md:ml-10 md:flex">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.name === "Services" ? (
                    <div
                      className="text-md font-medium text-gray-900 cursor-pointer"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <NavLink to={item.href} className="hover:text-gray-900/50  ">
                        {item.name}
                      </NavLink>

                      {isServicesOpen && (
                        <div className="absolute top-full  pt-4  left-0 w-[10rem] bg-white/50 shadow-2xl rounded-md py-4 px-2 space-y-4 z-50">
                          {item.dropdownItems.map((dropdownItem) => (
                            <NavLink
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-gray-900 hover:bg-cyan-400/50"
                              onClick={() => {
                                setIsServicesOpen(false);
                                scrollToTop();
                              }}
                            >
                              {dropdownItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.href}
                      className="text-md font-medium text-gray-900 hover:text-gray-900/50"
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink
              to="/login"
              className="text-base font-medium text-gray-900 hover:text-gray-900/50"
            >
              Login
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
            >
              Book appointment
            </NavLink>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-50 inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-cyan-50 shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <LogoBase />
              </div>
              <div className="-mr-2">
                <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-navText p-2 text-cyan-50 hover:bg-navText/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-200">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            {/* Mobile Menu */}

            <div className="pb-6 pt-5">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.name === "Services" ? (
                      <div
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-cyan-50"
                        onClick={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        
                      >
                        <div className="flex flex-row justify-between">
                          <NavLink  to={item.href}>{item.name}</NavLink>
                          <div onClick={() => setIsServicesOpen(!isServicesOpen)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 30 10"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-4 h-4"

                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                          </div>

                        </div>

                        {isServicesOpen && (
                          <div className=" bg-cyan-50 shadow-md block py-2">
                            {item.dropdownItems.map((dropdownItem) => (
                              <NavLink
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-gray-800 hover:bg-cyan-200"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                              >
                                {dropdownItem.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <NavLink
                        to={item.href}
                        onClick={() => {
                          setIsServicesOpen(false); // Close the dropdown when other links are clicked
                          scrollToTop();
                        }}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-cyan-200"
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 px-5">
                <NavLink
                  to="/contact"
                  className="block w-full rounded-md bg-gradient-to-br from-cyan-400 to-cyan-600 px-4 py-3 text-center font-medium text-white shadow hover:from-cyan-400/50 hover:to-cyan-600/50"
                >
                  Book an appointment
                </NavLink>
              </div>
              <div className="mt-6 px-5">
                <p className="text-center text-base font-medium text-gray-900/75">
                  Existing client?{" "}
                  <NavLink
                    to="/login"
                    className="text-gray-900 hover:text-gray-900/50"
                  >
                    Login
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
