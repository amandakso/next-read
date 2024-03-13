import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Prompts() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
