import { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <div className="mt-6 sticky top-0 border-b border-gray-300 bg-white">
      <div className="flex justify-center container mx-auto">
        <div className="w-3/12 px-4 py-2 flex-shrink-0 invisible" ref={ref}>
          <img
            className="rounded-full h-8 w-8 inline"
            src="https://avatars3.githubusercontent.com/u/72208758?s=60&v=4"
            alt="profile"
          />
          <span className="ml-2 font-bold text-sm">prettyirrelevant</span>
        </div>
        <div className="w-9/12 flex justify-start px-8">
          <a
            href="#0"
            className="px-4 pt-2 pb-4 border-b-2 border-white hover:border-gray-400"
          >
            <svg
              className="inline h-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-sm font-light pl-2 text-gray-900">Overview</span>
          </a>
          <a href="#0" className="px-4 pt-2 pb-4 border-b-2 border-orange-500">
            <svg
              className="inline h-4 font-extrabold"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            <span className="text-sm font-light pl-2 text-gray-900 font-bold">
              Repositories
            </span>
            <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-900 text-xs text-center rounded-full ">
              7
            </span>
          </a>
          <a
            href="#0"
            className="px-4 pt-2 pb-4 border-b-2 border-white hover:border-gray-400"
          >
            <svg
              className="inline text-gray-400 h-4"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
              stroke="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
              ></path>
            </svg>
            <span className="text-sm font-light pl-2 text-gray-900">Projects</span>
          </a>
          <a
            href="#0"
            className="px-4 pt-2 pb-4 border-b-2 border-white hover:border-gray-400"
          >
            <svg
              className="inline text-gray-400 h-4"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
              stroke="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"
              ></path>
            </svg>
            <span className="text-sm font-light pl-2 text-gray-900">Packages</span>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Header;
