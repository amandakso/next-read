import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  bestSellers,
  BestSellersBookInterface,
} from "../../utilities/constants";
import {
  getRandomIndexNumber,
  generatePrompt,
  fetchBooks,
  selectBooks,
} from "../../utilities/helpers";
import Books from "../Books";

export default function BestSellersPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);
  const [bestSellersPrompt, setBestSellersPrompt] = useState<string>("");
  const [books, setBooks] = useState<BestSellersBookInterface[]>([]);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false);
  const [bestSellersDate, setBestSellersDate] = useState<string>("");

  function generateBestSellersDate() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    // current year - x = 2010
    const difference = currentYear - 2009;
    const randomNumber = getRandomIndexNumber(difference);
    const searchYear = currentYear - randomNumber;
    // limit year to 2010 or more recent
    // searchYear = searchYear < 2010 ? 2010 : searchYear;
    const searchMonth = getRandomIndexNumber(13);
    const searchDay = getRandomIndexNumber(32);
    let searchDate = new Date(searchYear, searchMonth, searchDay);
    searchDate = searchDate > currentDate ? currentDate : searchDate;
    return searchDate;
  }

  async function handleBestSellersClick() {
    const api_key = import.meta.env.VITE_NYT_KEY;
    setIsLoading(true);
    const result = generatePrompt(bestSellers);
    const bestSellersDate = generateBestSellersDate();
    setBestSellersPrompt(result.prompt);
    setIsPrompt(true);

    //reset before search
    setIsBooks(false);
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

    // fetch from NYT Bestsellers
    const url: string = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?published_date=${searchDate}&api-key=${api_key}`;

    fetchBooks(url).then((response) => {
      // temporarily disable generate prompt button
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 30000);

      if (response.status !== 200) {
        //unable to fetch books
        setIsBooks(true);
        setBooks([]);
        setBestSellersDate("");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        const data = response.data;
        // [year, month, date]
        const dateArr = data.results.bestsellers_date.split("-");
        setBestSellersDate(dateArr[1] + "-" + dateArr[2] + "-" + dateArr[0]);
        const lists = data.results.lists;

        let bookResults = [];
        for (const list in lists) {
          if (lists[list].list_name_encoded == result.search) {
            bookResults = lists[list].books;
            break;
          }
        }
        // display book results
        const booksToDisplay = selectBooks(bookResults);
        setBooks(booksToDisplay as BestSellersBookInterface[]);

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
          pt={"1rem"}
        >
          <Heading as={"h1"} size="lg">
            Best Sellers: TBR prompts based on the New York Times Best Sellers
            lists
          </Heading>
          <Button
            isLoading={isLoading}
            isDisabled={isDisabled}
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
            books.length > 0 ? (
              <>
                <Text>Book Suggestions: </Text>
                <Books bestsellers={books} category={"bestseller"} />
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
