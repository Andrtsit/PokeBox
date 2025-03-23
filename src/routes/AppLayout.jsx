import { Outlet } from "react-router";
import Sidebar from "../ui/Sidebar";
import { useState } from "react";
import Home from "../pages/Home";

function AppLayout() {
  const [isLogged, setIsLogged] = useState(false);
  if (!isLogged) return <Home isLogged={isLogged} setIsLogged={setIsLogged} />;
  return (
    <div className="h-dvh flex w-dvw bg-amber-100">
      <Sidebar />
      <Outlet isLogged={isLogged} />
    </div>
  );
}

export default AppLayout;
