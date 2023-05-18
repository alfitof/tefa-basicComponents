import Image from "next/image";
import logoSideBar from "../assets/Logo.svg";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex-shrink-0 w-64 px-4 py-6 bg-gray-800 text-white transform transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <h2 className="text-xl font-semibold">Sidebar</h2> */}
      <Image src={logoSideBar} alt="Logo Sidebar" width={35} height={35} />
      <p className="text-l font-semibold text-gray-600 mt-8">Pages</p>
      <ul className="mt-3">
        <li className="mb-1 hover:bg-gray-900 px-3 py-4 rounded-lg">
          <a href="#" className="text-gray-300 font-semibold hover:text-white">
            Product
          </a>
        </li>
        <li className=" hover:bg-gray-900 px-3 py-4 rounded-lg">
          <a href="#" className="text-gray-300 font-semibold hover:text-white">
            User
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
