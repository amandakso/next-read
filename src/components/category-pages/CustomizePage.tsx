import {
  Heading,
  Container,
  Flex,
  Button,
  ButtonGroup,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  genres,
  themes,
  bestSellers,
  BestSellersBookInterface,
  BookInterface,
} from "../../utilities/constants";
import {
  generatePrompt,
  fetchBooks,
  selectBooks,
} from "../../utilities/helpers";
import Books from "../Books";

export default function CustomizePage() {
  const prompts = [...genres, ...themes, ...bestSellers];
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    prompts.map(() => false)
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [promptCategory, setPromptCategory] = useState<
    "bestseller" | "genre" | "theme" | undefined
  >(undefined);
  const [books, setBooks] = useState<
    BestSellersBookInterface[] | BookInterface[]
  >([]);

  async function handleCustomizeClick() {
    // set loading state
    setIsLoading(true);

    // get selected prompts from checked prompts
    const selectedPrompts = [];
    for (let i = 0; i < checkedItems.length; i++) {
      if (checkedItems[i]) {
        selectedPrompts.push(prompts[i]);
      }
    }

    // generate random prompt
    if (selectedPrompts.length == 0) {
      return;
    }
    const randomizedPrompt = generatePrompt(selectedPrompts);
    setSelectedPrompt(randomizedPrompt.prompt);

    // set up url based on selected prompt's category
    const google_key = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
    const nyt_key = import.meta.env.VITE_NYT_KEY;

    const category: "bestseller" | "genre" | "theme" =
      randomizedPrompt.category;

    setPromptCategory(category);
    let url: string = "";

    switch (category) {
      case "genre":
        url = `https://www.googleapis.com/books/v1/volumes?q=subject:"${randomizedPrompt.search}"&langRestrict="en"&fields=items(id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink)&key=${google_key}`;
        break;
      case "theme":
        url = `https://www.googleapis.com/books/v1/volumes?q=subject:${randomizedPrompt.search}&langRestrict="en"&fields=items(id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink)&key=${google_key}`;

        break;
      case "bestseller":
        url = `https://api.nytimes.com/svc/books/v3/lists/current/${randomizedPrompt.search}.json?api-key=${nyt_key}`;
        break;
      default:
        // invalid category
        return;
    }

    // fetch books
    fetchBooks(url).then((response) => {
      if (response.status !== 200) {
        // unable to fetch books
        // set states to display results
        console.log("tbd");
      } else {
        // display books
        const data = response.data;
        let booksToDisplay;
        if (category == "genre" || category == "theme") {
          booksToDisplay = selectBooks(data.items);
        } else {
          booksToDisplay = selectBooks(data.results.books);
        }
        setBooks(
          booksToDisplay as BookInterface[] | BestSellersBookInterface[]
        );
      }
      setIsLoading(false);
      setShowResults(true);
    });
  }

  return (
    <Container>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading as={"h1"} size="lg">
          Customize: Choose prompts to include in generating a random TBR prompt
        </Heading>
        {!showResults ? (
          <Button
            isLoading={isLoading}
            onClick={handleCustomizeClick}
            colorScheme="teal"
            maxWidth={"150px"}
          >
            Generate Prompt
          </Button>
        ) : (
          <ButtonGroup>
            <Button
              isLoading={isLoading}
              onClick={handleCustomizeClick}
              colorScheme="teal"
              maxWidth={"150px"}
            >
              Generate Prompt
            </Button>
            <Button
              onClick={() => {
                setShowResults(false);
              }}
              colorScheme="teal"
              maxWidth={"150px"}
            >
              Return to Prompts
            </Button>
          </ButtonGroup>
        )}
      </Flex>
      {!showResults ? (
        <TableContainer overflowY={"auto"} maxHeight={"300px"}>
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Prompt</Th>
              </Tr>
            </Thead>
            <Tbody>
              {prompts.map((prompt, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <Checkbox
                        colorScheme="teal"
                        isChecked={checkedItems[index]}
                        value={prompt.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setCheckedItems([
                            ...checkedItems.slice(0, index),
                            e.target.checked,
                            ...checkedItems.slice(index + 1),
                          ]);
                        }}
                      />
                    </Td>
                    <Td whiteSpace={"wrap"}>{prompt.prompt}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Container>
          <Text>{selectedPrompt}</Text>
          {promptCategory == "bestseller" ? (
            <Books
              bestsellers={books as BestSellersBookInterface[]}
              category={promptCategory}
            />
          ) : (
            <Books books={books as BookInterface[]} category={promptCategory} />
          )}
        </Container>
      )}
    </Container>
  );
}
