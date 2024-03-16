import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { BookInterface } from "../utilities/constants";

interface BookProps {
  key: number;
  book: BookInterface;
}

export default function Book(props: BookProps) {
  return (
    <Card minWidth={"200px"} alignItems={"center"}>
      <CardBody>
        <Stack mt="6" spacing="2">
          <Image
            boxSize={"150px"}
            objectFit="contain"
            src={`${props.book.volumeInfo.imageLinks.smallThumbnail}`}
            alt={`Book Cover of ${props.book.volumeInfo.title}`}
          />
          <Heading size="sm">{props.book.volumeInfo.title}</Heading>
          <Heading size="xs">By: {props.book.volumeInfo.authors}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button maxWidth="125px" variant="solid" colorScheme="teal">
          Book Details
        </Button>
      </CardFooter>
    </Card>
  );
}
