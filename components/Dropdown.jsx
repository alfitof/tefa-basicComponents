import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category) => {
    console.log(category);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="category-dropdown"
          onClick={handleToggle}
        >
          Category
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 14.95a1 1 0 01-1.414 0l-4.242-4.243a1 1 0 011.414-1.414L10 12.586l3.536-3.536a1 1 0 011.414 1.414l-4.242 4.243z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="category-dropdown"
          >
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleSelect(category)}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
