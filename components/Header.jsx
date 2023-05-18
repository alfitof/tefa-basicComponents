import Image from "next/image";
import Menu1 from "../assets/Menu1.svg";
import Menu2 from "../assets/Menu2.svg";
import Menu3 from "../assets/Menu3.svg";
import Menu4 from "../assets/Menu4.svg";
import Line from "../assets/Line.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-2 bg-white border-b-2 border-gray-100 drop-shadow-md">
      <div className="flex items-center justify-between">
        <button className="p-2 text-gray-500 rounded-md hover:text-white focus:outline-none"></button>
        <nav>
          <ul className="flex space-x-4 py-1">
            <li>
              <a href="#">
                <Image src={Menu1} width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Menu2} width={30} height={30} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Menu3} width={30} height={30} />
              </a>
            </li>
            <li>
              <Image src={Line} width={2.5} height={2.5} />
            </li>
            <li>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="bg-white align-middle hover:bg-gray-200  focus:outline-none font-medium rounded-lg text-sm pr-2  text-center inline-flex items-center"
                type="button"
              >
                <Image
                  src={Menu4}
                  width={30}
                  height={30}
                  className="inline-block mr-3"
                />
                <p className="inline-block text-base text-gray-600 align-middle">
                  Acne
                </p>
                <svg
                  class="w-4 h-4 ml-2 text-gray-600"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
          {/* 
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="bg-white hover:bg-gray-200  focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            <Image
              src={Menu4}
              width={30}
              height={30}
              className="inline-block mr-3"
            />
            <p className="inline-block text-base text-gray-700 align-middle">
              Acne
            </p>
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
