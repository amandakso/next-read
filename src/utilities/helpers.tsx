// Generate random number from 0 to max - 1
export function getRandomIndexNumber(max: number) {
  return Math.floor(Math.random() * max);
}

export function previewBook(url: string) {
  function isValidUrl(str: string) {
    try {
      new URL(str);
      return true;
    } catch (err) {
      return false;
    }
  }
  const bookUrl = isValidUrl(url);
  if (bookUrl) {
    window.location.href = url;
  }
}
