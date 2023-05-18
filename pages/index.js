import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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
    // Tambahkan data produk lainnya di sini
  ];

  return (
    <div>
      <Header />
      <button
        className="fixed bottom-4 right-4 z-50 p-2 text-gray-600 bg-gray-400 rounded-md shadow"
        onClick={toggleSidebar}
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
        <div className="px-10 py-10  bg-white rounded-md border-b-2 border-gray-100 drop-shadow-lg ">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg text-gray-950 font-medium">Products</h1>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
              Tambah Produk Baru
            </button>
          </div>
          <hr className="mb-4" />
          <div class="relative overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 ">Product Name</th>
                  <th className="py-2 px-4 ">Description</th>
                  <th className="py-2 px-4 ">Product Price</th>
                  <th className="py-2 px-4 ">Category</th>
                  <th className="py-2 px-4 ">Expire Date</th>
                  <th className="py-2 px-4 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4 text-center">
                      <Link href={`/products/${product.id}`}>
                        {product.productName}
                      </Link>
                    </td>
                    <td className="py-2 px-4 text-center">
                      {product.description}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {product.productPrice}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {product.category}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {product.expireDate}
                    </td>
                    <td className="py-2 px-4 text-center">Actions</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
