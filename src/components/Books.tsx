import { Container, Flex, Center } from "@chakra-ui/react";
import {
  BookInterface,
  BestSellersBookInterface,
} from "../utilities/constants";
import Book from "./Book";

interface BooksProps {
  books?: BookInterface[];
  bestsellers?: BestSellersBookInterface[];
  category: "genre" | "theme" | "bestseller" | "favorite" | undefined;
}

export default function Books(props: BooksProps) {
  const books = props.books;
  const bestsellers = props.bestsellers;
  const category: "genre" | "theme" | "bestseller" | "favorite" | undefined =
    props.category;

  return (
    <>
      {category ? (
        <Container>
          <Center>
            {category == "genre" ||
            category == "theme" ||
            category == "favorite" ? (
              <>
                <Flex gap="5" flexWrap={{ base: "wrap", md: "nowrap" }}>
                  {books?.map((book: BookInterface, i: number) => {
                    return <Book key={i} book={book} source={"google"} />;
                  })}
                </Flex>
              </>
            ) : (
              <>
                <Flex gap="5" flexWrap={{ base: "wrap", md: "nowrap" }}>
                  {bestsellers?.map(
                    (book: BestSellersBookInterface, i: number) => {
                      return <Book key={i} bestseller={book} source={"nyt"} />;
                    }
                  )}
                </Flex>
              </>
            )}
          </Center>
        </Container>
      ) : null}
    </>
  );
}
