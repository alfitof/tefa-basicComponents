import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";
import { user } from "../dataUser";
import { useRouter } from "next/router";

export default function Users() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const router = useRouter();

  const handleRowClick = (user) => {
    router.push({
      pathname: `/users/${user.id}`,
    });
  };

  const columns = [
    { header: "Username", field: "username" },
    { header: "Email", field: "email" },
  ];

  return (
    <>
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
            <h1 className="text-lg text-gray-950 font-medium">Users</h1>
          </div>
          <hr className="mb-4" />

          <Table
            items={user}
            columns={columns}
            handleRowClick={handleRowClick}
          />
        </div>
      </main>
    </>
  );
}
