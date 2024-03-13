import { useRouteError } from "react-router-dom";
import { Flex, Center, Link, Text } from "@chakra-ui/react";

export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Center>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>
              {(error as Error)?.message ||
                (error as { statusText?: string })?.statusText}
            </i>
          </p>
          <Text>
            Return to home page{" "}
            <Link color="teal.500" href="/home">
              CLICK HERE
            </Link>
          </Text>
        </div>
      </Center>
    </Flex>
  );
}
