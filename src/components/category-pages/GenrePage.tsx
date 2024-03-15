import { Heading, Button } from "@chakra-ui/react";
import { getRandomIndexNumber } from "../../utilities/helpers";
import { genres } from "../../utilities/constants";
export default function GenrePage() {
  function generateGenrePrompt() {
    const max = genres.length;
    const index = getRandomIndexNumber(max);
    console.log(max);
    console.log(index);
    console.log(genres[index]);
    return genres[index];
  }

  return (
    <>
      <Heading as="h3" size="lg">
        Genre: TBR prompts based on the category/style of a book{" "}
      </Heading>
      <Button onClick={generateGenrePrompt} colorScheme="teal">
        Generate Prompt
      </Button>
    </>
  );
}
