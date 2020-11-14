export default function PlusDropdown({ handleClick }) {
  return (
    <>
      <button
        className="cursor-default fixed inset-0 w-full h-full"
        onClick={handleClick}
      ></button>
      <ul className="absolute right-0 w-40 py-1 mt-2 bg-white rounded-lg shadow-md z-50">
        <li className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          New repository
        </li>
        <li className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          Import repository
        </li>
        <li className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          New gist
        </li>
        <li className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          New organisation
        </li>
        <li className="block px-2 py-1 text-gray-900 text-sm hover:text-white hover:bg-blue-700 cursor-pointer">
          New project
        </li>
      </ul>
    </>
  );
}
