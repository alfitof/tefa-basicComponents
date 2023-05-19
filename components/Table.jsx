import Image from "next/image";
import React from "react";
import TrashButton from "./TrashButton";

const Table = ({ items, columns, handleRowClick }) => {
  return (
    <div class="relative overflow-x-auto overflow-y-auto max-h-96">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th
                key={index}
                className="py-2 px-4 text-gray-400 font-normal uppercase text-sm"
              >
                {column.header}
              </th>
            ))}
            <th className="py-2 px-4 text-gray-400 font-normal uppercase text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item)}
              className="cursor-pointer hover:bg-gray-200"
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className="py-2 px-4 text-start text-base"
                >
                  {column.field === "username" ? (
                    <div className="flex items-center">
                      <Image
                        src={item.profilePicture}
                        alt="Profile"
                        className="rounded-full"
                        width={50}
                        height={50}
                      />

                      <p className="ml-6">{item.username}</p>
                    </div>
                  ) : column.field === "name" ? (
                    <div className="flex items-center">
                      <Image
                        src={item.image}
                        alt="Image Product"
                        className="rounded-full"
                        width={50}
                        height={50}
                      />
                      <p className="ml-6">{item.name}</p>
                    </div>
                  ) : column.field === "price" ? (
                    <p className="text-green-500">
                      {item.price
                        .toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })
                        .replace(/\,00$/, "")}
                    </p>
                  ) : (
                    item[column.field]
                  )}
                </td>
              ))}
              <td className="py-2 px-4 text-center">
                <TrashButton props={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
