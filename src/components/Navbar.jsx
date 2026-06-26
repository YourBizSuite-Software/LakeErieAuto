import { Link, NavLink } from "react-router-dom";

const linkBase = "px-3 py-2 rounded-md text-sm font-medium";
const active = "bg-white text-slate-800";
const idle = "text-slate-100 hover:bg-gray-400";

export default function Navbar() {
  return (
    <header className="bg-[#380d0d]  shadow">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img
            src="/le-logo.png"
            alt="ATK AUTO LLC"
            className="h-16 sm:h-16 md:h-20 lg:h-20 xl:h-20 w-auto"
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