import { Outlet } from "react-router";
import Sidebar from "../ui/Sidebar";

import { useState } from "react";

import Home from "../pages/Home";

function AppLayout() {
  const [isLogged, setIsLogged] = useState();
  if (!isLogged) return <Home isLogged={isLogged} setIsLogged={setIsLogged} />;
  return (
    <div className="h-dvh flex w-dvw">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
