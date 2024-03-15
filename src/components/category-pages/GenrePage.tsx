import { Heading, Button } from "@chakra-ui/react";
export default function GenrePage() {
  return (
    <>
      <Heading as="h3" size="lg">
        Genre: TBR prompts based on the category/style of a book{" "}
      </Heading>
      <Button colorScheme="teal">Generate Prompt</Button>
    </>
  );
}
