import { Container, Flex, Center } from "@chakra-ui/react";
import {
  BookInterface,
  BestSellersBookInterface,
} from "../utilities/constants";
import Book from "./Book";

interface BooksProps {
  books?: BookInterface[];
  bestsellers?: BestSellersBookInterface[];
  source: "google" | "nyt";
}

export default function Books(props: BooksProps) {
  const books = props.books;
  const bestsellers = props.bestsellers;
  const source: "google" | "nyt" = props.source;

  return (
    <Container>
      <Center>
        {source == "google" ? (
          <>
            <Flex gap="5" flexWrap={{ base: "wrap", md: "nowrap" }}>
              {books?.map((book: BookInterface, i: number) => {
                return <Book key={i} book={book} source={source} />;
              })}
            </Flex>
          </>
        ) : (
          <>
            <Flex gap="5" flexWrap={{ base: "wrap", md: "nowrap" }}>
              {bestsellers?.map((book: BestSellersBookInterface, i: number) => {
                return <Book key={i} bestseller={book} source={source} />;
              })}
            </Flex>
          </>
        )}
      </Center>
    </Container>
  );
}
