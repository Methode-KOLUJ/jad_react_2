import { motion } from "framer-motion";

const ImageModal = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-lg p-4 mt-20"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-950 p-6 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="mb-4 text-2xl md:text-4xl lg/xl:text-5xl font-extrabold mb-6 dark:text-yellow-600 text-teal-700 uppercase text-center">
          {selectedImage.title}
        </h2>
        <div className="flex justify-center items-center">
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="mb-4 max-w-full max-h-[30vh] object-contain rounded-lg border-2 border-gray-300 dark:border-gray-200"
          />
        </div>
        <p className="text-lg lg:text-xl mt-2 text-black text-justify dark:text-white font-normal select-text">
          {selectedImage.description}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;