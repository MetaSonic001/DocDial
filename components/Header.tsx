import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <Image
            src="/favicon.ico"
            alt="DocDial Logo"
            width={40}
            height={40}
            className="h-8 mr-3"
          />
          <span className="self-center text-2xl text-black font-semibold whitespace-nowrap dark:text-black">
            DocDial
          </span>
        </a>
        <button
          onClick={handleSearchToggle}
          className="md:hidden block p-2 w-10 h-10 flex items-center justify-center rounded-lg hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark-hover-bg-gray-700 dark-focus-ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className="hidden w-full md:flex md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700">
            <li>
              <a
                href="/#"
                className="block py-2 pl-3 pr-4 text-black rounded hover-bg-blue-700 md-bg-transparent md-text-blue-700 md-p-0 md-dark-text-blue-500 dark-bg-blue-600 md-dark-bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Doctors"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-blue-700 md-bg-transparent md-text-blue-700 md-p-0 md-dark-text-blue-500 dark-bg-blue-600 md-dark-bg-transparent"
              >
                Find a Doctor
              </a>
            </li>
            <li>
              <a
                href="/Services"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-blue-700 md-bg-transparent md-text-blue-700 md-p-0 md-dark-text-blue-500 dark-bg-blue-600 md-dark-bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-blue-700 md-bg-transparent md-text-blue-700 md-p-0 md-dark-text-blue-500 dark-bg-blue-600 md-dark-bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="relative md:mr-0 hidden md:block">
          <input
            type="text"
            id="search"
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 ${
              isSearchOpen ? "block" : "hidden"
            }`}
            placeholder="Search..."
          />
        </div>
        <div
          className={`${
            isSearchOpen ? "block" : "hidden"
          } md:flex items-center ml-3 space-x-3`}
        >
          <button
            className="text-gray-900 bg-gray-200 px-3 py-2 rounded-lg hover-bg-gray-300"
            onClick={handleSearchToggle}
          >
            Search
          </button>
          <button className="text-blue-700 border border-blue-700 px-3 py-2 rounded-lg hover-bg-blue-700 hover-text-white">
            <a href="/login">
            Log In
            </a>
          </button>
          <button className="text-white bg-blue-700 px-3 py-2 rounded-lg hover-bg-blue-800">
            <a href="/signup">
            Sign Up
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
