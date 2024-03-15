import { Container } from "@chakra-ui/react";
import { BookInterface } from "../utilities/constants";
import Book from "./Book";

interface BooksProps {
  books: BookInterface[];
}

export default function Books(props: BooksProps) {
  const books = props.books;
  console.log(books);
  return (
    <Container>
      {books.map((book: BookInterface, i: number) => {
        return <Book key={i} book={book} />;
      })}
    </Container>
  );
}
