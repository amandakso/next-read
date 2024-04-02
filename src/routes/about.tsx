import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box minHeight={"calc(100vh)"}>
      <Heading as="h1" pt={"2rem"} textAlign={"center"}>
        About Next Read
      </Heading>
      <Text fontSize="2xl" textAlign={"center"} pl={"5rem"} pr={"5rem"}>
        Next Read is a web application designed to help avid readers discover
        the next book to add to their reading lists. Select a prompt category
        and generate a randomized prompt along with book suggestions powered by
        Google Books and New York Times Books APIs.
      </Text>
      <Text fontSize={"2xl"} as={"i"} textAlign={"center"}>
        Happy Reading!
      </Text>
    </Box>
  );
}
