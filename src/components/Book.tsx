import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { BookInterface } from "../utilities/constants";

interface BookProps {
  key: number;
  book: BookInterface;
}

export default function Book(props: BookProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        objectFit="contain"
        maxW={{ base: "100%", sm: "200px" }}
        src={`${props.book.volumeInfo.imageLinks.smallThumbnail}`}
        alt={`Book Cover of ${props.book.volumeInfo.title}`}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{props.book.volumeInfo.title}</Heading>

          {props.book.volumeInfo.subtitle ? (
            <Heading size="sm">{props.book.volumeInfo.subtitle}</Heading>
          ) : null}
          <Heading size="sm">By: {props.book.volumeInfo.authors}</Heading>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="teal">
            Book Details
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
