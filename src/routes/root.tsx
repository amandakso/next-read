import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Copyright />
    </>
  );
}
