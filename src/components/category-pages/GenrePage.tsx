import { useState } from "react";
import { Heading, Button, Text, Container, Flex } from "@chakra-ui/react";
import {
  generatePrompt,
  fetchBooks,
  selectBooks,
} from "../../utilities/helpers";
import { genres, BookInterface } from "../../utilities/constants";
import Books from "../../components/Books";

export default function GenrePage() {
  const [genrePrompt, setGenrePrompt] = useState<string>("");
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false); // check if http get request was received

  async function handleGenreClick() {
    // get and display random genre prompt
    const api_key = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
    const prompt = generatePrompt(genres);
    setGenrePrompt(prompt.prompt);
    setIsPrompt(true);
    setIsLoading(true);
    // reset before search
    setIsBooks(false);
    setBooks([]);
    const url: string = `https://www.googleapis.com/books/v1/volumes?q=subject:"${prompt.search}"&langRestrict="en"&fields=items(id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink)&key=${api_key}`;

    fetchBooks(url).then((response) => {
      if (response.status !== 200) {
        // unable to fetch books
        setIsBooks(true);
        setBooks([]);
        setIsLoading(false);
      } else {
        // display book results
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
          <Heading as="h1" size="lg">
            Genre: TBR prompts based on the category/style of a book{" "}
          </Heading>
          <Button
            isLoading={isLoading}
            onClick={handleGenreClick}
            colorScheme="teal"
            maxWidth={"150px"}
          >
            Generate Prompt
          </Button>
          {isPromptGenerated ? <Text>{genrePrompt}</Text> : null}
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
