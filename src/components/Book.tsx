import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Center,
} from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import {
  BookInterface,
  BestSellersBookInterface,
} from "../utilities/constants";
import { previewBook } from "../utilities/helpers";

import parse from "html-react-parser";

interface BookProps {
  key: number;
  book?: BookInterface;
  bestseller?: BestSellersBookInterface;
  source: "google" | "nyt";
}

export default function Book(props: BookProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (props.book) {
    return (
      <Card width={"200px"} alignItems={"center"}>
        <CardBody>
          <Stack mt="6" spacing="2">
            <Image
              boxSize={"150px"}
              objectFit="contain"
              src={`${props.book.volumeInfo.imageLinks?.smallThumbnail}`}
              alt={`Book Cover of ${props.book.volumeInfo.title}`}
            />
            <Heading size="sm">{props.book.volumeInfo.title}</Heading>
            {props.book.volumeInfo.authors.length > 1 ? (
              <Heading size="xs">
                By:{" "}
                {props.book.volumeInfo.authors.map((author, index) => {
                  return <span key={index}>{author}, </span>;
                })}
              </Heading>
            ) : (
              <Heading size="xs">
                By: {props.book.volumeInfo.authors[0]}
              </Heading>
            )}
          </Stack>
        </CardBody>
        <CardFooter>
          <Button
            onClick={onOpen}
            maxWidth="125px"
            variant="solid"
            colorScheme="teal"
          >
            Book Details
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Book Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Center>
                  <Image
                    boxSize={"150px"}
                    objectFit="contain"
                    src={`${props.book.volumeInfo.imageLinks?.smallThumbnail}`}
                    alt={`Book Cover of ${props.book.volumeInfo.title}`}
                  />
                </Center>
                <Text fontWeight={"bold"}>{props.book.volumeInfo.title}</Text>
                {props.book.volumeInfo.subtitle ? (
                  <Text fontWeight={"bold"}>
                    {props.book.volumeInfo.subtitle}
                  </Text>
                ) : null}
                <Text>By: {props.book.volumeInfo.authors}</Text>
                <Text>Published: {props.book.volumeInfo.publishedDate}</Text>
                <Text>
                  Page Count: {props.book.volumeInfo.pageCount}{" "}
                  {props.book.volumeInfo.pageCount == 1 ? "Page" : "Pages"}
                </Text>
                <Text>
                  Average Rating:{" "}
                  {props.book.volumeInfo.averageRating
                    ? props.book.volumeInfo.averageRating
                    : "-"}{" "}
                  / 5
                  {props.book.volumeInfo.ratingsCount
                    ? props.book.volumeInfo.ratingsCount == 1
                      ? "(1 review)"
                      : "(" + props.book.volumeInfo.ratingsCount + " reviews)"
                    : null}
                </Text>
                {props.book.volumeInfo.maturityRating !== "NOT_MATURE" ? (
                  <Text>Mature Book</Text>
                ) : null}
                <Text mt="1rem">Description: </Text>
                {props.book.volumeInfo.description ? (
                  <Prose>{parse(props.book.volumeInfo.description)}</Prose>
                ) : null}
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="teal" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  variant="ghost"
                  onClick={() =>
                    previewBook(props.book?.volumeInfo.previewLink)
                  }
                >
                  <Image src="https://www.google.com/intl/en/googlebooks/images/gbs_preview_button1.gif" />
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    );
  } else if (props.bestseller) {
    return (
      <Card width={"200px"} alignItems={"center"}>
        <CardBody>
          <Stack mt="6" spacing="2">
            <Image
              boxSize={"150px"}
              objectFit="contain"
              src={`${props.bestseller.book_image}`}
              alt={`Book Cover of ${props.bestseller.title}`}
            />
            <Heading size="sm">{props.bestseller.title}</Heading>
            <Heading size="xs">By: {props.bestseller.author}</Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button
            onClick={onOpen}
            maxWidth="125px"
            variant="solid"
            colorScheme="teal"
          >
            Book Details
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Book Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Center>
                  <Image
                    boxSize={"150px"}
                    objectFit="contain"
                    src={`${props.bestseller.book_image}`}
                    alt={`Book Cover of ${props.bestseller.title}`}
                  />
                </Center>
                <Text fontWeight={"bold"}>{props.bestseller.title}</Text>
                <Text>By: {props.bestseller.author}</Text>
                <Text>Rank: {props.bestseller.rank}</Text>
                <Text>Weeks on List: {props.bestseller.weeks_on_list}</Text>
                <Text mt="1rem">Description: </Text>
                <Text>{props.bestseller.description}</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="teal" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    );
  } else {
    return null;
  }
}
