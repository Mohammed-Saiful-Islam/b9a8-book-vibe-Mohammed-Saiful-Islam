import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-500 bg-green-100' : ''}>Home</NavLink>
            </li>
            <li><NavLink to='./listedBooks' className={({ isActive }) => isActive ? 'border border-green-500 bg-green-100' : ''}>Listed Books</NavLink>
            </li>
            <li><NavLink to='./pagesToRead' className={({ isActive }) => isActive ? 'border border-green-500 bg-green-100' : ''}>Pages to Read</NavLink>
            </li>
            </ul>
          </div>
          <Link />
          <NavLink />
          <Link to='/' className="btn btn-ghost text-xl font-bold">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-500 bg-green-100' : ''}>Home</NavLink>
            </li>
            <li><NavLink to='./listedBooks' className={({ isActive }) => isActive ? 'border border-green-500 bg-green-100' : ''}>Listed Books</NavLink>
            </li>
            <li><NavLink to='./pagesToRead' className={({ isActive }) => isActive ? 'border border-green-500 bg-green-100' : ''}>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-green-600 text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;