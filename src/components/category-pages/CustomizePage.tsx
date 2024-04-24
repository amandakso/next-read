import {
  Heading,
  Container,
  Flex,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  genres,
  themes,
  bestSellers,
  GenreInterface,
  ThemeInterface,
  BestSellersBookInterface,
  BestSellersInterface,
} from "../../utilities/constants";

export default function CustomizePage() {
  const prompts = [...genres, ...themes, ...bestSellers];
  const [selectedPrompts, setSelectedPrompts] = useState<Set<string>>(
    () => new Set()
  );

  function handleCustomizeClick() {
    let promptInfo: Array<
      GenreInterface | ThemeInterface | BestSellersInterface | undefined
    > = [];
    for (const item of selectedPrompts) {
      const found = prompts.find((element) => element.name == item);
      promptInfo = [...promptInfo, found];
    }
  }

  function handleCheckboxClicked(isChecked: boolean, name: string) {
    if (isChecked) {
      setSelectedPrompts((prev) => {
        const next = new Set(prev);
        next.add(name);
        return next;
      });
    } else {
      setSelectedPrompts((prev) => {
        const next = new Set(prev);
        next.delete(name);
        return next;
      });
    }
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
        <Button
          onClick={handleCustomizeClick}
          colorScheme="teal"
          maxWidth={"150px"}
        >
          Generate Prompt
        </Button>
      </Flex>
      <TableContainer overflowY={"auto"} maxHeight={"300px"}>
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Prompt</Th>
            </Tr>
          </Thead>
          <Tbody>
            <CheckboxGroup>
              {prompts.map((prompt, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <Checkbox
                        value={prompt.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          handleCheckboxClicked(
                            e.target.checked,
                            e.target.value
                          );
                        }}
                      />
                    </Td>
                    <Td whiteSpace={"wrap"}>{prompt.prompt}</Td>
                  </Tr>
                );
              })}
            </CheckboxGroup>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
