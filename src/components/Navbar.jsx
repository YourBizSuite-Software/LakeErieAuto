import { Link, NavLink } from "react-router-dom";

const linkBase = "px-3 py-2 rounded-md text-sm font-medium";
const active = "bg-[#e2dbcb] text-slate-800";
const idle = "text-slate-900 hover:bg-[#e2dbcb]";

export default function Navbar() {
  return (
    <header className="bg-[#987649]  shadow">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-tight">
        <span className="text-red-800">MJ</span> <span className="text-slate-700">AUTO </span>
        </Link>
        <nav className="flex gap-2">
          <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>Home</NavLink>
          <NavLink to="/inventory" className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>Inventory</NavLink>

          <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive?active:idle}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}