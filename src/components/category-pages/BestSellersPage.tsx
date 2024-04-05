import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  bestSellers,
  bestSellersTestResponse,
  BestSellersBookInterface,
} from "../../utilities/constants";
import { getRandomIndexNumber } from "../../utilities/helpers";
import Books from "../Books";

export default function BestSellersPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);
  const [bestSellersPrompt, setBestSellersPrompt] = useState<string>("");
  const [books, setBooks] = useState<BestSellersBookInterface[]>([]);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false);
  const [gotBookResults, setGotBooks] = useState<boolean>(false);

  function generateBestSellersPrompt() {
    const max = bestSellers.length;
    const index = getRandomIndexNumber(max);
    return bestSellers[index];
  }

  function generateBestSellersDate() {
    const randomNumber = getRandomIndexNumber(50);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let searchYear = currentYear - randomNumber;
    // limit year to 2000 or more recent
    searchYear = searchYear < 2000 ? 2000 : searchYear;
    const searchMonth = getRandomIndexNumber(13);
    const searchDay = getRandomIndexNumber(32);
    let searchDate = new Date(searchYear, searchMonth, searchDay);
    searchDate = searchDate > currentDate ? currentDate : searchDate;
    return searchDate;
  }

  function handleBestSellersClick() {
    //const api_key = import.meta.env.VITE_NYT_KEY;
    setIsLoading(true);
    const result = generateBestSellersPrompt();
    const bestSellersDate = generateBestSellersDate();
    setBestSellersPrompt("Read a book from " + result.prompt);
    setIsPrompt(true);

    //reset before search
    setIsBooks(false);
    setGotBooks(false);
    setBooks([]);

    console.log(result);
    console.log(bestSellersDate);
    const month = bestSellersDate.getMonth() + 1;
    const year = bestSellersDate.getFullYear();
    const day = bestSellersDate.getDate();

    // YYYY-MM-DD search format
    const searchDate =
      year.toString() +
      "-" +
      month.toString().padStart(2, "0") +
      "-" +
      day.toString().padStart(2, "0");

    const response = bestSellersTestResponse;

    console.log(response);

    if (!response) {
      setIsBooks(true);
      setGotBooks(false);
      setBooks([]);
      setIsLoading(false);
    } else {
      // display book results
      if (response.results) {
        if (response.results.books.length > 3) {
          const numbersUsed: number[] = [];
          const bookSuggestions = [];
          const max = response.results.books.length;
          while (bookSuggestions.length < 3) {
            const index = getRandomIndexNumber(max);
            if (!numbersUsed.includes(index)) {
              bookSuggestions.push(response.results.books[index]);
              numbersUsed.push(index);
            }
          }
          setBooks(bookSuggestions);
          console.log(bookSuggestions);
        } else {
          setBooks(response.results.books);
        }
        setGotBooks(true);
      } else {
        setGotBooks(false);
        setBooks([]);
      }
      setIsBooks(true);
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
          <Heading as={"h1"} size="lg">
            Best Sellers: TBR prompts based on the New York Times Best Sellers
            lists
          </Heading>
          <Button
            isLoading={isLoading}
            colorScheme="teal"
            maxWidth={"150px"}
            onClick={handleBestSellersClick}
          >
            Generate Prompt
          </Button>
          {isPromptGenerated ? <Text>{bestSellersPrompt}</Text> : null}
          {isLoading ? (
            <Text>Finding books from the Best Sellers list... </Text>
          ) : null}
          {isBooksFetched ? (
            gotBookResults ? (
              <>
                <Text>Book Suggestions: </Text>
                <Books bestsellers={books} source={"nyt"} />
              </>
            ) : (
              <Text>Unable to find book suggestions</Text>
            )
          ) : null}
        </Flex>
      </Container>
    </>
  );
}
