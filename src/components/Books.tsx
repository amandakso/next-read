import { Container, Flex, Center } from "@chakra-ui/react";
import { BookInterface } from "../utilities/constants";
import Book from "./Book";

interface BooksProps {
  books: BookInterface[];
}

export default function Books(props: BooksProps) {
  const books = props.books;
  return (
    <Container>
      <Center>
        <Flex gap="5">
          {books.map((book: BookInterface, i: number) => {
            return <Book key={i} book={book} />;
          })}
        </Flex>
      </Center>
    </Container>
  );
}
