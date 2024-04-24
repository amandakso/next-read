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
import { genres, themes, bestSellers } from "../../utilities/constants";

export default function CustomizePage() {
  const prompts = [...genres, ...themes, ...bestSellers];
  const [selectedPrompts, setSelectedPrompts] = useState<Set<string>>(
    () => new Set()
  );
  function handleCustomizeClick() {
    console.log(selectedPrompts);
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
            <Tr>
              <Td>test</Td>
              <Td>prompt test</Td>
            </Tr>
            <Tr backgroundColor={"teal"}>
              <Td>test</Td>
              <Td>prompt test</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
