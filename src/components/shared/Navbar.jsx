import { MdLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth(); // Custom hook for auth management
  console.log(user);

  const isAdmin = useAdmin();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/"); // Redirect to home after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

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
    <div className="bg-white dark:bg-gray-900 shadow">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </button>
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
            BrandLogo
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          {user?.email ? (
            <div className="flex items-center z-50">
              <div className="flex items-center">
                <div
                  className="tooltip tooltip-left"
                  data-tip={user.displayName || "Unknown"}
                >
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} className="m-1">
                      <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 online rounded-full">
                          {user.photoURL ? (
                            <img
                              referrerPolicy="no-referrer"
                              alt="User Avatar"
                              src={user.photoURL}
                            />
                          ) : (
                            <FaRegUser className="text-gray-500 w-10 h-10" />
                          )}
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-gray-700 dark:bg-gray-400 rounded-box w-52"
                    >
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
                      <li className="border-t py-2 z-50">
                        <button
                          onClick={handleLogout}
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
