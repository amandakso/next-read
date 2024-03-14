import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

import { Heading } from "@chakra-ui/react";

export default function Prompts() {
  return (
    <>
      <Sidebar />
      <Heading>Pick a prompt category.</Heading>
      <Outlet />
    </>
  );
}
