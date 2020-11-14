import { useState } from "react";
import logoSmall from "../githubS.png";
import ProfileDropdown from "./ProfileDropdown";
import PlusDropdown from "./PlusDropdown";

function Nav() {
  const [plusIsOpen, setPlusIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  let plusDropdown;
  let profileDropdown;

  const handlePlusClick = e => {
    setPlusIsOpen(!plusIsOpen);
    setProfileIsOpen(false);
  };

  const handleProfileClick = e => {
    setProfileIsOpen(!profileIsOpen);
    setPlusIsOpen(false);
  };

  if (plusIsOpen) {
    plusDropdown = <PlusDropdown handleClick={() => setPlusIsOpen(false)} />;
  }

  if (profileIsOpen) {
    profileDropdown = <ProfileDropdown handleClick={() => setProfileIsOpen(false)} />;
  }
  return (
    <nav className="bg-github py-4 px-8 flex md:justify-between">
      {/* First aspect of flex */}
      <div>
        <img className="h-8 inline-block" src={logoSmall} alt="logo" />
        <div className="inline-block ml-4 relative">
          <input
            className="w-64 rounded-lg border border-gray-700 text-gray-200 bg-github pl-3 text-sm py-1"
            placeholder="Search or jump to..."
          />
          <img
            className="absolute right-0 top-0 pr-2 py-1"
            src="https://github.githubassets.com/images/search-key-slash.svg"
            alt="search-key-slash"
          />
        </div>

        <p className="inline-block text-gray-100 font-bold ml-4 text-sm hover:text-gray-400 cursor-pointer">
          Pull requests
        </p>
        <p className="inline-block text-gray-100 font-bold ml-4 text-sm hover:text-gray-400 cursor-pointer">
          Issues
        </p>
        <p className="inline-block text-gray-100 font-bold ml-4 text-sm hover:text-gray-400 cursor-pointer">
          Marketplace
        </p>
        <p className="inline-block text-gray-100 font-bold ml-4 text-sm hover:text-gray-400 cursor-pointer">
          Explore
        </p>
      </div>

      {/* Other flex area of nav */}
      <div className="mt-1">
        <button className="cursor-pointer inline-block">
          <svg
            className="text-gray-200 hover:text-gray-500 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
        <div className="relative inline-block ml-4">
          <button
            tabIndex="-1"
            className="relative z-10 cursor-pointer block"
            onClick={handlePlusClick}
          >
            <svg
              className="text-gray-200 hover:text-gray-500 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>

          {plusDropdown}
        </div>

        <div className="relative inline-block ml-4">
          <button className="relative z-10 cursor-pointer">
            <img
              tabIndex="-1"
              onClick={handleProfileClick}
              className="rounded-full h-5 w-5"
              src="https://avatars3.githubusercontent.com/u/72208758?s=60&v=4"
              alt="profile"
            />
          </button>
          {profileDropdown}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
