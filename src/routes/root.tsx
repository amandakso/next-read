import { Outlet } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

export default function Root() {
  return (
    <Box minWidth={"100vw"}>
      <Navbar />
      <Outlet />
      <Copyright />
    </Box>
  );
}
