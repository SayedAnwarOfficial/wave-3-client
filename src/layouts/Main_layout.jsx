import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main_layout = () => {
  return (
    <div>
      {/* navber */}
      <div>
        <Navbar />
      </div>
      {/* main body */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main_layout;
