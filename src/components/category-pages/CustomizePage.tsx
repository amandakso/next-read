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
  miscellaneous,
  MiscellaneousInterface,
  BestSellersBookInterface,
  BookInterface,
  GenreInterface,
  ThemeInterface,
  BestSellersInterface,
} from "../../utilities/constants";
import {
  generatePrompt,
  fetchBooks,
  selectBooks,
  searchGoogleBook,
} from "../../utilities/helpers";
import Books from "../Books";

export default function CustomizePage() {
  const prompts = [...genres, ...themes, ...bestSellers, ...miscellaneous];
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    prompts.map(() => false)
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [promptCategory, setPromptCategory] = useState<
    "bestseller" | "genre" | "theme" | "misc" | undefined
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
      setIsLoading(false);
      return;
    }
    const randomizedPrompt = generatePrompt(selectedPrompts);
    setSelectedPrompt(randomizedPrompt.prompt);

    // set up url based on selected prompt's category
    const google_key = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
    const nyt_key = import.meta.env.VITE_NYT_KEY;

    const category: "bestseller" | "genre" | "theme" | "misc" =
      randomizedPrompt.category;

    setPromptCategory(category);

    // set url
    let url: string = "";

    if (category == "genre") {
      const genrePrompt = randomizedPrompt as GenreInterface;
      url = `https://www.googleapis.com/books/v1/volumes?q=subject:"${genrePrompt.search}"&langRestrict="en"&fields=items(id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink)&key=${google_key}`;
    } else if (category == "theme") {
      const themePrompt = randomizedPrompt as ThemeInterface;
      url = `https://www.googleapis.com/books/v1/volumes?q=subject:${themePrompt.search}&langRestrict="en"&fields=items(id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink)&key=${google_key}`;
    } else if (category == "bestseller") {
      const bestSellerPrompt = randomizedPrompt as BestSellersInterface;
      url = `https://api.nytimes.com/svc/books/v3/lists/current/${bestSellerPrompt.search}.json?api-key=${nyt_key}`;
    } else if (category == "misc") {
      // do nothing
    } else {
      setIsLoading(false);
      return;
    }

    let booksToDisplay;

    // fetch books for misc

    if (category == "misc") {
      const miscPrompt = randomizedPrompt as MiscellaneousInterface;
      const selectedBooks = selectBooks(miscPrompt.results);
      booksToDisplay = [];
      for (const item of selectedBooks) {
        const result = await searchGoogleBook(item.id);
        if (result) {
          booksToDisplay.push(result);
        }
      }

      // display books
      setBooks(booksToDisplay);
      setIsLoading(false);
      setShowResults(true);
      return;
    }

    // fetch books from non-misc categories

    fetchBooks(url).then((response) => {
      if (response.status !== 200) {
        // unable to fetch books
        // set states to display results
        setBooks([]);
      } else {
        // display books
        const data = response.data;
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
        pt={"1rem"}
      >
        <Heading as={"h1"} size="lg">
          Customize: Choose prompts to include in generating a random TBR prompt
        </Heading>
        <Heading as={"h2"} size="md">
          Selected Prompts (
          {
            checkedItems.filter((item) => {
              return item == true;
            }).length
          }
          )
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
          {books.length == 0 ? (
            <Text> Unable to get book suggestions...</Text>
          ) : (
            <>
              {promptCategory == "bestseller" ? (
                <Books
                  bestsellers={books as BestSellersBookInterface[]}
                  category={promptCategory}
                />
              ) : (
                <Books
                  books={books as BookInterface[]}
                  category={promptCategory}
                />
              )}
            </>
          )}
        </Container>
      )}
    </Container>
  );
}
