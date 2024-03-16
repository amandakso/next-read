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
} from "@chakra-ui/react";
import { BookInterface } from "../utilities/constants";

interface BookProps {
  key: number;
  book: BookInterface;
}

export default function Book(props: BookProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card width={"200px"} alignItems={"center"}>
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
        <Button
          onClick={onOpen}
          maxWidth="125px"
          variant="solid"
          colorScheme="teal"
        >
          Book Details
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.book.volumeInfo.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">
                <Image src="https://www.google.com/intl/en/googlebooks/images/gbs_preview_button1.gif" />
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </CardFooter>
    </Card>
  );
}
