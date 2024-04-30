import { useState } from "react";
import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { BookInterface, miscellaneous } from "../../utilities/constants";
import {
  generatePrompt,
  searchGoogleBook,
  selectBooks,
} from "../../utilities/helpers";
import Books from "../Books";

export default function MiscellaneousPage() {
  const [miscPrompt, setMiscPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false);
  const [books, setBooks] = useState<BookInterface[]>([]);

  async function handleMiscClick() {
    //reset values
    setIsLoading(true);
    setIsBooks(false);

    // get and display random misc prompt
    const prompt = generatePrompt(miscellaneous);
    setMiscPrompt(prompt.prompt);
    setIsPrompt(true);

    // select book suggestions to display
    const booksToDisplay = selectBooks(prompt.results);

    // get book data from selected books
    const bookResults = [];

    for (const item of booksToDisplay) {
      const result = await searchGoogleBook(item.id);
      if (result) {
        bookResults.push(result);
      }
    }

    // display books
    if (bookResults.length <= 0) {
      setBooks([]);
    } else {
      setBooks(bookResults);
    }

    setIsLoading(false);
    setIsBooks(true);
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
        <Button
          isLoading={isLoading}
          onClick={handleMiscClick}
          colorScheme="teal"
        >
          Generate Prompt
        </Button>
        {isPromptGenerated ? <Text>{miscPrompt}</Text> : null}
        {isLoading ? <Text>Getting books...</Text> : null}
        {isBooksFetched ? (
          books.length > 0 ? (
            <>
              <Text>Book Recommendations: </Text>
              <Books books={books} category={"misc"} />
            </>
          ) : (
            <Text>Unable to get books.</Text>
          )
        ) : null}
      </Flex>
    </Container>
  );
}
