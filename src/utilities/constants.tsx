// Genres
interface Genre {
  name: string;
  prompt: string;
  search: string;
}

// common phrases:
const genrePromptPhrase: string = "Read a book from the following genre: ";

export const genres: Genre[] = [
  {
    name: "Absurdist Fiction",
    prompt: genrePromptPhrase + "Absurdist Fiction",
    search: "fiction/absurdist",
  },
  {
    name: "Classics",
    prompt: genrePromptPhrase + "Classics",
    search: "fiction/classics",
  },
  {
    name: "Dystopian Fiction",
    prompt: genrePromptPhrase + "Dystopian Fiction",
    search: "fiction/dystopian",
  },
  {
    name: "Fantasy",
    prompt: genrePromptPhrase + "Fantasy",
    search: "fiction/fantasy",
  },
  {
    name: "Fantasy",
    prompt: genrePromptPhrase + "Fantasy",
    search: "fiction/fantasy/general",
  },
];
