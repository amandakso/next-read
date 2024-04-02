import { useNavigate } from "react-router-dom";
import { Box, Flex, Center, Button, Heading, Text } from "@chakra-ui/react";
/**
 *
 * photo background considering
 * https://unsplash.com/photos/white-cup-with-saucer-near-bok-OJZB0VUQKKc
 *
 *
 *
 */

export default function Home() {
  const navigate = useNavigate();
  const backgroundImgUrl: string =
    "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  function goToPrompts() {
    navigate("/prompts");
  }
  return (
    <>
      <Box
        bgImage={`url(${backgroundImgUrl})`}
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        rounded="md"
      >
        <Flex
          width={"100vw"}
          height={"100vh"}
          alignContent={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Center flexDir={"column"}>
            <Heading as={"h1"}>“Books are a uniquely portable magic.”</Heading>
            <Heading as={"h2"}>
              <Text as={"i"}> ~ Stephen King</Text>
            </Heading>
          </Center>
          <Center pt={".5rem"} flexDir={"column"}>
            <Button onClick={goToPrompts} colorScheme="teal">
              Get Started
            </Button>
          </Center>
        </Flex>
      </Box>
    </>
  );
}
