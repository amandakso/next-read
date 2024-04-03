import Sidebar from "../components/Sidebar";
import { useOutlet } from "react-router-dom";
import { Heading, Container, useColorModeValue } from "@chakra-ui/react";

export default function Prompts() {
  const outlet = useOutlet();

  return (
    <>
      <Sidebar />
      <Container
        bg={useColorModeValue("white", "gray.900")}
        minWidth={"100vw"}
        minHeight={"calc(100vh)"}
      >
        {outlet || <Heading>Pick a prompt category.</Heading>}
      </Container>
    </>
  );
}
