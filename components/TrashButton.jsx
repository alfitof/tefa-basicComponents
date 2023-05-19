import { useState } from "react";

const TrashButton = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const handleClosePopup = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  const handleDeleteItem = (event) => {
    // Lakukan aksi penghapusan item
    event.stopPropagation();
    console.log(`Item dengan id:${props.id} telah dihapus`);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="px-2 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
        onClick={handleOpenPopup}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1H3V5zm14 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7h14zm-4-2h-4V4a1 1 0 1 1 2 0v1zm-6 0V4a1 1 0 1 1 2 0v1H7zm5 9a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v4zm-4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v4zm4-10h-2V3a1 1 0 1 1 2 0v1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-800 opacity-50 rounded-md"></div>
          <div className="bg-white p-8 rounded shadow-lg relative z-50">
            <h2 className="text-lg font-semibold mb-4">
              Hapus item {props.productName || props.username}?
            </h2>
            <p className="mb-4">Apakah Anda yakin ingin menghapus item ini?</p>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 mr-2 text-gray-500 hover:text-gray-700"
                onClick={handleClosePopup}
              >
                Batal
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                onClick={handleDeleteItem}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrashButton;
