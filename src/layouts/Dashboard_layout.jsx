import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import {
  MdPayments,
  MdEmail,
  MdManageAccounts,
  MdNoMealsOuline,
} from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import { HiSpeakerphone } from "react-icons/hi";

const Dashboard = () => {
  //   const [cart] = useCarts();
  const [isAdmin, isAdminLoading] = useAdmin();
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
          } md:translate-x-0 transition-transform duration-300 ease-in-out w-64 min-h-screen bg-[#0b1315] flex flex-col`}
        >
          {/* 1st */}
          <div>
            <ul className="menu bg-none">
              <div>
                <Link to={"/"}>
                  <h3 className="text-white text-center font-bold text-xl flex justify-center items-center my-8">
                    <img
                      className="h-10 w-10 mr-2"
                      // src={logo}
                      alt="Paradiso Logo"
                    />
                    Paradiso
                  </h3>
                </Link>
              </div>
              {isAdmin ? (
                <>
                  {/* cart navlink */}
                  {/* <li className="text-white font-bold">
                  <NavLink
                    to="/dashboard/myCart"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#c9ab81] text-white my-3"
                        : "my-2 text-white"
                    }
                  >
                    <PiShoppingCartSimpleFill className="text-xl" /> My Cart (
                    {cart.length})
                  </NavLink>
                </li> */}
                  <li className="text-white font-bold">
                    <NavLink
                      to="/dashboard/adminAddMeal"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#c9ab81] text-white my-3"
                          : "my-2 text-white"
                      }
                    >
                      <FaRegCalendarDays className="text-xl" /> Add Meal
                    </NavLink>
                  </li>
                  <li className="text-white font-bold">
                    <NavLink
                      to="/dashboard/adminManageUsers"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#c9ab81] text-white my-3"
                          : "my-2 text-white"
                      }
                    >
                      <MdManageAccounts className="text-xl" /> Manage Users
                    </NavLink>
                  </li>
                  <li className="text-white font-bold">
                    <NavLink
                      to="/dashboard/adminAllMeals"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#c9ab81] text-white my-3"
                          : "my-2 text-white"
                      }
                    >
                      <MdNoMealsOuline className="text-xl" /> All Meals
                    </NavLink>
                  </li>

                  <li className="text-white font-bold">
                    <NavLink
                      to="/dashboard/adminUpcomingMeals"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#c9ab81] text-white my-3"
                          : "my-2 text-white"
                      }
                    >
                      <HiSpeakerphone className="text-xl" /> Upcoming Meals
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-white font-bold">
                    <NavLink
                      to="/dashboard/myCart"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#c9ab81] text-white my-3"
                          : "my-2 text-white"
                      }
                    >
                      <PiShoppingCartSimpleFill className="text-xl" /> My Cart (
                      {length})
                    </NavLink>
                  </li>

                  <li className="text-white font-bold">
                    <NavLink
                      to="/dashboard/paymentHistory"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#c9ab81] text-white my-3"
                          : "my-2 text-white"
                      }
                    >
                      <MdPayments className="text-xl" /> Payments
                    </NavLink>
                  </li>
                  <li className="text-white font-bold">
                    <NavLink
                      to="/dashboard/paymentAllHistory"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#c9ab81] text-white my-3"
                          : "my-2 text-white"
                      }
                    >
                      <MdPayments className="text-xl" /> Payment History
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            {/* shared navlink */}
          </div>
          <div className="divider"></div>
          {/* 2nd */}
          <div>
            <ul className="menu bg-none">
              <li className="text-white font-bold">
                <NavLink
                  to="/dashboard/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#c9ab81] text-white my-3"
                      : "my-2 text-white"
                  }
                >
                  <MdEmail className="text-xl" /> Contact
                </NavLink>
              </li>
              <li className="text-white font-bold">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#c9ab81] text-white my-3"
                      : "my-2 text-white"
                  }
                >
                  <CgProfile className="text-xl" /> Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 max-w-6xl mx-auto my-10">
          <button
            className="md:hidden fixed top-4 left-4 z-30 text-white text-3xl"
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
