import Image from "next/image";
import logoSideBar from "../assets/Logo.svg";
import iconProduct from "../assets/IconProduct.svg";
import iconUser from "../assets/IconUser.svg";
import { useRouter } from "next/router";

const Sidebar = ({ isOpen }) => {
  const router = useRouter();
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex-shrink-0 w-64 px-4 py-6 bg-gray-800 text-white transform transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Image
        src={logoSideBar}
        alt="Logo Sidebar"
        width={35}
        height={35}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />

      <p className="text-l font-semibold text-gray-500 mt-8">Pages</p>
      <ul className="mt-3">
        <li
          className={
            "mb-2 hover:bg-gray-900 px-3 py-3 rounded-md" +
            (router.pathname == "/products" ? " bg-gray-900" : "")
          }
          onClick={() => router.push("/products")}
        >
          <Image
            src={iconProduct}
            alt="Icon Product"
            className="inline-block mr-4"
            width={32}
            height={32}
          />
          <a
            href="#"
            className="text-gray-300 inline-block font-semibold hover:text-white"
          >
            Product
          </a>
        </li>
        <li
          className={
            "mb-2 hover:bg-gray-900 px-3 py-3 rounded-md" +
            (router.pathname == "/users" ? " bg-gray-900" : "")
          }
          onClick={() => router.push("/users")}
        >
          <Image
            src={iconUser}
            alt="Icon User"
            className="inline-block mr-4"
            width={32}
            height={32}
          />
          <a
            href="#"
            className="text-gray-300 inline-block font-semibold hover:text-white"
          >
            User
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
