import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="w-[10%] flex h-dvh justify-center items-center flex-col bg-white gap-6 font-display shadow-lg">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-600 text-white p-2 rounded shadow-md"
            : "bg-orange-400 text-white p-2 rounded"
        }
        to="/dashboard"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-600 text-white p-2 rounded shadow-md"
            : "bg-orange-400 text-white p-2 rounded"
        }
        to="/settings"
      >
        Settings
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-600 text-white p-2 rounded shadow-md"
            : "bg-orange-400 text-white p-2 rounded"
        }
        to="/collection"
      >
        Collection
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-600 text-white p-2 rounded shadow-md"
            : "bg-orange-400 text-white p-2 rounded"
        }
        to="/unboxing"
      >
        Unboxing
      </NavLink>
    </aside>
  );
}

export default Sidebar;
