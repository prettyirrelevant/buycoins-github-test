import Nav from "./components/Nav";
import Header from "./components/Header";
import { useRef } from "react";

function App() {
  const displayItem = useRef();
  const displayTrigger = useRef();

  window.onscroll = function () {
    const elem = displayItem.current;
    const target = displayTrigger.current;
    if (elem.getBoundingClientRect().top >= target.getBoundingClientRect().top) {
      elem.classList.remove("invisible");
    } else {
      elem.classList.add("invisible");
    }
  };

  return (
    <div className="font-mono">
      <Nav />
      <Header ref={displayItem} />
      <div className="container mx-auto">
        <div className="flex justify-center">
          {/* Card and sticky top */}
          <div className="w-3/12">
            <div>
              <img
                className="relative rounded-full -mt-8 z-10 cursor-pointer"
                src="https://avatars0.githubusercontent.com/u/72208758?s=460&v=4"
                alt="profile"
              />
              <p className="font-bold text-3xl pt-4" ref={displayTrigger}>
                Adewumi Isaac
              </p>
              <p className="text-gray-700 text-lg">prettyirrelevant</p>
              <p className="mt-5 text-sm">vibes &amp; inshallah</p>

              <button className="mb-3 mt-5 py-1 rounded-md text-sm border border-gray-300 hover:bg-gray-100 text-center w-full">
                Edit profile
              </button>
              <div className="mb-3">
                <a href="#0" className="text-gray-700 text-sm">
                  <svg
                    className="h-4 text-gray-800 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className="text-gray-800 font-bold px-1">1</span>
                  follower
                </a>
                ·
                <a href="#0" className="text-gray-700 text-sm">
                  <span className="text-gray-800 font-bold px-1">6</span>
                  following
                </a>
                ·
                <a href="#0" className="text-gray-700 text-sm">
                  <svg
                    className="h-4 text-gray-800 inline"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <span className="text-gray-800 font-bold px-1">24</span>
                </a>
              </div>
            </div>
          </div>

          {/* Repo section */}
          <div className="w-9/12 px-8">
            <input
              className="border border-gray-400 my-4 w-full rounded-md text-sm px-4 py-1 placeholder-gray-800"
              type="input"
              placeholder="Find a repository..."
            />
            <hr />
            <div className="py-6 flex justify-between">
              {/* Left */}
              <div>
                <div>
                  <p className="text-blue-600 font-bold hover:underline cursor-pointer text-xl">
                    buycoins-github-test
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    Improving my React & Tailwind using Buycoins test
                  </p>
                </div>
                <div className="mt-5">
                  <div className="inline-block">
                    <span className="inline-block bg-purple-800 language-color"></span>
                    <span className="inline-block text-sm text-gray-700 pl-1">CSS</span>
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    1
                  </div>
                  <p className="inline-block ml-4 text-gray-700 text-sm">
                    Updated a day ago
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center">
                <button className="border border-gray-400 text-xs hover:bg-gray-100 px-3 py-1 rounded">
                  <svg
                    className="h-4 text-gray-800 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Star
                </button>
              </div>
            </div>

            <hr />
            <div className="py-6 flex justify-between">
              {/* Left */}
              <div>
                <div>
                  <p className="text-blue-600 font-bold hover:underline cursor-pointer text-xl">
                    flask-cookiecutter
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    A flask boilerplate that aids quick prototyping of applications
                  </p>
                </div>
                <div className="mt-5">
                  <div className="inline-block">
                    <span className="inline-block bg-blue-800 language-color"></span>
                    <span className="inline-block text-sm text-gray-700 pl-1">
                      Python
                    </span>
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    2
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline mr-1"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
                      ></path>
                    </svg>
                    MIT License
                  </div>
                  <p className="inline-block ml-4 text-gray-700 text-sm">
                    Updated yesterday
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center">
                <button className="border border-gray-400 text-xs hover:bg-gray-100 px-3 py-1 rounded">
                  <svg
                    className="h-4 text-gray-800 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Star
                </button>
              </div>
            </div>

            <hr />
            <div className="py-6 flex justify-between">
              {/* Left */}
              <div>
                <div>
                  <p className="text-blue-600 font-bold hover:underline cursor-pointer text-xl">
                    tailwind-tutorial
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    A youtube tutorial on getting started with TailwindCSS
                  </p>
                </div>
                <div className="mt-5">
                  <div className="inline-block">
                    <span className="inline-block bg-purple-800 language-color"></span>
                    <span className="inline-block text-sm text-gray-700 pl-1">CSS</span>
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    1
                  </div>
                  <p className="inline-block ml-4 text-gray-700 text-sm">
                    Updated 2 days ago
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center">
                <button className="border border-gray-400 text-xs hover:bg-gray-100 px-3 py-1 rounded">
                  <svg
                    className="h-4 text-gray-800 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Star
                </button>
              </div>
            </div>

            <hr />
            <div className="py-6 flex justify-between">
              {/* Left */}
              <div>
                <div>
                  <p className="text-blue-600 font-bold hover:underline cursor-pointer text-xl">
                    flask-opinions
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    Who learns web dev without creating a blog?? Well, no one.
                  </p>
                </div>
                <div className="mt-5">
                  <div className="inline-block">
                    <span className="inline-block bg-blue-800 language-color"></span>
                    <span className="inline-block text-sm text-gray-700 pl-1">
                      Python
                    </span>
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    2
                  </div>
                  <p className="inline-block ml-4 text-gray-700 text-sm">
                    Updated 3 days ago
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center">
                <button className="border border-gray-400 text-xs hover:bg-gray-100 px-3 py-1 rounded">
                  <svg
                    className="h-4 text-gray-800 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Star
                </button>
              </div>
            </div>

            <hr />
            <div className="py-6 flex justify-between">
              {/* Left */}
              <div>
                <div>
                  <p className="text-blue-600 font-bold hover:underline cursor-pointer text-xl">
                    django-chat-app-project
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    A basic realtime chat app project written with the Django framework
                    and Django Channels.
                  </p>
                </div>
                <div className="mt-5">
                  <div className="inline-block">
                    <span className="inline-block bg-red-600 language-color"></span>
                    <span className="inline-block text-sm text-gray-700 pl-1">
                      HTML
                    </span>
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    2
                  </div>
                  <p className="inline-block ml-4 text-gray-700 text-sm">
                    Updated 11 days ago
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center">
                <button className="border border-gray-400 text-xs hover:bg-gray-100 px-3 py-1 rounded">
                  <svg
                    className="h-4 text-gray-800 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Star
                </button>
              </div>
            </div>

            <hr />
            <div className="py-6 flex justify-between">
              {/* Left */}
              <div>
                <div>
                  <p className="text-blue-600 font-bold hover:underline cursor-pointer text-xl">
                    shareproject
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    My attempt at creating a "low-budget" Github without using Git. Just
                    .zip files
                  </p>
                </div>
                <div className="mt-5">
                  <div className="inline-block">
                    <span className="inline-block bg-yellow-400 language-color"></span>
                    <span className="inline-block text-sm text-gray-700 pl-1">
                      Javascript
                    </span>
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    2
                  </div>
                  <p className="inline-block ml-4 text-gray-700 text-sm">
                    Updated 11 days ago
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center">
                <button className="border border-gray-400 text-xs hover:bg-gray-100 px-3 py-1 rounded">
                  <svg
                    className="h-4 text-gray-800 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Star
                </button>
              </div>
            </div>

            <hr />
            <div className="py-6 flex justify-between">
              {/* Left */}
              <div>
                <div>
                  <p className="text-blue-600 font-bold hover:underline cursor-pointer text-xl">
                    react-crashcourse
                  </p>
                  <p className="text-sm text-gray-700 mt-1">Crashcourse App on React</p>
                </div>
                <div className="mt-5">
                  <div className="inline-block">
                    <span className="inline-block bg-purple-900 language-color"></span>
                    <span className="inline-block text-sm text-gray-700 pl-1">CSS</span>
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    1
                  </div>
                  <p className="inline-block ml-4 text-gray-700 text-sm">
                    Updated 17 days ago
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center">
                <button className="border border-gray-400 text-xs hover:bg-gray-100 px-3 py-1 rounded">
                  <svg
                    className="h-4 text-gray-800 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Star
                </button>
              </div>
            </div>

            <hr />
            <div className="py-6 flex justify-between">
              {/* Left */}
              <div>
                <div>
                  <p className="text-blue-600 font-bold hover:underline cursor-pointer text-xl">
                    animeX-v2
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    animeX is a CLI tool for downloading anime directly to your PC
                  </p>
                </div>
                <div className="mt-5">
                  <div className="inline-block">
                    <span className="inline-block bg-blue-800 language-color"></span>
                    <span className="inline-block text-sm text-gray-700 pl-1">
                      Python
                    </span>
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      aria-label="fork"
                      className="h-4 inline"
                      viewBox="0 0 16 16"
                      version="1.1"
                      role="img"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      ></path>
                    </svg>
                    6
                  </div>
                  <div className="inline-block ml-4 text-gray-700 text-sm">
                    <svg
                      className="h-4 text-gray-800 inline mr-1"
                      viewBox="0 0 16 16"
                      version="1.1"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
                      ></path>
                    </svg>
                    MIT License
                  </div>
                  <p className="inline-block ml-4 text-gray-700 text-sm">
                    Updated on Oct 6
                  </p>
                </div>
              </div>
              {/* Right */}
              <div className="flex items-center">
                <button className="border border-gray-400 text-xs hover:bg-gray-100 px-3 py-1 rounded">
                  <svg
                    className="h-4 text-gray-800 inline mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Star
                </button>
              </div>
            </div>

            <hr className="mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
