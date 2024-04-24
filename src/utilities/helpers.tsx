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
