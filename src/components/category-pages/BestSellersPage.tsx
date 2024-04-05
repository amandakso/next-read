import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  bestSellers,
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
  const [bestSellersDate, setBestSellersDate] = useState<string>("");

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

  async function handleBestSellersClick() {
    const api_key = import.meta.env.VITE_NYT_KEY;
    setIsLoading(true);
    const result = generateBestSellersPrompt();
    const bestSellersDate = generateBestSellersDate();
    setBestSellersPrompt("Read a book from " + result.prompt);
    setIsPrompt(true);

    //reset before search
    setIsBooks(false);
    setGotBooks(false);
    setBooks([]);
    setBestSellersDate("");

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
    console.log(searchDate);

    // fetch from NYT Bestsellers

    try {
      const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?published_date=${searchDate}&api-key=${api_key}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await res.json();
      if (response.status !== "OK") {
        // error fetching books
        setIsBooks(true);
        setGotBooks(false);
        setBooks([]);
        setBestSellersDate("");
        setIsLoading(false);
      } else {
        console.log(response);
        setIsLoading(false);
        setBestSellersDate(response.results.bestsellers_date);
        const lists = response.results.lists;
        let bookResults = [];
        for (const list in lists) {
          if (lists[list].list_name_encoded == result.search) {
            bookResults = lists[list].books;
            break;
          }
        }
        // display book results
        console.log(bookResults);
        if (bookResults.length > 0) {
          if (bookResults.length > 3) {
            const numbersUsed: number[] = [];
            const bookSuggestions = [];
            const max = bookResults.length;
            while (bookSuggestions.length < 3) {
              const index = getRandomIndexNumber(max);
              if (!numbersUsed.includes(index)) {
                bookSuggestions.push(bookResults[index]);
                numbersUsed.push(index);
              }
            }
            setBooks(bookSuggestions);
            console.log(bookSuggestions);
          } else {
            setBooks(bookResults);
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
      setBestSellersDate("");
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
          {bestSellersDate !== "" ? <Text>{bestSellersDate}</Text> : null}
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
