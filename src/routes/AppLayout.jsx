import { Outlet } from "react-router";
import Sidebar from "../ui/Sidebar";
import { useState } from "react";

function AppLayout() {
  const [isLogged, setIsLogged] = useState(false);
  if (!isLogged)
    return (
      <div className="flex h-dvh w-dvw justify-center items-center text-3xl font-semibold">
        <button className="cursor-pointer" onClick={() => setIsLogged(true)}>
          Login
        </button>
      </div>
    );
  return (
    <div className="h-dvh flex w-dvw bg-amber-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
