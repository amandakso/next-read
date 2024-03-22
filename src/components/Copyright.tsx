import { Text, Link, Center } from "@chakra-ui/react";

export default function Copyright() {
  return (
    <Center>
      <Text position={"fixed"} bottom="0" textAlign={"center"}>
        <Link href="https://github.com/amandakso/next-read" isExternal>
          Next Read
        </Link>
        {" © "}
        {new Date().getFullYear()}
        {"."}
      </Text>
    </Center>
  );
}
