import { useState } from "react";
import { Heading, Button, Text, Container, Flex } from "@chakra-ui/react";
import { getRandomIndexNumber, generatePrompt } from "../../utilities/helpers";
import { genres, BookInterface } from "../../utilities/constants";
import Books from "../../components/Books";

export default function GenrePage() {
  const [genrePrompt, setGenrePrompt] = useState<string>("");
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false); // check if http get request was received
  const [gotBooks, setGotBooks] = useState<boolean>(false); // check if res json includes books

  function generateGenrePrompt() {
    return generatePrompt(genres);
  }

  async function handleGenreClick() {
    // get and display random genre prompt
    const api_key = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
    const prompt = generateGenrePrompt();
    setGenrePrompt(prompt.prompt);
    setIsPrompt(true);
    setIsLoading(true);
    // reset before search
    setIsBooks(false);
    setGotBooks(false);
    setBooks([]);

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:"${prompt.search}"&langRestrict="en"&fields=items(id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink)&key=${api_key}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resJson = await res.json();

      if (resJson.error) {
        // unable to fetch books
        setIsBooks(true);
        setGotBooks(false);
        setBooks([]);
        setIsLoading(false);
      } else {
        // display book results
        if (resJson.items) {
          if (resJson.items.length > 3) {
            const numbersUsed: number[] = [];
            const bookSuggestions: BookInterface[] = [];
            const max = resJson.items.length;
            while (bookSuggestions.length < 3) {
              const index = getRandomIndexNumber(max);
              if (!numbersUsed.includes(index)) {
                bookSuggestions.push(resJson.items[index]);
                numbersUsed.push(index);
              }
            }
            setBooks(bookSuggestions);
          } else {
            setBooks(resJson.items);
          }
          setGotBooks(true);
        } else {
          setGotBooks(false);
          setBooks([]);
        }
        setIsBooks(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setIsBooks(true);
      setGotBooks(false);
      setBooks([]);
      setIsLoading(false);
    }
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
            gotBooks ? (
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
