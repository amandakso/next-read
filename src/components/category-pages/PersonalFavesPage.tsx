import { useState } from "react";
import { Heading, Button, Text, Container, Flex } from "@chakra-ui/react";
import { selectBooks, searchGoogleBook } from "../../utilities/helpers";
import { favorites, BookInterface } from "../../utilities/constants";
import Books from "../../components/Books";

export default function PersonalFavesPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false);
  const [books, setBooks] = useState<BookInterface[]>([]);

  async function handleFavesClick() {
    // reset values
    setIsLoading(true);
    setIsBooks(false);

    // select favorite books
    const booksToDisplay = selectBooks(favorites);

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
        pt={"1rem"}
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
          books.length > 0 ? (
            <>
              <Text>Book Recommendations: </Text>
              <Books books={books} category={"favorite"} />
            </>
          ) : (
            <Text>Unable to get books. </Text>
          )
        ) : null}
      </Flex>
    </Container>
  );
}
