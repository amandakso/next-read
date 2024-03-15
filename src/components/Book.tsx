import { BookInterface } from "../utilities/constants";

interface BookProps {
  key: number;
  book: BookInterface;
}

export default function Book(props: BookProps) {
  return (
    <>
      <h1>Book</h1>
    </>
  );
}
