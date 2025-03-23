import { useState, useEffect } from "react";

function Home({ isLogged, setIsLogged }) {
  const [isMuted, setIsMuted] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(true);

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
        className={`absolute ease-in top-0 left-0 w-full h-full bg-black z-10 transition-opacity duration-3000 ${
          overlayVisible ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="z-20 flex justify-between items-center w-screen text-l pr-4">
        <img
          src={
            isMuted ? "/svg/play-svgrepo-com.svg" : "/svg/pause-svgrepo-com.svg"
          }
          onClick={() => setIsMuted(!isMuted)}
          className=" w-16 cursor-pointer"
        />
        <div className="flex border-4 ">
          <p
            onClick={() => setIsLogged(!isLogged)}
            className="cursor-pointer block border-r-4 p-2 hover:bg-red-50"
          >
            Login
          </p>
          <p className=" block cursor-pointer hover:bg-red-100 p-2">Sign Up</p>
        </div>
      </div>

      <p className="absolute top-11/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer hover:bg-red-50 border-4 p-0">
        INFO
      </p>
    </div>
  );
}

export default Home;
