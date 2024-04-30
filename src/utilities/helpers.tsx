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

// generate prompt
export function generatePrompt<Type>(prompts: Type[]) {
  const max = prompts.length;
  const index = getRandomIndexNumber(max);
  return prompts[index];
}

// fetch books
export async function fetchBooks(url: string) {
  try {
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resJson = await res.json();
    return { status: res.status, data: resJson };
  } catch (error) {
    return { status: 400, error: error };
  }
}

// search for a book with google api

export async function searchGoogleBook(volumeid: string) {
  const api_key = import.meta.env.VITE_GOOGLE_BOOKS_KEY;
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${volumeid}?fields=id, volumeInfo.title, volumeInfo.subtitle, volumeInfo.authors, volumeInfo.publishedDate, volumeInfo.description, volumeInfo.pageCount, volumeInfo.averageRating, volumeInfo.ratingsCount, volumeInfo.maturityRating, volumeInfo.imageLinks, volumeInfo.previewLink&key=${api_key}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resJson = await res.json();
    if (resJson.error) {
      return false;
    } else {
      return resJson;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
}

export function selectBooks<Type>(bookArray: Type[]) {
  if (bookArray) {
    const maxBooksDisplayed = 3;
    if (bookArray.length > maxBooksDisplayed) {
      const numbersUsed: number[] = [];
      const bookSuggestions: Type[] = [];
      const max = bookArray.length;
      while (bookSuggestions.length < maxBooksDisplayed) {
        const index = getRandomIndexNumber(max);
        if (!numbersUsed.includes(index)) {
          bookSuggestions.push(bookArray[index]);
          numbersUsed.push(index);
        }
      }
      return bookSuggestions;
    } else {
      return bookArray;
    }
  } else {
    return [];
  }
}
