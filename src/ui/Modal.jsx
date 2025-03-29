export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="w-screen bg-black fixed flex justify-center items-center opacity-95 h-screen z-30">
      <div className="relative ">
        {children}
        <button
          className="absolute top-3 right-3 text-3xl text-red-200 hover:text-black "
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
}
