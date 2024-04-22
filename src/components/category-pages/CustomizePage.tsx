import { Heading, Container, Flex, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function CustomizePage() {
  const [text, setText] = useState("none");
  function handleCustomizeClick() {
    setText("block");
  }
  return (
    <Container>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as={"h1"} size="lg">
          Customize: Choose prompts to include in generating a random TBR prompt
        </Heading>
        <Button onClick={handleCustomizeClick}>Generate Prompt</Button>
        <Text display={text}>
          Section in progress. Please check back in the future.
        </Text>
      </Flex>
    </Container>
  );
}
