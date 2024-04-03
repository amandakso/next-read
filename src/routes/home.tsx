import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Center,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { quotes } from "../utilities/constants";
import { getRandomIndexNumber } from "../utilities/helpers";
/*
 * https://unsplash.com/photos/white-cup-with-saucer-near-bok-OJZB0VUQKKc
https://unsplash.com/photos/blue-and-white-floral-wall-decor-RYtFleIk_4U
https://unsplash.com/photos/white-ceramic-mug-on-white-book-GVhAezjtX-4
 */

export default function Home() {
  const navigate = useNavigate();
  const [quoteNumber, setQuoteNumber] = useState<number>(0);
  const backgroundImgUrl: string =
    /*"https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";*/
    /*"https://images.unsplash.com/photo-1591925323327-2b12e3f3fcc2?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";*/
    "https://images.unsplash.com/photo-1600818797017-d6e5027210bb?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  function goToPrompts() {
    navigate("/prompts");
  }
  useEffect(() => {
    const max = quotes.length;
    setQuoteNumber(getRandomIndexNumber(max));
  }, [setQuoteNumber]);

  return (
    <>
      <Box
        bgImage={useColorModeValue(
          `url(${backgroundImgUrl})`,
          `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${backgroundImgUrl})`
        )}
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        rounded="md"
      >
        <Flex
          width={"100vw"}
          height={"100vh"}
          alignContent={"center"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <Center
            flexDir={"column"}
            color={useColorModeValue("black", "white")}
            p={"2rem"}
          >
            <Heading as={"h1"} size="2xl">
              “{quotes[quoteNumber].quote}”
            </Heading>
            <Heading as={"h2"} size="xl">
              <Text as={"i"}>
                {" "}
                ~{" "}
                {quotes[quoteNumber].author
                  ? quotes[quoteNumber].author
                  : "Unknown"}
              </Text>
            </Heading>
          </Center>
          <Center pt={".5rem"} flexDir={"column"}>
            <Button
              onClick={goToPrompts}
              colorScheme="teal"
              color={useColorModeValue("black", "white")}
            >
              Get Started
            </Button>
          </Center>
        </Flex>
      </Box>
    </>
  );
}
