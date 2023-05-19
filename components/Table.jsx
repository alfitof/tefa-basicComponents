import Image from "next/image";
import React from "react";
import TrashButton from "./TrashButton";

const Table = ({ items, columns, handleRowClick }) => {
  return (
    <div class="relative overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4">
                {column.header}
              </th>
            ))}
            <th className="py-2 px-4 ">Action</th>
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
                <td key={columnIndex} className="py-2 px-4 text-center">
                  {column.field === "username" ? (
                    <>
                      <Image
                        src={item.profilePicture}
                        alt="Profile"
                        width={30}
                        height={30}
                      />
                      {item.username}
                    </>
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
