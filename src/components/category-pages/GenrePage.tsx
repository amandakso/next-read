import { useState } from "react";
import { Heading, Button, Text } from "@chakra-ui/react";
import { getRandomIndexNumber } from "../../utilities/helpers";
import { genres, testResponse, Book } from "../../utilities/constants";
export default function GenrePage() {
  const [genrePrompt, setGenrePrompt] = useState<string>("");
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false); // check if http get request was received
  const [gotBooks, setGotBooks] = useState<boolean>(false); // check if res json includes books

  function generateGenrePrompt() {
    const max = genres.length;
    const index = getRandomIndexNumber(max);
    return genres[index];
  }

  async function handleGenreClick() {
    // get and display random genre prompt
    const prompt = generateGenrePrompt();
    console.log(prompt);
    setGenrePrompt(prompt.prompt);
    setIsPrompt(true);
    setIsLoading(true);
    // reset before search
    setIsBooks(false);
    setGotBooks(false);
    setBooks([]);

    // mimic send api book request (add later)
    setTimeout(() => {
      console.log("Delayed for 3 second.");
      const response = testResponse.items;
      const status = testResponse.status;
      setIsBooks(true);
      if (status == 200) {
        if (response.length) {
          if (response.length > 3) {
            const numbersUsed: number[] = [];
            const bookSuggestions: Book[] = [];
            const max = response.length;
            while (bookSuggestions.length < 3) {
              const index = getRandomIndexNumber(max);
              if (!numbersUsed.includes(index)) {
                bookSuggestions.push(response[index]);
                numbersUsed.push(index);
              }
            }
            setBooks(bookSuggestions);
            console.log(bookSuggestions);
          } else {
            setBooks(response);
            console.log(response);
          }
          setGotBooks(true);
        } else {
          setGotBooks(false);
          setBooks([]);
        }
        setIsLoading(false);
      } else {
        setIsBooks(false);
        setGotBooks(false);
        setBooks([]);
        setIsLoading(false);
      }

      /**
       * check status
       * if status 200:
       * set books fetched true
       *    if books length 0
       *        got books = false
       *       set books []
       *    if books less than 3
       *        got books = true
       *       set books (response.items)
       *    else
       *       got books = true
       *       let numbersUsed = []
       *       let bookSuggestions = []
       *       get 3 suggestions
       *       while bookSuggestions.length < 3:
       *           generate random number, if random number is not in numbersUsed
       *           add item to books suggestions
       *           and number to numbersUsed
       *       set bookSuggestions to books
       *
       * set loading false
       * else:
       * books fetched false
       * got books False
       * loading false
       *
       *
       */
    }, 3000);
  }

  return (
    <>
      <Heading as="h3" size="lg">
        Genre: TBR prompts based on the category/style of a book{" "}
      </Heading>
      <Button
        isLoading={isLoading}
        onClick={handleGenreClick}
        colorScheme="teal"
      >
        Generate Prompt
      </Button>
      {isPromptGenerated ? <Text>{genrePrompt}</Text> : null}
      {isLoading ? <Text>Finding similar books...</Text> : null}
      {isBooksFetched ? (
        gotBooks ? (
          <Text>Books found </Text>
        ) : (
          <Text>Unable to find book suggestions.</Text>
        )
      ) : null}
    </>
  );
}
