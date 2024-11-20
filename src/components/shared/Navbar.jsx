import { MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth() || {};
  const [isAdmin] = useAdmin();

  const navItems = (
    <>
      <li className="ml-2 underlin-hover font-bold sm:text-[0.9rem]">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#c9ab81]"
              : " dark:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="ml-2 underlin-hover font-bold sm:text-[0.9rem]">
        <NavLink
          to="/meals"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#c9ab81]"
              : " dark:text-white"
          }
        >
          Meals
        </NavLink>
      </li>
      <li className="ml-2 underlin-hover font-bold sm:text-[0.9rem]">
        <NavLink
          to="/orders"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#c9ab81]"
              : " dark:text-white"
          }
        >
          Order Food
        </NavLink>
      </li>
      <li className="ml-2 underlin-hover font-bold sm:text-[0.9rem]">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#c9ab81]"
              : " dark:text-white"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl hover:border-b transition-all duration-400"
          >
            {/* <img className="w-14" src={logo} alt="Logo" /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          {/* cart */}
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:text-[#c9ab81]"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-red-600 text-white font-bold">
                  {0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-50 card card-compact dropdown-content w-44 bg-base-100 shadow"
            >
              {/* add to cart */}
              {/* <div className="card-body">
                <span className="font-bold text-lg">My Cart {cart.length}</span>
                <span className="text-info">
                  Subtotal :{" "}
                  <span className="text-[#c9ab81]">$ {totalPrice}</span>
                </span>
                <div className="card-actions">
                  <Link to="/dashboard/myCart">
                    <a
                      href="#_"
                      className="px-10 py-3 relative group overflow-hidden font-medium border border-[#c9ab81] text-[#c9ab81] inline-block"
                    >
                      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#c9ab81] group-hover:h-full opacity-90"></span>
                      <span className="relative group-hover:text-white">
                        View cart
                      </span>
                    </a>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
          {user?.email ? (
            <div className="flex items-center z-50">
              <div className="flex items-center">
                <div
                  className="tooltip tooltip-left"
                  data-tip={user.displayName ? user.displayName : "Unknown"}
                >
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 online rounded-full">
                          <img
                            referrerPolicy="no-referrer"
                            alt="User Avatar"
                            src={user.photoURL}
                          />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow dark:bg-gray-400 bg-gray-700 rounded-box w-52"
                    >
                      {user && (
                        <li className="border-t py-2 z-50">
                          <Link
                            to={
                              isAdmin
                                ? "/dashboard/adminHome"
                                : "/dashboard/userHome"
                            }
                            className="btn text-black flex justify-start btn-sm btn-ghost"
                          >
                            Dashboard
                          </Link>
                        </li>
                      )}

                      <li className="border-t py-2 z-50">
                        <button
                          onClick={logOut}
                          className="btn bg-gray-200 text-black flex justify-start btn-sm btn-ghost"
                        >
                          <MdLogout />
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-[#c9ab81] px-3 sm:px-6 py-1 sm:py-2 font-semibold text-sm hover:bg-[#b89c76]"
                  : "border-[#c9ab81] border px-3 sm:px-6 py-1 sm:py-2 font-semibold text-sm hover:text-[#c9ab81] dark:hover:text-[#c9ab81] dark:text-white"
              }
            >
              Join Us
            </NavLink>
          )}
          <div>
            {/* <button onClick={handleTheme} className="text-white text-2xl">
              {getThemeButtonText()}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
