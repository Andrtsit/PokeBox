import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="w-[10%] flex h-dvh justify-center items-center flex-col bg-amber-50 gap-6 font-display">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 text-white p-2 rounded"
            : "bg-blue-50 p-2 rounded"
        }
        to="/dashboard"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 text-white p-2 rounded"
            : "bg-blue-50 p-2 rounded"
        }
        to="/settings"
      >
        Settings
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 text-white p-2 rounded"
            : "bg-blue-50 p-2 rounded"
        }
        to="/collection"
      >
        Collection
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 text-white p-2 rounded"
            : "bg-blue-50 p-2 rounded"
        }
        to="/unboxing"
      >
        Unboxing
      </NavLink>
    </aside>
  );
}

export default Sidebar;
