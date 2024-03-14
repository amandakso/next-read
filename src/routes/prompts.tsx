import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

import { Heading, Container } from "@chakra-ui/react";

export default function Prompts() {
  return (
    <>
      <Sidebar />
      <Container>
        <Heading>Pick a prompt category.</Heading>
        <Outlet />
      </Container>
    </>
  );
}
