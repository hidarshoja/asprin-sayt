"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderComponent() {
 

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div>
            <div className="flex h-16 justify-center items-center pt-12 lg:px-24">
              <div className="flex  lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-[75px] w-[107px] lg:block"
                    src="/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden lg:ml-6 lg:flex gap-3 mt-7 items-center justify-center">
                  <Link
                    href="/"
                    className="inline-flex mr-2 items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-colorText  hover:text-[#CDA12E]"
                  >
                    خانه
                  </Link>
                  <Link
                    href="/home/ServicesPage"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-colorText  hover:text-[#CDA12E]"
                  >
                    خدمات
                  </Link>
                  <Link
                    href="/home/pooyesh"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-colorText  hover:text-[#CDA12E]"
                  >
                    پویش
                  </Link>
                  <Link
                    href="/home/Doctor"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-colorText  hover:text-[#CDA12E]"
                  >
                      پزشکان
                  </Link>
                  <Link
                    href="/home/aboutUs"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-colorText  hover:text-[#CDA12E]"
                  >
                    درباره
                  </Link>
                  <Link
                    href="/home/aboutUs"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-colorText  hover:text-[#CDA12E]"
                  >
                    تماس با ما
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex flex-1 items-center justify-center px-2  lg:justify-center">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    دنبال چه می گردی؟
                  </label>
                  <div className="relative w-[200px]">
                    <div className="pointer-events-none absolute inset-y-0 flex items-center justify-center left-0 bg-colorText  pl-2 pr-2 rounded-l-lg">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-100"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block mt-5 w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                      placeholder="دنبال چه می گردی ؟"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full justify-between px-5  lg:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <img
                  className="block h-[90px] w-[120px] md:h-[94px] md:w-[138px] lg:hidden"
                  src="/logo.png"
                  alt="Your Company"
                />
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-colorText flex items-center justify-center m rounded-lg">
                    <img
                      className="block h-4 w-4 lg:hidden"
                      src="/user2.svg"
                      alt="Your Company"
                    />
                  </div>
                  <div className="w-8 h-8 bg-colorText flex items-center justify-center  rounded-lg">
                    <img
                      className="block h-3 w-3 lg:hidden"
                      src="/loc2.svg"
                      alt="Your Company"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden mt-5  lg:flex lg:items-center">
                <img src="/loc.svg" className="w-14 h-14 mt-2" alt="" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative  flex-shrink-0">
                  <div>
                    <button className="bg-colorText shadow-md px-3 py-1.5 text-white text-[12px] flex items-center justify-between rounded-lg">
                      <Link href="/dashboard/login">
                          <span>عضویت/ ورود خدمات دهنده</span>
                      </Link>
                      <span>
                        <img src="/user.svg" className="w-6 h-6" alt="" />
                      </span>
                    </button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2 mt-10">
              
              <Disclosure.Button
                as={Link}
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                خانه
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/home/ServicesPage"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                خدمات
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/home/pooyesh"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                پویش
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/home/Doctor"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                 پزشکان
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/home/aboutUs"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                درباره ما
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/home/aboutUs"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                تماس با ما
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
             
              <div className="mt-3 space-y-1">
                
                <Disclosure.Button
                  as={Link}
                  href="/dashboard/login"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  ورود
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  خروج 
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
