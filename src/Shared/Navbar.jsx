import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#f4952a] " : ""
          }>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/mobiles"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#f4952a] " : ""
          }>
          Mobiles
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#f4952a] underline" : ""
          }>
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl ">
            Motion<span className="text-[#f4952a]">Wave</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="px-6 py-2 rounded-xl bg-[#f4952a] text-white hover:bg-transparent hover:border hover:border-[#f4952a] hover:text-black">
            Login
          </a>
          <a className="px-6 py-2 rounded-xl border border-[#f4952a] bg-transparent hover:bg-[#f4952a] hover:text-white">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
