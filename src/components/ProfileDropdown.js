export default function ProfileDropdown({ handleClick }) {
  return (
    <>
      <button
        className="cursor-default fixed inset-0 w-full h-full"
        onClick={handleClick}
      ></button>
      <div className="absolute right-0 w-40 py-2 mt-auto bg-white rounded-lg shadow-md z-50">
        <p className="block px-4 py-1 text-gray-900 text-sm cursor-pointer">
          Signed in as <br /> <span className="font-bold">prettyirrelevant</span>
        </p>
        <hr />
        <button className="rounded-md border border-gray-300 my-2 py-1 mx-3 px-2 focus:outline-none outline-none">
          <img
            className="h-5 inline"
            src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"
            alt="focusing"
          />
          <span className="ml-2 mr-8 text-xs hover:text-blue-700">Focusing</span>
        </button>
        <hr className="mb-2" />
        <p className="block pl-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Your profile
        </p>
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Your repositories
        </p>
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Your projects
        </p>
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Your stars
        </p>
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Your gists
        </p>
        <hr className="my-2" />
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Upgrade
        </p>
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Feature preview
        </p>
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Help
        </p>
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Settings
        </p>
        <p className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Sign out
        </p>
      </div>
    </>
  );
}
