import React, { useState } from "react";
import PlusIcon from "./Plusicon";

const Sidenavigationbar = ({ selectedMonths, setSelectedMonths }) => {
  const handleMonthClick = (month) => {
    if (selectedMonths.includes(month)) {
      setSelectedMonths(selectedMonths.filter((m) => m !== month));
    } else {
      setSelectedMonths([...selectedMonths, month]);
    }
  };

  const handleSelectAll = () => {
    if (selectedMonths.length === months.length) {
      setSelectedMonths([]);
    } else {
      setSelectedMonths(months);
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="sticky top-6 z-50  p-4 flex gap-x-2 gap-y-2 sm:block md:hidden">
        <button
          className="py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <h2>Months</h2>
          <PlusIcon />
        </button>
        {isMenuOpen && (
          <div className="left-0 w-full border-b-2 p-6 border-b-dim-gray bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
            <button
              onClick={handleSelectAll}
              className="w-32 :w-full text-bg  rounded-md  bg-gradient-to-br from-gradient to-primary p-2 flex items-center transition duration-200 ease-in-out hover:opacity-50"
            >
              <span className="pl-2 text-base font-bold 2xl:text-xl">
                Select All
              </span>
            </button>
            {months.map((month) => (
              <label key={month} className="p-2 flex items-center">
                <input
                  type="checkbox"
                  id={month}
                  name={month}
                  checked={selectedMonths.includes(month)}
                  onChange={() => handleMonthClick(month)}
                  className="transition duration-200 ease-in-out hover:opacity-50"
                />
                <span className="pl-2">{month}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="pl-8 md:pl-5 lg:pl-10 xl:pl-28 2xl:pl-32 font-bold text-lg text-light-gray sticky top-4 hidden md:block ">
        <div className="left-0 w-64 md:w-52 lg:w-64 xl:w-72 2xl:w-80  2xl:h-[750px] border-b-2 p-6 border-b-dim-gray bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
          <h2 className="text-center text-xl pb-6 lg:text-2xl font-bold ">
            Months
          </h2>
          <button
            onClick={handleSelectAll}
            className="w-full text-bg rounded-md font-semibold bg-gradient-to-br from-gradient to-primary group sm:px-5 sm:py-1 px-3 py-2 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5 justify-center"
          >
            <span>All</span>
          </button>
          {months.map((month) => (
            <label key={month} className="p-2 2xl:p-3  flex ">
              <input
                type="checkbox"
                id={month}
                name={month}
                checked={selectedMonths.includes(month)}
                onChange={() => handleMonthClick(month)}
                className="transition duration-200 ease-in-out hover:opacity-50"
              />
              <span className="pl-2 text-base 2xl:text-xl ">{month}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidenavigationbar;
