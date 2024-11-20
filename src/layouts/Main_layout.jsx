import { Outlet } from "react-router-dom";

const Main_layout = () => {
  return (
    <div>
      {/* navber */}
      <div></div>
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
