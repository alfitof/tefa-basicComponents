import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";
import Dropdown from "../components/Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const router = useRouter();

  const handleRowClick = (product) => {
    router.push({
      pathname: `/products/${product.id}`,
    });
  };
  const columns = [
    { header: "ID", field: "id" },
    { header: "Product Name", field: "productName" },
    { header: "Description", field: "description" },
    { header: "Product Price", field: "productPrice" },
    { header: "Category", field: "category" },
    { header: "Expire Date", field: "expireDate" },
  ];

  const products = [
    {
      id: 1,
      productName: "Product 1",
      description: "Lorem ipsum dolor sit amet",
      productPrice: 10.99,
      category: "Category A",
      expireDate: "2023-05-31",
    },
    {
      id: 2,
      productName: "Product 2",
      description: "Consectetur adipiscing elit",
      productPrice: 19.99,
      category: "Category B",
      expireDate: "2023-06-15",
    },
    {
      id: 3,
      productName: "Product 3",
      description: "Amratur Elisio Saikoro",
      productPrice: 39.99,
      category: "Category C",
      expireDate: "2023-07-08",
    },
    // Tambahkan data produk lainnya di sini
  ];

  return (
    <div>
      <Header />
      <button
        className="fixed bottom-4 visible lg:invisible right-4 z-50 p-2 text-gray-600 bg-gray-400 rounded-md shadow"
        onClick={toggleSidebar}
        id="buttonSide"
      >
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Sidebar isOpen={isSidebarOpen} />
      <main className={`px-6 pb-6 pt-20 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <div className="px-10 py-10  bg-white rounded-md drop-shadow-lg ">
          <div className="flex items-center align-middle justify-between mb-4">
            <h1 className="text-lg text-gray-950 font-medium">Products</h1>
            <div className="justify-end flex sm:inline">
              <label class="mr-6">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span className="text-gray-800">Hide expired product</span>
              </label>
              <Dropdown />
              <button className="px-4 text-sm py-2 ml-6 bg-indigo-500 font-medium text-white rounded-md hover:bg-blue-600 focus:outline-none">
                Add New Product
              </button>
            </div>
          </div>
          <hr className="mb-4" />

          <Table
            items={products}
            columns={columns}
            handleRowClick={handleRowClick}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
