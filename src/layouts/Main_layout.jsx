import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Main_layout = () => {
  return (
    <div>
      {/* navber */}
      <div>
        <Navbar />
      </div>
      {/* main body */}
      <div>
        <Outlet />
      </div>
      {/* footer */}
      <div></div>
    </div>
  );
};

export default Main_layout;
