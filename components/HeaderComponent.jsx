"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
            <div className="flex bg-[#E9F2FF] h-16 py-5 justify-between w-full items-center  lg:px-24">
              <div className="flex  lg:px-0">
                <div className="flex gap-2 flex-shrink-0 items-center">
                  <img
                    className="hidden h-[40px] w-[40px] lg:block"
                    src="/logo2.svg"
                    alt="Your Company"
                  />
                  <span
                  className="text-[#212121] hidden lg:block font-Poppins text-[18px] font-semibold"
                  >Doctor aspirin</span>
                </div>
              </div>
                <div className="hidden lg:ml-6 lg:flex gap-3 items-center justify-center">
                  <Link
                    href="/"
                    className="inline-flex mr-2 items-center border-b-2 border-transparent px-1 pt-1 text-[18px]  text-[#757575] font-  hover:text-[#35383f]"
                  >
                    خانه
                  </Link>
                  <Link
                    href="/home/ServicesPage"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[18px]  text-[#757575] font-  hover:text-[#35383f]"
                  >
                    خدمات
                  </Link>
                  <Link
                    href="/home/pooyesh"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[18px]  text-[#757575] font-  hover:text-[#35383f]"
                  >
                    پویش
                  </Link>
                  <Link
                    href="/home/Doctor"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[18px]  text-[#757575] font-  hover:text-[#35383f]"
                  >
                      پزشکان
                  </Link>
                  <Link
                    href="/home/aboutUs"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[18px]  text-[#757575] font-  hover:text-[#35383f]"
                  >
                    درباره
                  </Link>
                  <Link
                    href="/home/aboutUs"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-[18px]  text-[#757575] font-normal  hover:text-[#35383f]"
                  >
                    تماس با ما
                  </Link>
                </div>
             
              <div className="flex items-center w-full justify-between px-5  lg:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500  border border-[#247cff]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block  h-6 w-6 text-blue-500" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-blue-500" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <div className="flex flex-col items-center">
                   <img
                  className="block h-[20px] w-[20px] lg:hidden"
                  src="/logo2.svg"
                  alt="Your Company"
                />
                <span
                  className="text-[#212121]  lg:hidden font-Poppins text-[12px] font-semibold"
                  >Doctor aspirin</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 border rounded-xl flex items-center justify-center border-[#247cff]">
                    <img
                      className="block h-4 w-4 lg:hidden"
                      src="/profile.svg"
                      alt="Your Company"
                    />
                  </div>
                  
                </div>
              </div>
              <div className="hidden mt-1  lg:flex lg:items-center">
                {/* <img src="/loc.svg" className="w-14 h-14 mt-2" alt="" /> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative  flex-shrink-0">
                  <div>
                    <button className=" shadow-md  rounded-xl  flex items-center justify-center border border-[#0C8BDF] lg:w-[166px] h-[48px] py-3 ">
                      <Link href="/dashboard/login">
                          <span 
                          className="text-[14px]  font-IRANSans font-medium text-[#0c8bdf]"
                          >ورود کاربران/ پزشکان</span>
                      </Link>
                     
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
