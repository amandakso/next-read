import { Box } from "@chakra-ui/react";
/**
 *
 * photo background considering
 * https://unsplash.com/photos/white-cup-with-saucer-near-bok-OJZB0VUQKKc
 *
 *
 *
 */

export default function Home() {
  const backgroundImgUrl: string =
    "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <Box
        bgImage={`url(${backgroundImgUrl})`}
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        rounded="md"
      >
        <h1>homepage</h1>
      </Box>
    </>
  );
}
