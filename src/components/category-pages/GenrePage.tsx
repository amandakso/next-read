import { useState } from "react";
import { Heading, Button, Text } from "@chakra-ui/react";
import { getRandomIndexNumber } from "../../utilities/helpers";
import { genres } from "../../utilities/constants";
export default function GenrePage() {
  const [genrePrompt, setGenrePrompt] = useState<string>("");

  function generateGenrePrompt() {
    const max = genres.length;
    const index = getRandomIndexNumber(max);
    return genres[index];
  }

  function handleGenreClick() {
    const prompt = generateGenrePrompt();
    console.log(prompt);
    setGenrePrompt(prompt.prompt);
  }

  return (
    <>
      <Heading as="h3" size="lg">
        Genre: TBR prompts based on the category/style of a book{" "}
      </Heading>
      <Button onClick={handleGenreClick} colorScheme="teal">
        Generate Prompt
      </Button>
      <Text>{genrePrompt}</Text>
    </>
  );
}
