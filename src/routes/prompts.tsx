import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

import { Heading, Container, useColorModeValue } from "@chakra-ui/react";

export default function Prompts() {
  return (
    <>
      <Sidebar />
      <Container
        bg={useColorModeValue("white", "gray.900")}
        minWidth={"100vw"}
        minHeight={"calc(100vh)"}
      >
        <Heading>Pick a prompt category.</Heading>
        <Outlet />
      </Container>
    </>
  );
}
