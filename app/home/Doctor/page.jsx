"use client";

import React, { useState } from "react";
import { menu } from "@/component/Menu";

import CardDoctor from "@/components/CardDoctor";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

const people = [
  { id: 1, name: "تهران" },
  { id: 2, name: "مشهد" },
  { id: 3, name: "بجنورد" },
  { id: 4, name: "آمل" },
  { id: 5, name: "رشت" },
  { id: 6, name: "کرمان" },
  { id: 7, name: "شهریار" },
  { id: 8, name: "قم" },
  { id: 9, name: "اندیمشک" },
  { id: 10, name: "بومهن" },
  { id: 12, name: "رودهن" },
  { id: 13, name: "دماوند" },
  { id: 14, name: "گرگان" },
  { id: 15, name: "بابل" },
  { id: 16, name: "رامسر" },
  { id: 17, name: "نکا" },
  { id: 18, name: "بهشهر" },
  { id: 19, name: "اصفهان" },
  { id: 20, name: "یزد" },
  { id: 21, name: "کرج" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [buttonVisibility, setButtonVisibility] = useState({
    elevator: true,
    parking: true,
    nightDay: true,
  });
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const menuList = menu;

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const hideButton = (buttonName) => {
    setButtonVisibility((prevState) => ({
      ...prevState,
      [buttonName]: false,
    }));
  };

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="mt-16 w-full flex-col  relative">
      {/* بخش فیلترینگ */}
      {isFilterOpen && (
        <div
          className={`fixed overflow-y-auto top-0 right-0 w-[95%] lg:w-1/2 h-full bg-white shadow-lg z-50 transition-transform  ${
            isFilterOpen
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
          <div className="p-3 lg:p-10">
            <p className="text-colorText text-xl lg:text-[40px] mt-10">
              فیلتر ها
            </p>

            <button
              className="px-3 py-1 bg-red-500 text-white rounded-full mt-4 absolute left-5 top-3 text-lg"
              onClick={toggleFilter}
            >
              ×
            </button>
          </div>
          <div className="flex gap-3 lg:gap-10 px-2 lg:px-10">
            <div className="w-1/2 h-[570px] rounded-2xl bg-[#fafafa] shadow-lg p-2 lg:p-6">
              <p className="text-[#666] text-xl lg:text-3xl">شهر</p>
              <Combobox
                as="div"
                value={selectedPerson}
                onChange={setSelectedPerson}
              >
                <div className="relative mt-2">
                  <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(person) => person?.name}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>

                  {filteredPeople.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          value={person}
                          className={({ active }) =>
                            classNames(
                              "relative cursor-default select-none py-2 pl-3 pr-9",
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900"
                            )
                          }
                        >
                          {({ active, selected }) => (
                            <>
                              <span
                                className={classNames(
                                  "block truncate",
                                  selected && "font-semibold"
                                )}
                              >
                                {person.name}
                              </span>

                              {selected && (
                                <span
                                  className={classNames(
                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                    active ? "text-white" : "text-indigo-600"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}
                </div>
              </Combobox>
              <ul className="h-[450px]  overflow-y-auto">
                {people.map((city) => (
                  <li
                    className="py-1"
                    onClick={() => handleSelectPerson(city)}
                    key={city.id}
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 h-[570px] rounded-2xl bg-[#fafafa] shadow-lg p-2 lg:p-6">
              <p className="text-[#666] text-xl lg:text-3xl">تخصص</p>
              <Combobox
                as="div"
                value={selectedPerson}
                onChange={setSelectedPerson}
              >
                <div className="relative mt-2">
                  <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(person) => person?.name}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>

                  {filteredPeople.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          value={person}
                          className={({ active }) =>
                            classNames(
                              "relative cursor-default select-none py-2 pl-3 pr-9",
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900"
                            )
                          }
                        >
                          {({ active, selected }) => (
                            <>
                              <span
                                className={classNames(
                                  "block truncate",
                                  selected && "font-semibold"
                                )}
                              >
                                {person.name}
                              </span>

                              {selected && (
                                <span
                                  className={classNames(
                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                    active ? "text-white" : "text-indigo-600"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}
                </div>
              </Combobox>
              <ul className="h-[450px]  overflow-y-auto">
                {people.map((city) => (
                  <li
                    className="py-1"
                    onClick={() => handleSelectPerson(city)}
                    key={city.id}
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-3 lg:gap-10 px-2 lg:px-10 mt-[55px]" >
            <div className="w-1/2 h-[570px] rounded-2xl bg-[#fafafa] shadow-lg p-2 lg:p-6">
              <p className="text-[#666] text-xl lg:text-3xl">خدمات</p>
              <Combobox
                as="div"
                value={selectedPerson}
                onChange={setSelectedPerson}
              >
                <div className="relative mt-2">
                  <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(person) => person?.name}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>

                  {filteredPeople.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          value={person}
                          className={({ active }) =>
                            classNames(
                              "relative cursor-default select-none py-2 pl-3 pr-9",
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900"
                            )
                          }
                        >
                          {({ active, selected }) => (
                            <>
                              <span
                                className={classNames(
                                  "block truncate",
                                  selected && "font-semibold"
                                )}
                              >
                                {person.name}
                              </span>

                              {selected && (
                                <span
                                  className={classNames(
                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                    active ? "text-white" : "text-indigo-600"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}
                </div>
              </Combobox>
              <ul className="h-[450px]  overflow-y-auto">
                {people.map((city) => (
                  <li
                    className="py-1"
                    onClick={() => handleSelectPerson(city)}
                    key={city.id}
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 h-[570px] rounded-2xl bg-[#fafafa] shadow-lg p-2 lg:p-6">
              <p className="text-[#666] text-xl lg:text-3xl">امکانات</p>
              <Combobox
                as="div"
                value={selectedPerson}
                onChange={setSelectedPerson}
              >
                <div className="relative mt-2">
                  <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(person) => person?.name}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>

                  {filteredPeople.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          value={person}
                          className={({ active }) =>
                            classNames(
                              "relative cursor-default select-none py-2 pl-3 pr-9",
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900"
                            )
                          }
                        >
                          {({ active, selected }) => (
                            <>
                              <span
                                className={classNames(
                                  "block truncate",
                                  selected && "font-semibold"
                                )}
                              >
                                {person.name}
                              </span>

                              {selected && (
                                <span
                                  className={classNames(
                                    "absolute inset-y-0 right-0 flex items-center pr-4",
                                    active ? "text-white" : "text-indigo-600"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}
                </div>
              </Combobox>
              <ul className="h-[450px]  overflow-y-auto">
                {people.map((city) => (
                  <li
                    className="py-1"
                    onClick={() => handleSelectPerson(city)}
                    key={city.id}
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className=" border px-1 lg:px-4  border-[#ecebe9] rounded-2xl bg-[#F8F8F8] min-h-[1202px]  relative pb-12">
        <div className="absolute w-[90%] lg:w-[50%] py-1.5  rounded-3xl text-[#A3A3A3] text-[11px] top-[-24px] px-2 right-5">
          خانه | پزشک ها | داندن پزشک
        </div>
        <div className="w-full flex gap-6  mt-10">
          {/* <div className="hidden lg:flex w-full lg:w-1/3">
            <select
              name="select"
              id="select"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="option1" selected disabled>
                خدمات
              </option>
              <option value="option1">گزینه ۱</option>
              <option value="option2">گزینه ۲</option>
              <option value="option3">گزینه ۳</option>
            </select>
          </div> */}
          <div className="w-full lg:w-3/4 relative">
            <input
              type="search"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="جستجو کنید"
            />
            <img
              src="/searchBox.svg"
              alt=""
              className="absolute left-3 cursor-pointer top-1"
            />
          </div>
          <div className="w-full lg:w-1/4 relative">
            <input
              type="text"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pr-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="شهریار"
            />
            <img
              src="/loc4.svg"
              alt=""
              className="absolute left-3 cursor-pointer top-1"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center relative">
          <div className="w-full mt-6 flex gap-3 relative">
            <div className="flex gap-3 flex-wrap w-[95%] lg:w-[60%] mx-auto">
              <button
                onClick={toggleFilter}
                className="border text-sm px-3 py-0.5 rounded-lg bg-bgB2 text-colorText flex gap-2 items-center relative z-10"
              >
                <span>
                  <img src="/fillter.svg" className="" alt="" />
                </span>
                <span>3</span>
                <span>فیلتر کردن</span>
              </button>

              {buttonVisibility.elevator && (
                <button
                  onClick={() => hideButton("elevator")}
                  className="border text-sm px-3 py-0.5 rounded-lg bg-bgB2 text-colorText flex gap-2 items-center relative z-10"
                >
                  <span>آسانسور</span>
                  <span>×</span>
                </button>
              )}

              {buttonVisibility.parking && (
                <button
                  onClick={() => hideButton("parking")}
                  className="border text-sm px-3 py-0.5 rounded-lg bg-bgB2 text-colorText flex gap-2 items-center relative z-10"
                >
                  <span>پارکینگ</span>
                  <span>×</span>
                </button>
              )}

              {buttonVisibility.nightDay && (
                <button
                  onClick={() => hideButton("nightDay")}
                  className="border text-sm px-3 py-0.5 rounded-lg bg-bgB2 text-colorText flex gap-2 items-center relative z-10"
                >
                  <span>شبانه روزی</span>
                  <span>×</span>
                </button>
              )}
            </div>
            <div className="w-full border absolute bottom-[-10px] z-0"></div>
          </div>
        </div>
        {/* ادامه دو بخشی شدن متخصص قلب و عروق در شهریار  */}
        <div className="w-full flex items-start gap-3 mt-6 min-h-[1050px]">
          <div className="hidden lg:flex lg:w-1/5 min-h-[1050px] border border-[#ECEBE9] bg-[#FBFAF6] rounded-tl-2xl rounded-bl-2xl p-4">
            <div className="w-[90%] mr-auto">
              <ul>
                {menuList.map((menuItem) => (
                  <li
                    key={menuItem.id}
                    className="list-disc text-[#2e3e48] text-[12px]"
                  >
                    {menuItem.name === "گوارش ، کبد و آندوسکوپی" ? (
                      <>
                        <span onClick={toggleSubMenu}>
                          <a href={menuItem.src}>گوارش ، کبد و آندوسکوپی</a>
                        </span>
                        {isSubMenuOpen && (
                          <ul>
                            <a href="#">
                              <li>کبد 1</li>
                            </a>
                            <a href="#">
                              <li>کبد 2</li>
                            </a>
                            <a href="#">
                              <li>کبد 3</li>
                            </a>
                          </ul>
                        )}
                      </>
                    ) : menuItem.name === "آزمایشگاه ها" ? (
                      <>
                        <span onClick={toggleSubMenu}>
                          <a href={menuItem.src}>آزمایشگاه ها</a>
                        </span>
                        {isSubMenuOpen && (
                          <ul>
                            <a href="#">
                              <li>آزمایشگاه 1</li>
                            </a>
                            <a href="#">
                              <li>آزمایشگاه 2</li>
                            </a>
                            <a href="#">
                              <li>آزمایشگاه 3</li>
                            </a>
                          </ul>
                        )}
                      </>
                    ) : (
                      <a href={menuItem.src}>{menuItem.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-4/5 min-h-[1050px]">
            <div className="w-full flex items-center justify-center text-colorText text-xl lg:text-[30px] mt-6 text-center">
              متخصص قلب و عروق در شهریار
            </div>
            <div className="w-full flex items-center justify-center gap-4 mt-6 flex-wrap">
              <button className="bg-bgB text-Text2 border border-[#FEF5D6] py-1 px-4 rounded-3xl  text-[10px] lg:text-sm">
                متخصص قلب کودکان
              </button>
              <button className="bg-bgB text-Text2 border border-[#FEF5D6] py-1 px-4 rounded-3xl  text-[10px] lg:text-sm">
                فلوشیپ الکتروفیزیولوژی قلب
              </button>
              <button className="bg-bgB text-Text2 border border-[#FEF5D6] py-1 px-4 rounded-3xl  text-[10px] lg:text-sm">
                متخصص قلب ریه
              </button>
              <button className="bg-bgB text-Text2 border border-[#FEF5D6] py-1 px-4 rounded-3xl  text-[10px] lg:text-sm">
                جراح قلب
              </button>
            </div>
            {/* تمام دکتر ها */}
            <div className="mt-7">
              <CardDoctor />
            </div>
          </div>
        </div>
        <div className="absolute w-[130px] h-6  bottom-[-12px] left-[35%] flex items-center gap-3">
          <div className="w-[51px] h-[45px] bg-[#4F6C7D] rounded-md"></div>
          
        </div>
      </div>

      {/* بخش جراح پلاستیک */}
      <div className="flex w-full mt-8">
        <div className="w-1/5 hidden lg:flex"></div>
        <div className="w-full lg:w-4/5 flex lg:pl-2">
          <div className="w-full min-h-[1032px] rounded-3xl bg-white shadow-2xl px-3 lg:px-20 py-10">
            <p className="text-colorText text-2xl lg:text-3xl font-bold">
              جراح پلاستیک کیست؟
            </p>
            <div className="mt-24 flex items-center justify-center">
              <img src="/plastic.png" className="" alt="" />
            </div>
            <p className="text-[#000] text-xl lg:text-2xl mt-20">
              جراح پلاستیک پزشکی است که در حوزه درمان های بازسازی و ترمیمی بدن
              تخصص دارد. این پزشکان، به درمان مشکلات ظاهری و عملکردی اختلالات
              مادر زادی، جراحات و آسیب ها، بیماری ها یا سوختگی ها کمک می کنند.
              بسیاری از جراحان پلاستیک، در حوزه جراحی های زیبایی فقط کار می کنند
              و درمان هایی را انجام می دهند که به زیبایی مرتبط می شوند اما همه
              جراحان پلاستیک به حوزه زیبایی نمی پردازند. تحصیلات جراح پلاستیک
              چیست؟ آن دسته از پزشکان عمومی که وارد تخصص جراحی پلاستیک می شوند،
              باید حدود چهار سال دیگر را نیز صرف کسب تخصص و تجربه در این حوزه
              بنمایند. پس از آن به مدت حدود سه سال در حوزه فوق تخصص جراحی زیبایی
              و ترمیمی آموزش می بینند. در این دوره، پزشک مهارت انجام تمامی عمل
              های جراحی در این زمینه را به دست می آورد. علاوه بر این، یک متخصص
              پلاستیک می تواند دوره فلوشیپ های مختلف را نیز پشت سر بگذارد که یک
              یا دو سال طول می کشد.انواع فلوشیپ های جراحی پلاستیک عبارتند از:
            </p>
            <ul className="text-[#000] text-xl lg:text-2xl list-disc mt-4 pr-5">
              <li>پستان</li>
              <li>زیبایی</li>
              <li>صورت و جمجمه</li>
              <li>جراحی های بازسازی</li>
              <li>دست</li>
              <li>سوختگی و جای زخم</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
