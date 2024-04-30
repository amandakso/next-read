import { useState } from "react";
import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { miscellaneous } from "../../utilities/constants";
import { generatePrompt } from "../../utilities/helpers";

export default function MiscellaneousPage() {
  const [miscPrompt, setMiscPrompt] = useState<string>("");

  async function handleMiscClick() {
    // get and display random misc prompt
    const prompt = generatePrompt(miscellaneous);
    setMiscPrompt(prompt.prompt);
    console.log(prompt.prompt);
  }

  return (
    <Container>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as="h1" size="lg">
          Miscellaneous: uncategorized prompts
        </Heading>
        <Button onClick={handleMiscClick} colorScheme="teal">
          Generate Prompt
        </Button>
        <Text>{miscPrompt}</Text>
      </Flex>
    </Container>
  );
}
