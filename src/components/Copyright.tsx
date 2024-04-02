import {
  Text,
  Link,
  Flex,
  Container,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Copyright() {
  return (
    <Box bg={useColorModeValue("white", "gray.900")}>
      <Flex alignItems={"flex-end"} justifyContent={"center"}>
        <Text position={"fixed"} bottom="0" textAlign={"center"}>
          <Link href="https://github.com/amandakso/next-read" isExternal>
            Next Read
          </Link>
          {" © "}
          {new Date().getFullYear()}
          {"."}
        </Text>
      </Flex>
    </Box>
  );
}
