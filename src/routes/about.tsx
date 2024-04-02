import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box minHeight={"calc(100vh)"}>
      <Heading>About Next Read</Heading>
      <Text>
        Next Read is a web application designed to help avid readers discover
        the next book to add to their reading lists. Select a prompt category
        and generate a randomized prompt along with book suggestions powered by
        Google Books and New York Times Books APIs.
      </Text>
      <Text>Happy Reading!</Text>
    </Box>
  );
}
