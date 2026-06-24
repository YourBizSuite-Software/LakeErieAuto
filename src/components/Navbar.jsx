import { Link, NavLink } from "react-router-dom";

const linkBase = "px-3 py-2 rounded-md text-sm font-medium";
const active = "bg-white text-slate-800";
const idle = "text-slate-900 hover:bg-gray-100";

export default function Navbar() {
  return (
    <header className="bg-[#7d89a1]  shadow">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img
            src="/atk-logo.png"
            alt="ATK AUTO LLC"
            className="h-16 sm:h-20 md:h-28 lg:h-36 xl:h-44 w-auto"
          />
        </Link>

        <nav className="flex gap-2">
          <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>Home</NavLink>
          <NavLink to="/inventory" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>Inventory</NavLink>

          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}