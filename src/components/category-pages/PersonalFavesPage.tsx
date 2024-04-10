import { useState } from "react";
import { Heading, Button, Text, Container, Flex } from "@chakra-ui/react";
import { getRandomIndexNumber } from "../../utilities/helpers";
import { favorites, BookInterface } from "../../utilities/constants";
import Books from "../../components/Books";

export default function PersonalFavesPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false);
  const [gotBooks, setGotBooks] = useState<boolean>(false);
  const [books, setBooks] = useState<BookInterface[]>([]);

  async function searchBook(volumeid: string) {
    const api_key = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${volumeid}?fields=id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink&key=${api_key}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resJson = await res.json();
      console.log(resJson);
      if (resJson.error) {
        return false;
      } else {
        return resJson;
      }
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async function handleFavesClick() {
    setIsLoading(true);
    setIsBooks(false);
    setGotBooks(false);

    const max = favorites.length;
    const bookIndexes: number[] = [];
    while (bookIndexes.length < 3) {
      const index = getRandomIndexNumber(max);
      if (!bookIndexes.includes(index)) {
        bookIndexes.push(index);
      }
    }
    const bookResults = [];

    for (const bookIndex of bookIndexes) {
      const result = await searchBook(favorites[bookIndex].id);
      if (result) {
        bookResults.push(result);
      }
    }

    if (bookResults.length <= 0) {
      setBooks([]);
      setIsLoading(false);
      setIsBooks(true);
      setGotBooks(false);
    } else {
      setBooks(bookResults);
      setIsLoading(false);
      setIsBooks(true);
      setGotBooks(true);
    }
  }
  return (
    <Container>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as="h1" size="lg">
          Favorites: Next Read's book recomendations
        </Heading>
        <Button
          isLoading={isLoading}
          onClick={handleFavesClick}
          colorScheme="teal"
        >
          Get Book Recommendations
        </Button>
        {isLoading ? <Text>Getting books...</Text> : null}
        {isBooksFetched ? (
          gotBooks ? (
            <>
              <Text>Book Recommendations: </Text>
              <Books books={books} source={"google"} />
            </>
          ) : (
            <Text>Unable to get books. </Text>
          )
        ) : null}
      </Flex>
    </Container>
  );
}
