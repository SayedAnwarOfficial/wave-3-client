import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts, MdNoMealsOuline } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { HiOutlineShoppingCart, HiSpeakerphone } from "react-icons/hi";
import { AiOutlineHome, AiOutlineLogout, AiOutlineMail } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-[#0f1d22]">
      <div className="flex min-h-screen">
        <Helmet>
          <title>Dashboard | Paradiso</title>
        </Helmet>
        <div
          className={`fixed md:relative flex flex-col justify-between z-20 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 min-h-screen bg-[#0b1315]`}
        >
          {/* Sidebar Header */}
          <div>
            <Link to={"/"}>
              <h3 className="text-white hover:text-slate-800 text-center font-bold text-xl flex justify-center items-center my-8">
                <img
                  className="h-10 w-10 mr-2"
                  // src={logo}
                  alt="Paradiso Logo"
                />
                Paradiso
              </h3>
            </Link>
            <ul className="menu bg-none">
              {isAdmin ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/adminAddMeal"
                      className={({ isActive }) =>
                        `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                          isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                        }`
                      }
                    >
                      <FaRegCalendarDays className="text-xl" /> Add Meal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/adminManageUsers"
                      className={({ isActive }) =>
                        `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                          isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                        }`
                      }
                    >
                      <MdManageAccounts className="text-xl" /> Manage Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/adminAllMeals"
                      className={({ isActive }) =>
                        `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                          isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                        }`
                      }
                    >
                      <MdNoMealsOuline className="text-xl" /> All Meals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/adminUpcomingMeals"
                      className={({ isActive }) =>
                        `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                          isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                        }`
                      }
                    >
                      <HiSpeakerphone className="text-xl" /> Upcoming Meals
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/myCart"
                      className={({ isActive }) =>
                        `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                          isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                        }`
                      }
                    >
                      <HiOutlineShoppingCart className="text-xl" /> My Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/paymentHistory"
                      className={({ isActive }) =>
                        `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                          isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                        }`
                      }
                    >
                      <BsCashCoin className="text-xl" /> Payments
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="divider"></div>
          {/* Shared Links */}
          <div>
            <ul className="menu bg-none">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                    }`
                  }
                >
                  <AiOutlineHome className="text-xl" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/contact"
                  className={({ isActive }) =>
                    `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                    }`
                  }
                >
                  <AiOutlineMail className="text-xl" /> Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                    }`
                  }
                >
                  <CgProfile className="text-xl" /> Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    `my-2 text-white hover:text-slate-800 flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isActive ? "bg-[#c9ab81]" : "hover:bg-slate-800"
                    }`
                  }
                >
                  <AiOutlineLogout className="text-xl" /> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-6xl mx-auto my-10">
          <button
            className="md:hidden fixed top-4 left-4 z-30 text-white hover:text-slate-800 text-3xl"
            onClick={toggleSidebar}
          >
            <IoReorderThreeOutline />
          </button>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
