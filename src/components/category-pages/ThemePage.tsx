import { useState } from "react";
import { Heading, Button, Text, Container, Flex } from "@chakra-ui/react";
import { themes, BookInterface } from "../../utilities/constants";
import {
  generatePrompt,
  fetchBooks,
  selectBooks,
} from "../../utilities/helpers";
import Books from "../Books";

export default function ThemePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [themePrompt, setThemePrompt] = useState<string>("");
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false); // check if http get request was received

  function generateThemePrompt() {
    return generatePrompt(themes);
  }
  async function handleThemeClick() {
    setIsLoading(true);
    const prompt = generateThemePrompt();

    setThemePrompt(prompt.prompt);
    setIsPrompt(true);

    // reset before search
    setIsBooks(false);
    setBooks([]);

    const api_key: string = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
    const url: string = `https://www.googleapis.com/books/v1/volumes?q=subject:${prompt.search}&langRestrict="en"&fields=items(id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink)&key=${api_key}`;

    fetchBooks(url).then((response) => {
      if (response.status !== 200) {
        //unable to fetch books
        setIsBooks(true);
        setBooks([]);
        setIsLoading(false);
      } else {
        // display books
        const data = response.data;
        const booksToDisplay = selectBooks(data.items);
        setBooks(booksToDisplay as BookInterface[]);

        setIsBooks(true);
        setIsLoading(false);
      }
    });
  }
  return (
    <>
      <Container>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading as="h3" size="lg">
            Theme: TBR prompts based on the themes in a book
          </Heading>
          <Button
            isLoading={isLoading}
            onClick={handleThemeClick}
            colorScheme="teal"
            maxWidth={"150px"}
          >
            Generate Prompt
          </Button>
          {isPromptGenerated ? <Text>{themePrompt}</Text> : null}
          {isLoading ? <Text>Finding similar books...</Text> : null}
          {isBooksFetched ? (
            books.length > 0 ? (
              <>
                <Text>Book Suggestions: </Text>
                <Books books={books} source={"google"} />
              </>
            ) : (
              <Text>Unable to find book suggestions.</Text>
            )
          ) : null}
        </Flex>
      </Container>
    </>
  );
}
