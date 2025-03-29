import { useState, useEffect } from "react";
import Modal from "./../ui/Modal"; // Your reusable modal component
import LoginForm from "./../ui/LoginForm"; // Your login form component

function Home({ isLogged, setIsLogged }) {
  const [isMuted, setIsMuted] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setOverlayVisible(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevents unwanted scrolling
        setIsMuted((state) => !state);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="font-display flex justify-between flex-col relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src="/videos/0322.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black overlay that fades out */}
      <div
        className={`absolute ease-in top-0 left-0 w-full h-full bg-black z-10 transition-opacity duration-2000 ${
          overlayVisible ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Header with buttons */}
      <div className="z-20 flex justify-between items-center w-screen md:p-4">
        <img
          src={
            isMuted ? "/svg/play-svgrepo-com.svg" : "/svg/pause-svgrepo-com.svg"
          }
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 md:w-16 cursor-pointer"
        />
        <div className="flex border-4">
          <button
            onClick={() => setShowModal(true)}
            className="cursor-pointer block border-r-4 p-2 bg-red-50 hover:bg-red-300"
          >
            Login
          </button>
          <button className="hover:text-black block text-white cursor-pointer bg-black hover:bg-red-300 p-2">
            Sign Up
          </button>
        </div>
      </div>

      {/* INFO Button */}
      <div className="flex p-4 z-20 justify-center w-screen">
        <button className="rounded-full hover:text-black block text-white cursor-pointer bg-black hover:bg-red-300 p-2 max-w-[300px] mx-auto">
          INFO
        </button>
      </div>

      {/* Modal with Login Form */}
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <LoginForm isLogged={isLogged} setIsLogged={setIsLogged} />
        </Modal>
      )}
    </div>
  );
}

export default Home;
