import {
  GenreInterface,
  ThemeInterface,
  BestSellersInterface,
} from "./constants";

// Generate random number from 0 to max - 1
export function getRandomIndexNumber(max: number) {
  return Math.floor(Math.random() * max);
}

//go to book preview url
export function previewBook(url: string | undefined) {
  function isValidUrl(str: string) {
    try {
      new URL(str);
      return true;
    } catch (err) {
      return false;
    }
  }
  if (url == undefined) {
    return;
  }
  const bookUrl = isValidUrl(url);
  if (bookUrl) {
    window.location.href = url;
  }
}

type promptsType = GenreInterface | ThemeInterface | BestSellersInterface;

// generate prompt
export function generatePrompt(prompts: promptsType[]) {
  const max = prompts.length;
  const index = getRandomIndexNumber(max);
  return prompts[index];
}
