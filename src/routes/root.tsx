import { Outlet } from "react-router-dom";

import { Grid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

export default function Root() {
  return (
    <Grid minHeight={"100vh"}>
      <Navbar />
      <Outlet />
      <Copyright />
    </Grid>
  );
}
