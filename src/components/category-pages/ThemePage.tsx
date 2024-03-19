import { useState } from "react";
import { Heading, Button, Text, Container, Flex } from "@chakra-ui/react";
import { titles, BookInterface } from "../../utilities/constants";
import { getRandomIndexNumber } from "../../utilities/helpers";

export default function ThemePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [titlePrompt, setTitlePrompt] = useState<string>("");
  const [books, setBooks] = useState<BookInterface[]>([]);
  const [isPromptGenerated, setIsPrompt] = useState<boolean>(false);
  const [isBooksFetched, setIsBooks] = useState<boolean>(false); // check if http get request was received
  const [gotBooks, setGotBooks] = useState<boolean>(false); // check if res json includes books

  function generateTitlePrompt() {
    const max = titles.length;
    const index = getRandomIndexNumber(max);
    return titles[index];
  }
  async function handleTitleClick() {
    console.log("click");
    setIsLoading(true);
    const prompt = generateTitlePrompt();
    const optionsArr = prompt.options;
    let search = "";
    const numArr: number[] = [];
    while (numArr.length < 2) {
      const num = getRandomIndexNumber(optionsArr.length);
      if (!numArr.includes(num)) {
        search = search + optionsArr[num] + "+";
        numArr.push(num);
      }
    }
    setTitlePrompt(prompt.prompt);
    setIsPrompt(true);

    // reset before search
    setIsBooks(false);
    setGotBooks(false);
    setBooks([]);

    const api_key = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
    console.log(search);

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&langRestrict="en"&fields=items(id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink)&key=${api_key}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resJson = await res.json();
      console.log(resJson);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }
  return (
    <>
      <Container>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading as="h3" size="lg">
            Title: TBR prompts based on the words in a book title
          </Heading>
          <Button
            isLoading={isLoading}
            onClick={handleTitleClick}
            colorScheme="teal"
            maxWidth={"150px"}
          >
            Generate Prompt
          </Button>
          {isPromptGenerated ? <Text>{titlePrompt}</Text> : null}
          {isLoading ? <Text>Finding similar books...</Text> : null}
        </Flex>
      </Container>
    </>
  );
}
