// Genres
export interface GenreInterface {
  category: "genre";
  name: string;
  prompt: string;
  search: string;
}

// common phrases:
const genrePromptPhrase: string = "Read a book from the following genre: ";

export const genres: GenreInterface[] = [
  {
    category: "genre",
    name: "Absurdist Fiction",
    prompt: genrePromptPhrase + "Absurdist Fiction",
    search: "fiction/absurdist",
  },
  {
    category: "genre",
    name: "Classics",
    prompt: genrePromptPhrase + "Classics",
    search: "fiction/classics",
  },
  {
    category: "genre",
    name: "Dystopian Fiction",
    prompt: genrePromptPhrase + "Dystopian Fiction",
    search: "fiction/dystopian",
  },
  {
    category: "genre",
    name: "Fantasy",
    prompt: genrePromptPhrase + "Fantasy",
    search: "fiction/fantasy",
  },
  {
    category: "genre",
    name: "Contemporary Fantasy",
    prompt: genrePromptPhrase + "Contemporary Fantasy",
    search: "fiction/fantasy/contemporary",
  },
  {
    category: "genre",
    name: "Historical Fantasy",
    prompt: genrePromptPhrase + "Historical Fantasy",
    search: "fiction/fantasy/historical",
  },
  {
    category: "genre",
    name: "Epic Fantasy",
    prompt: genrePromptPhrase + "Epic Fantasy",
    search: "fiction/fantasy/epic",
  },
  {
    category: "genre",
    name: "Romance Fantasy",
    prompt: genrePromptPhrase + "Romantasy",
    search: "fiction/fantasy/romance",
  },
  {
    category: "genre",
    name: "Urban Fantasy",
    prompt: genrePromptPhrase + "Urban Fantasy",
    search: "fiction/fantasy/urban",
  },
  {
    category: "genre",
    name: "Gothic Fiction",
    prompt: genrePromptPhrase + "Gothic Fiction",
    search: "fiction/gothic",
  },
  {
    category: "genre",
    name: "Graphic Novel",
    prompt: genrePromptPhrase + "Graphic Novel",
    search: "graphic+novel",
  },
  {
    category: "genre",
    name: "Historical Fiction",
    prompt: genrePromptPhrase + "Historical Fiction",
    search: "fiction/historical",
  },
  {
    category: "genre",
    name: "Literary Fiction",
    prompt: genrePromptPhrase + "Literary Fiction",
    search: "fiction/literary",
  },
  {
    category: "genre",
    name: "Magical Realism",
    prompt: genrePromptPhrase + "Magical Realism",
    search: "fiction/magical+realism",
  },
  {
    category: "genre",
    name: "Mystery",
    prompt: genrePromptPhrase + "Mystery",
    search: "fiction/mystery+&+dectective",
  },
  {
    category: "genre",
    name: "Romance Fiction",
    prompt: genrePromptPhrase + "Romance",
    search: "fiction/romance",
  },
  {
    category: "genre",
    name: "Contemporary Romance",
    prompt: genrePromptPhrase + "Contemporary Romance",
    search: "fiction/romance/contemporary",
  },
  {
    category: "genre",
    name: "Historical Romance",
    prompt: genrePromptPhrase + "Historical Romance",
    search: "fiction/romance/historical",
  },
  {
    category: "genre",
    name: "Science Fiction",
    prompt: genrePromptPhrase + "Science Fiction",
    search: "fiction/science+fiction",
  },
  {
    category: "genre",
    name: "Short Stories",
    prompt: genrePromptPhrase + "Short Stories",
    search: "fiction/short+stories",
  },
  {
    category: "genre",
    name: "Biographies",
    prompt: genrePromptPhrase + "Biographies",
    search: "biography",
  },
  {
    category: "genre",
    name: "Thrillers",
    prompt: genrePromptPhrase + "Thriller",
    search: "fiction/thrillers",
  },
  {
    category: "genre",
    name: "Crime Thrillers",
    prompt: genrePromptPhrase + "Crime Thriller",
    search: "fiction/thrillers/crime",
  },
  {
    category: "genre",
    name: "Spy Thrillers",
    prompt: genrePromptPhrase + "Spy Thriller",
    search: "fiction/thrillers/espionage",
  },
  {
    category: "genre",
    name: "Psych Thrillers",
    prompt: genrePromptPhrase + "Psychological Thriller",
    search: "fiction/thrillers/psychological",
  },
  {
    category: "genre",
    name: "Suspense Thrillers",
    prompt: genrePromptPhrase + "Suspense Thriller",
    search: "fiction/thrillers/suspense",
  },
  {
    category: "genre",
    name: "Poetry",
    prompt: genrePromptPhrase + "Poetry",
    search: "poetry",
  },
  {
    category: "genre",
    name: "YA Fiction",
    prompt: genrePromptPhrase + "Young Adult Fiction",
    search: "young+adult+fiction",
  },
  {
    category: "genre",
    name: "YA Fiction: Classics",
    prompt: genrePromptPhrase + "Young Adult Fiction (Classics)",
    search: "young+adult+fiction/classics",
  },
  {
    category: "genre",
    name: "YA Fiction: Graphic Novels",
    prompt: genrePromptPhrase + "Young Adult Fiction (Comics & Graphic Novels)",
    search: "young+adult+fiction/comics+&+graphic+novels",
  },
  {
    category: "genre",
    name: "YA Fiction: Dystopian",
    prompt: genrePromptPhrase + "Young Adult Fiction (Dystopian)",
    search: "young+adult+fiction/dystopian",
  },
  {
    category: "genre",
    name: "YA Fiction: Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Fantasy)",
    search: "young+adult+fiction/fantasy",
  },
  {
    category: "genre",
    name: "YA Fiction: Contemporary Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Contemporary Fantasy)",
    search: "young+adult+fiction/fantasy/contemporary",
  },
  {
    category: "genre",
    name: "YA Fiction: Epic Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Epic Fantasy)",
    search: "young+adult+fiction/fantasy/epic",
  },
  {
    category: "genre",
    name: "YA Fiction: Historical Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Historical Fantasy)",
    search: "young+adult+fiction/fantasy/historical",
  },
  {
    category: "genre",
    name: "YA Fiction: Romance Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Romantasy)",
    search: "young+adult+fiction/fantasy/romance",
  },
  {
    category: "genre",
    name: "YA Fiction: Historical",
    prompt: genrePromptPhrase + "Young Adult Fiction (Historical)",
    search: "young+adult+fiction/historical",
  },
  {
    category: "genre",
    name: "YA Fiction: Horror",
    prompt: genrePromptPhrase + "Young Adult Fiction (Horror)",
    search: "young+adult+fiction/horror",
  },
  {
    category: "genre",
    name: "YA Fiction: Literary",
    prompt: genrePromptPhrase + "Young Adult Fiction (Literary)",
    search: "young+adult+fiction/literary",
  },
  {
    category: "genre",
    name: "YA Fiction: Magical Realism",
    prompt: genrePromptPhrase + "Young Adult Fiction (Magical Realism)",
    search: "young+adult+fiction/magical+realism",
  },
  {
    category: "genre",
    name: "YA Fiction: Mystery",
    prompt: genrePromptPhrase + "Young Adult Fiction (Mystery)",
    search: "young+adult+fiction/mysteries+detective+stories",
  },
  {
    category: "genre",
    name: "YA Fiction: Romance",
    prompt: genrePromptPhrase + "Young Adult Fiction (Romance)",
    search: "young+adult+fiction/romance",
  },
  {
    category: "genre",
    name: "YA Fiction: Contemporary Romance",
    prompt: genrePromptPhrase + "Young Adult Fiction (Contemporary Romance)",
    search: "young+adult+fiction/romance/contemporary",
  },
  {
    category: "genre",
    name: "YA Fiction: Historical Romance",
    prompt: genrePromptPhrase + "Young Adult Fiction (Historical Romance)",
    search: "young+adult+fiction/romance/historical",
  },
  {
    category: "genre",
    name: "YA Fiction: Science Fiction",
    prompt: genrePromptPhrase + "Young Adult Fiction (Sci Fi)",
    search: "young+adult+fiction/science+fiction",
  },
  {
    category: "genre",
    name: "YA Fiction: Thriller",
    prompt: genrePromptPhrase + "Young Adult Fiction (Thriller)",
    search: "young+adult+fiction/thrillers+suspense",
  },
  {
    category: "genre",
    name: "YA Fiction: Spy Thriller",
    prompt: genrePromptPhrase + "Young Adult Fiction (Spy Thriller)",
    search: "young+adult+fiction/thrillers+suspense/espionage",
  },
  {
    category: "genre",
    name: "YA Fiction: Crime Thriller",
    prompt: genrePromptPhrase + "Young Adult Fiction (Crime Thriller)",
    search: "young+adult+fiction/thrillers+&+suspense/crime",
  },
];

export interface BookInterface {
  id: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    authors: string[];
    publishedDate: string;
    description?: string;
    pageCount: number;
    averageRating?: number;
    ratingsCount?: number;
    maturityRating: string;
    imageLinks?: { smallThumbnail?: string; thumbnail: string };
    previewLink: string;
  };
}

// Theme
const themePrompt: string = "Read a book with the following theme: ";

export interface ThemeInterface {
  category: "theme";
  name: string;
  prompt: string;
  search: string;
}

export const themes: ThemeInterface[] = [
  {
    category: "theme",
    name: "coming of age story",
    prompt: themePrompt + "Coming of Age",
    search: '"coming-of-age"',
  },
  {
    category: "theme",
    name: "love",
    prompt: themePrompt + "Love",
    search: "love",
  },
  {
    category: "theme",
    name: "betrayal",
    prompt: themePrompt + "Betrayal",
    search: "betrayal",
  },
  {
    category: "theme",
    name: "friendship",
    prompt: themePrompt + "Friendship",
    search: "friendship",
  },
  {
    category: "theme",
    name: "good vs evil",
    prompt: themePrompt + "Good vs. Evil",
    search: '"good+vs+evil"',
  },
  {
    category: "theme",
    name: "redemption",
    prompt: themePrompt + "Redemption",
    search: "redemption",
  },
  {
    category: "theme",
    name: "food",
    prompt: themePrompt + "Food and Cooking",
    search: "young%2Badult%2Bfiction%2Fcooking%2B%26%2Bfood",
  },
  {
    category: "theme",
    name: "small town",
    prompt: themePrompt + "Small Town",
    search: '"fiction/small+town%2B%26%2Brural"',
  },
];

// Best Sellers
export interface BestSellersInterface {
  category: "bestseller";
  name: string;
  prompt: string;
  search: string;
}

const bestSellersPhrase: string =
  "Read a book from The New York Times Best Sellers List";

export const bestSellers: BestSellersInterface[] = [
  {
    category: "bestseller",
    name: "Hardcover Fiction",
    prompt: bestSellersPhrase + " (Hardcover Fiction)",
    search: "hardcover-fiction",
  },
  {
    category: "bestseller",
    name: "Hardcover Nonfiction",
    prompt: bestSellersPhrase + " (Hardcover Nonfiction)",
    search: "hardcover-nonfiction",
  },
  {
    category: "bestseller",
    name: "Paperback Trade Fiction",
    prompt: bestSellersPhrase + " (Paperback Trade Fiction)",
    search: "trade-fiction-paperback",
  },
  {
    category: "bestseller",
    name: "Paperback Nonfiction",
    prompt: bestSellersPhrase + " (Paperback Nonfiction)",
    search: "paperback-nonfiction",
  },
];

// Miscellaneous
interface MiscBook {
  name: string;
  id: string;
  isbn_13: string;
}

export interface MiscellaneousInterface {
  category: "misc";
  name: string;
  prompt: string;
  results: MiscBook[];
}

const miscPhrase: string = "Read a book ";

export const miscellaneous: MiscellaneousInterface[] = [
  // {
  //   category: "misc",
  //   name: "prompt name",
  //   prompt: miscPhrase + "prompt",
  //   results: [],
  // },

  // title
  {
    category: "misc",
    name: "nature in the title",
    prompt: miscPhrase + "with nature in the title",
    results: [
      {
        name: "A Court of Thorns and Roses",
        id: "4xsDEQAAQBAJ",
        isbn_13: "9781619634442",
      },
      {
        name: "A River Enchanted",
        id: "wgMvEAAAQBAJ",
        isbn_13: "9780063056008",
      },
      {
        name: "Flowers for Algernon",
        id: "NRWlitmahXkC",
        isbn_13: "9780156030304",
      },
      {
        name: "Last Tale of the Flower Bride",
        id: "5wRwEAAAQBAJ",
        isbn_13: "9780063206526",
      },
      {
        name: "The Final Empire",
        id: "t_ZYYXZq4RgC",
        isbn_13: "9781429914567",
      },
      {
        name: "Nettle & Bone",
        id: "oJsOEAAAQBAJ",
        isbn_13: "9781250244031",
      },
      {
        name: "Percy Jackson: The Lightning Thief",
        id: "FFTJDYx_ZiEC",
        isbn_13: "9781423131892",
      },
      {
        name: "The Priory of the Orange Tree",
        id: "49RdDwAAQBAJ",
        isbn_13: "9781635570281",
      },
      {
        name: "She Who Became the Sun",
        id: "FwX6DwAAQBAJ",
        isbn_13: "9781250621795",
      },
      {
        name: "The Starless Sea",
        id: "uYKDDwAAQBAJ",
        isbn_13: "9780385541220",
      },
      {
        name: "Tom Lake",
        id: "18OYEAAAQBAJ",
        isbn_13: "9780063327542",
      },
      {
        name: "Tress of the Emerald Sea",
        id: "EzSiEAAAQBAJ",
        isbn_13: "9781938570346",
      },
    ],
  },
  {
    category: "misc",
    name: "one word title",
    prompt: miscPhrase + "with a one word title",
    results: [
      {
        name: "Almond: A Novel",
        id: "mg6qDwAAQBAJ",
        isbn_13: "9780062961402",
      },
      {
        name: "Caraval",
        id: "kA-HDQAAQBAJ",
        isbn_13: "9781250095251",
      },
      {
        name: "Circe",
        id: "Vu8vDwAAQBAJ",
        isbn_13: "9780316556330",
      },
      {
        name: "Coraline",
        id: "8hUPYZp_COYC",
        isbn_13: "9781408818626",
      },
      {
        name: "Dune",
        id: "v_P2DwAAQBAJ",
        isbn_13: "9780441005901",
      },
      {
        name: "Emma",
        id: "RzD2i9kC9SAC",
        isbn_13: "9780573698996",
      },
      {
        name: "Faebound",
        id: "gdi_EAAAQBAJ",
        isbn_13: "9780593723012",
      },
      {
        name: "Fathamfolk",
        id: "0aLCEAAAQBAJ",
        isbn_13: "9780316564939",
      },
      {
        name: "Godkiller",
        id: "6MGzEAAAQBAJ",
        isbn_13: "9780063348288",
      },
      {
        name: "It",
        id: "KiszDwAAQBAJ",
        isbn_13: "9781501175466",
      },
      {
        name: "Legendborn",
        id: "GOfNDwAAQBAJ",
        isbn_13: "9781534441620",
      },
      {
        name: "Matilda",
        id: "_uIlE7DkAzYC",
        isbn_13: "9780141929453",
      },
      {
        name: "Neverwhere",
        id: "PqlwZikOXLIC",
        isbn_13: "9780061793059",
      },
      {
        name: "Scythe",
        id: "_6TAEAAAQBAJ",
        isbn_13: "9781442472433",
      },
      {
        name: "Throwback",
        id: "1bJIzwEACAAJ",
        isbn_13: "9781638930204",
      },
      {
        name: "Viscious",
        id: "vYSArk8vNCYC",
        isbn_13: "9781466822177",
      },
      {
        name: "Yellowface",
        id: "G4i6zwEACAAJ",
        isbn_13: "9780008532819",
      },
    ],
  },
  {
    category: "misc",
    name: "number in the title",
    prompt: miscPhrase + "with a number in the title",
    results: [
      {
        name: "A Tale of Two Cities",
        id: "i6r6Oyf7RpAC",
        isbn_13: "9781853260391",
      },
      {
        name: "Daisy Jones and the Six",
        id: "zZJfDwAAQBAJ",
        isbn_13: "9781524798635",
      },
      { name: "Fahrenheit 451", id: "AU9YtwAACAAJ", isbn_13: "9780671872298" },
      {
        name: "I am Number Four",
        id: "ZO7wFUFKtw4C",
        isbn_13: "9780062000767",
      },
      {
        name: "Life of Pi",
        id: "c3JeEAAAQBAJ",
        isbn_13: "9781350295698",
      },
      {
        name: "One Dark Window",
        id: "8RY_EAAAQBAJ",
        isbn_13: "9780316312585",
      },
      {
        name: "One For My Enemy",
        id: "P310EAAAQBAJ",
        isbn_13: "9781035011605",
      },
      {
        name: "Seven Days in June",
        id: "JiQBEAAAQBAJ",
        isbn_13: "9781538719114",
      },
      {
        name: "The Seven Year Slip",
        id: "ikyMEAAAQBAJ",
        isbn_13: "9780593336526",
      },
      {
        name: "Six of Crows",
        id: "yhIRBwAAQBAJ",
        isbn_13: "9781627795227",
      },
      {
        name: "Station Eleven",
        id: "2RIcAwAAQBAJ",
        isbn_13: "9780385353311",
      },
      {
        name: "The Ten Thousand Doors of January",
        id: "5sWCDwAAQBAJ",
        isbn_13: "9780316421980",
      },
      {
        name: "20,000 Leagues Under The Sea",
        id: "w6AFp-xfjP0C",
        isbn_13: "9781416500209",
      },
    ],
  },
  {
    category: "misc",
    name: "alliterative title",
    prompt: miscPhrase + "with an alliterative title",
    results: [
      {
        name: "A Series of Unfortunate Events: A Bad Beginning",
        id: "fdFiLwEACAAJ",
        isbn_13: "9781405266062",
      },
      {
        name: "A Good Girl's Guide To Murder",
        id: "qsudDwAAQBAJ",
        isbn_13: "9781984896384",
      },
      {
        name: "A Tale of Two Cities",
        id: "i6r6Oyf7RpAC",
        isbn_13: "9781853260391",
      },
      {
        name: "A Tempest of Tea",
        id: "mdBMEAAAQBAJ",
        isbn_13: "9780374389413",
      },
      {
        name: "The Adventures of Amina Al-Sirafi",
        id: "KON0EAAAQBAJ",
        isbn_13: "9780062963529",
      },
      {
        name: "Assassin's Apprentice",
        id: "eamvmgEACAAJ",
        isbn_13: "9780007496785",
      },
      {
        name: "The Count of Monte Cristo",
        id: "RofnDwAAQBAJ",
        isbn_13: "9780593081501",
      },
      {
        name: "Emily Wilde Book 1",
        id: "JtdkEAAAQBAJ",
        isbn_13: "9780593500149",
      },
      {
        name: "Legends & Lattes",
        id: "7lJzEAAAQBAJ",
        isbn_13: "9781250886095",
      },
      {
        name: "The Lies of Locke Lamora",
        id: "aWFm1w-nU30C",
        isbn_13: "9780553588941",
      },
      {
        name: "Lunar Love",
        id: "6fBwEAAAQBAJ",
        isbn_13: "9781538710272",
      },
      {
        name: "Pride & Prejudice",
        id: "fuQDzQEACAAJ",
        isbn_13: "9780141439518",
      },
      {
        name: "Red Rising",
        id: "nPF9n0SwstMC",
        isbn_13: "9780345539793",
      },
      {
        name: "Lockwood & Co. #1: The Screaming Staircase",
        id: "CmisjwEACAAJ",
        isbn_13: "9781484785164",
      },
      {
        name: "Sense & Sensibility",
        id: "3FkUf4Vd6sAC",
        isbn_13: "9781551111254",
      },
      {
        name: "The Seven Year Slip",
        id: "ikyMEAAAQBAJ",
        isbn_13: "9780593336526",
      },
      {
        name: "The Starless Sea",
        id: "uYKDDwAAQBAJ",
        isbn_13: "9780385541220",
      },
    ],
  },
  // page length
  {
    category: "misc",
    name: "more than 500 pages",
    prompt: miscPhrase + "with > 500 pages",
    results: [
      {
        name: "A Game of Thrones",
        id: "5NomkK4EV68C",
        isbn_13: "9780553897845",
      },
      { name: "Babel", id: "ZWRQEAAAQBAJ", isbn_13: "9780063021440" },
      {
        name: "The Book That Wouldn't Burn",
        id: "J-ziEAAAQBAJ",
        isbn_13: "9780593437926",
      },
      {
        name: "The Count of Monte Cristo",
        id: "RofnDwAAQBAJ",
        isbn_13: "9780593081501",
      },
      {
        name: "Dune",
        id: "v_P2DwAAQBAJ",
        isbn_13: "9780441005901",
      },
      {
        name: "It",
        id: "KiszDwAAQBAJ",
        isbn_13: "9781501175466",
      },
      {
        name: "Legendborn",
        id: "GOfNDwAAQBAJ",
        isbn_13: "9781534441620",
      },
      {
        name: "The Final Empire",
        id: "t_ZYYXZq4RgC",
        isbn_13: "9781429914567",
      },
      {
        name: "The Priory of the Orange Tree",
        id: "49RdDwAAQBAJ",
        isbn_13: "9781635570281",
      },
      {
        name: "The Secret History",
        id: "VO2w8m-ZAeMC",
        isbn_13: "9780307765697",
      },
      {
        name: "Strange the Dreamer",
        id: "rD5UCwAAQBAJ",
        isbn_13: "9780316341646",
      },
      {
        name: "The Way of the Kings",
        id: "QVn-CgAAQBAJ",
        isbn_13: "9780765376671",
      },
      {
        name: "The Will of the Many",
        id: "jlGUEAAAQBAJ",
        isbn_13: "9781982141196",
      },
    ],
  },
  {
    category: "misc",
    name: "less than 300 pages",
    prompt: miscPhrase + "with < 300 pages",
    results: [
      {
        name: "A Series of Unfortunate Events: A Bad Beginning",
        id: "fdFiLwEACAAJ",
        isbn_13: "9781405266062",
      },
      {
        name: "Almond: A Novel",
        id: "mg6qDwAAQBAJ",
        isbn_13: "9780062961402",
      },
      { name: "Charlotte's Web", id: "WwN4BgAAQBAJ", isbn_13: "9780062406781" },
      {
        name: "Coraline",
        id: "8hUPYZp_COYC",
        isbn_13: "9781408818626",
      },
      {
        name: "Days at the Morisaki Bookshop",
        id: "Vxi2EAAAQBAJ",
        isbn_13: "9781786583253",
      },
      { name: "Fahrenheit 451", id: "AU9YtwAACAAJ", isbn_13: "9780671872298" },
      { name: "The Giver", id: "oZRlYDfxXpQC", isbn_13: "9780385732550" },
      {
        name: "The Lion, the Witch, and the Wardrobe",
        id: "rz7J9fFShpkC",
        isbn_13: "9780064409421",
      },
      {
        name: "Matilda",
        id: "_uIlE7DkAzYC",
        isbn_13: "9780141929453",
      },
      {
        name: "Nettle & Bone",
        id: "oJsOEAAAQBAJ",
        isbn_13: "9781250244031",
      },
      {
        name: "On Earth We're Briefly Gorgeous",
        id: "gJMsEAAAQBAJ",
        isbn_13: "9780525562047",
      },
      {
        name: "The Phantom Tollbooth",
        id: "87UWNi83IrIC",
        isbn_13: "9780394820378",
      },
      {
        name: "The Things We Carried",
        id: "Op6eKrkxPq4C",
        isbn_13: "9780547420295",
      },
      {
        name: "This is How You Lose the Time War",
        id: "8EyBDwAAQBAJ",
        isbn_13: "9781534431010",
      },
      {
        name: "To Kill a Mockingbird",
        id: "PGR2AwAAQBAJ",
        isbn_13: "9780062368683",
      },
      {
        name: "What You Are Looking For is in the Library",
        id: "ERaqEAAAQBAJ",
        isbn_13: "9780369742018",
      },
    ],
  },
  // author
  {
    category: "misc",
    name: "debut",
    prompt: "Read an author's debut novel",
    results: [
      {
        name: "A Man Called Ove",
        id: "7mtNAgAAQBAJ",
        isbn_13: "9781476738031",
      },
      {
        name: "Almond: A Novel",
        id: "mg6qDwAAQBAJ",
        isbn_13: "9780062961402",
      },
      {
        name: "Godkiller",
        id: "6MGzEAAAQBAJ",
        isbn_13: "9780063348288",
      },
      {
        name: "The Hate U Give",
        id: "IbFuuQEACAAJ",
        isbn_13: "9781406387933",
      },
      {
        name: "Jasad Heir",
        id: "yn2aEAAAQBAJ",
        isbn_13: "9780316477963",
      },
      {
        name: "Legendborn",
        id: "GOfNDwAAQBAJ",
        isbn_13: "9781534441620",
      },
      {
        name: "Legends & Lattes",
        id: "7lJzEAAAQBAJ",
        isbn_13: "9781250886095",
      },
      {
        name: "Lunar Love",
        id: "6fBwEAAAQBAJ",
        isbn_13: "9781538710272",
      },
      {
        name: "The Martian",
        id: "MQeHAAAAQBAJ",
        isbn_13: "9780804139038",
      },
      {
        name: "On Earth We're Briefly Gorgeous",
        id: "gJMsEAAAQBAJ",
        isbn_13: "9780525562047",
      },
      {
        name: "The Night Circus",
        id: "-9F9WaXUhRYC",
        isbn_13: "9780385534642",
      },
      {
        name: "Red, White & Royal Blue",
        id: "_jNwDwAAQBAJ",
        isbn_13: "9781250316776",
      },
      {
        name: "Sense & Sensibility",
        id: "3FkUf4Vd6sAC",
        isbn_13: "9781551111254",
      },
      {
        name: "She Who Became the Sun",
        id: "FwX6DwAAQBAJ",
        isbn_13: "9781250621795",
      },
      {
        name: "The Song of Achilles",
        id: "opC3d3ltQ94C",
        isbn_13: "9780062060631",
      },
      {
        name: "Thursday Murder Club",
        id: "Tus2EAAAQBAJ",
        isbn_13: "9781984880987",
      },
    ],
  },
  // characters
  {
    category: "misc",
    name: "pov",
    prompt: miscPhrase + "told from dual/multiple POVs",
    results: [
      {
        name: "A Game of Thrones",
        id: "5NomkK4EV68C",
        isbn_13: "9780553897845",
      },
      {
        name: "A River Enchanted",
        id: "wgMvEAAAQBAJ",
        isbn_13: "9780063056008",
      },
      {
        name: "An Ember in the Ashes",
        id: "v8RwDQAAQBAJ",
        isbn_13: "9781595148049",
      },

      {
        name: "Daisy Jones and the Six",
        id: "zZJfDwAAQBAJ",
        isbn_13: "9781524798635",
      },
      { name: "Divine Rivals", id: "C5BrEAAAQBAJ", isbn_13: "9781250857446" },
      {
        name: "Godkiller",
        id: "6MGzEAAAQBAJ",
        isbn_13: "9780063348288",
      },
      {
        name: "The Kiss of Deception",
        id: "u4LAAwAAQBAJ",
        isbn_13: "9780805099232",
      },
      {
        name: "The Final Empire",
        id: "t_ZYYXZq4RgC",
        isbn_13: "9781429914567",
      },
      {
        name: "She Who Became the Sun",
        id: "FwX6DwAAQBAJ",
        isbn_13: "9781250621795",
      },
      {
        name: "Six of Crows",
        id: "yhIRBwAAQBAJ",
        isbn_13: "9781627795227",
      },
      {
        name: "The Starless Sea",
        id: "uYKDDwAAQBAJ",
        isbn_13: "9780385541220",
      },
      {
        name: "Still Life",
        id: "NzfzCYqsMOkC",
        isbn_13: "9781429967235",
      },
      {
        name: "This is How You Lose the Time War",
        id: "8EyBDwAAQBAJ",
        isbn_13: "9781534431010",
      },
      {
        name: "Throne of Glass",
        id: "D8GIcKPGNR8C",
        isbn_13: "9781408832332",
      },
      {
        name: "Thursday Murder Club",
        id: "Tus2EAAAQBAJ",
        isbn_13: "9781984880987",
      },
    ],
  },
  // setting
  {
    category: "misc",
    name: "library setting",
    prompt: miscPhrase + "that takes place in a library or bookshop",
    results: [
      {
        name: "Book Lovers",
        id: "Ju5nEAAAQBAJ",
        isbn_13: "9780593334836",
      },
      {
        name: "The Book That Wouldn't Burn",
        id: "J-ziEAAAQBAJ",
        isbn_13: "9780593437926",
      },
      {
        name: "Days at the Morisaki Bookshop",
        id: "Vxi2EAAAQBAJ",
        isbn_13: "9781786583253",
      },
      {
        name: "The Invisible Library",
        id: "2cO2CgAAQBAJ",
        isbn_13: "9781101988657",
      },
      {
        name: "The Lost Bookshop",
        id: "zfubEAAAQBAJ",
        isbn_13: "9780008609207",
      },
      {
        name: "The Midnight Library",
        id: "ho-rEAAAQBAJ",
        isbn_13: "9780525559498",
      },
      {
        name: "Sorcery of Thorns",
        id: "tfH1DwAAQBAJ",
        isbn_13: "9781481497626",
      },
      {
        name: "The Starless Sea",
        id: "uYKDDwAAQBAJ",
        isbn_13: "9780385541220",
      },
      {
        name: "Strange the Dreamer",
        id: "rD5UCwAAQBAJ",
        isbn_13: "9780316341646",
      },
      {
        name: "What You Are Looking For is in the Library",
        id: "ERaqEAAAQBAJ",
        isbn_13: "9780369742018",
      },
    ],
  },
  // series
  {
    category: "misc",
    name: "first in a series",
    prompt: "Read the first book in a series", // some results are of series not yet completed
    results: [
      {
        name: "A Court of Thorns and Roses",
        id: "4xsDEQAAQBAJ",
        isbn_13: "9781619634442",
      },
      {
        name: "A Curious Begninning",
        id: "4OQBDAAAQBAJ",
        isbn_13: "9780451476012",
      },
      {
        name: "A Deadly Education",
        id: "0YDJDwAAQBAJ",
        isbn_13: "9780593128497",
      },
      {
        name: "A Game of Thrones",
        id: "5NomkK4EV68C",
        isbn_13: "9780553897845",
      },
      {
        name: "A Good Girl's Guide To Murder",
        id: "qsudDwAAQBAJ",
        isbn_13: "9781984896384",
      },
      {
        name: "A River Enchanted",
        id: "wgMvEAAAQBAJ",
        isbn_13: "9780063056008",
      },
      {
        name: "A Series of Unfortunate Events: A Bad Beginning",
        id: "fdFiLwEACAAJ",
        isbn_13: "9781405266062",
      },
      {
        name: "A Tempest of Tea",
        id: "mdBMEAAAQBAJ",
        isbn_13: "9780374389413",
      },
      {
        name: "The Adventures of Amina Al-Sirafi",
        id: "KON0EAAAQBAJ",
        isbn_13: "9780062963529",
      },
      {
        name: "An Ember in the Ashes",
        id: "v8RwDQAAQBAJ",
        isbn_13: "9781595148049",
      },
      {
        name: "Assassin's Apprentice",
        id: "eamvmgEACAAJ",
        isbn_13: "9780007496785",
      },
      {
        name: "The Book That Wouldn't Burn",
        id: "J-ziEAAAQBAJ",
        isbn_13: "9780593437926",
      },
      {
        name: "Caraval",
        id: "kA-HDQAAQBAJ",
        isbn_13: "9781250095251",
      },
      {
        name: "The Cruel Prince",
        id: "-RGkDgAAQBAJ",
        isbn_13: "9780316310284",
      },
      { name: "Divine Rivals", id: "C5BrEAAAQBAJ", isbn_13: "9781250857446" },
      {
        name: "Dune",
        id: "v_P2DwAAQBAJ",
        isbn_13: "9780441005901",
      },
      {
        name: "Emily Wilde Book 1",
        id: "JtdkEAAAQBAJ",
        isbn_13: "9780593500149",
      },
      {
        name: "Faebound",
        id: "gdi_EAAAQBAJ",
        isbn_13: "9780593723012",
      },
      {
        name: "Fathamfolk",
        id: "0aLCEAAAQBAJ",
        isbn_13: "9780316564939",
      },
      {
        name: "Gideon the Ninth",
        id: "HHJwDwAAQBAJ",
        isbn_13: "9781250313171",
      },
      { name: "The Giver", id: "oZRlYDfxXpQC", isbn_13: "9780385732550" },
      {
        name: "Godkiller",
        id: "6MGzEAAAQBAJ",
        isbn_13: "9780063348288",
      },
      {
        name: "Hunger Games",
        id: "_zSzAwAAQBAJ",
        isbn_13: "9781407133171",
      },
      {
        name: "I am Number Four",
        id: "ZO7wFUFKtw4C",
        isbn_13: "9780062000767",
      },
      {
        name: "The Invisible Library",
        id: "2cO2CgAAQBAJ",
        isbn_13: "9781101988657",
      },
      {
        name: "Jasad Heir",
        id: "yn2aEAAAQBAJ",
        isbn_13: "9780316477963",
      },
      {
        name: "The Kiss of Deception",
        id: "u4LAAwAAQBAJ",
        isbn_13: "9780805099232",
      },
      {
        name: "Legendborn",
        id: "GOfNDwAAQBAJ",
        isbn_13: "9781534441620",
      },
      {
        name: "The Lies of Locke Lamora",
        id: "aWFm1w-nU30C",
        isbn_13: "9780553588941",
      },
      {
        name: "The Lion, the Witch, and the Wardrobe",
        id: "rz7J9fFShpkC",
        isbn_13: "9780064409421",
      },
      {
        name: "The Final Empire",
        id: "t_ZYYXZq4RgC",
        isbn_13: "9781429914567",
      },
      {
        name: "One Dark Window",
        id: "8RY_EAAAQBAJ",
        isbn_13: "9780316312585",
      },
      {
        name: "Percy Jackson: The Lightning Thief",
        id: "FFTJDYx_ZiEC",
        isbn_13: "9781423131892",
      },
      {
        name: "Red Rising",
        id: "nPF9n0SwstMC",
        isbn_13: "9780345539793",
      },
      {
        name: "Lockwood & Co. #1: The Screaming Staircase",
        id: "CmisjwEACAAJ",
        isbn_13: "9781484785164",
      },
      {
        name: "Scythe",
        id: "_6TAEAAAQBAJ",
        isbn_13: "9781442472433",
      },
      {
        name: "Six of Crows",
        id: "yhIRBwAAQBAJ",
        isbn_13: "9781627795227",
      },
      {
        name: "Still Life",
        id: "NzfzCYqsMOkC",
        isbn_13: "9781429967235",
      },
      {
        name: "Strange the Dreamer",
        id: "rD5UCwAAQBAJ",
        isbn_13: "9780316341646",
      },
      { name: "The Tainted Cup", id: "-YK9EAAAQBAJ", isbn_13: "9781984820723" },
      {
        name: "Throne of Glass",
        id: "D8GIcKPGNR8C",
        isbn_13: "9781408832332",
      },
      {
        name: "Thursday Murder Club",
        id: "Tus2EAAAQBAJ",
        isbn_13: "9781984880987",
      },
      {
        name: "Viscious",
        id: "vYSArk8vNCYC",
        isbn_13: "9781466822177",
      },
      {
        name: "The Way of the Kings",
        id: "QVn-CgAAQBAJ",
        isbn_13: "9780765376671",
      },
      {
        name: "The Will of the Many",
        id: "jlGUEAAAQBAJ",
        isbn_13: "9781982141196",
      },
    ],
  },
  {
    category: "misc",
    name: "TV/Movie Adaptation",
    prompt: miscPhrase + "with a TV series or movie adaptation",
    results: [
      {
        name: "A Game of Thrones",
        id: "5NomkK4EV68C",
        isbn_13: "9780553897845",
      },
      {
        name: "A Good Girl's Guide To Murder",
        id: "qsudDwAAQBAJ",
        isbn_13: "9781984896384",
      },
      {
        name: "A Man Called Ove",
        id: "7mtNAgAAQBAJ",
        isbn_13: "9781476738031",
      },
      {
        name: "A Series of Unfortunate Events: A Bad Beginning",
        id: "fdFiLwEACAAJ",
        isbn_13: "9781405266062",
      },
      { name: "Charlotte's Web", id: "WwN4BgAAQBAJ", isbn_13: "9780062406781" },
      {
        name: "Coraline",
        id: "8hUPYZp_COYC",
        isbn_13: "9781408818626",
      },
      {
        name: "Daisy Jones and the Six",
        id: "zZJfDwAAQBAJ",
        isbn_13: "9781524798635",
      },
      {
        name: "Dune",
        id: "v_P2DwAAQBAJ",
        isbn_13: "9780441005901",
      },
      {
        name: "Emma",
        id: "RzD2i9kC9SAC",
        isbn_13: "9780573698996",
      },
      { name: "Fahrenheit 451", id: "AU9YtwAACAAJ", isbn_13: "9780671872298" },
      { name: "The Giver", id: "oZRlYDfxXpQC", isbn_13: "9780385732550" },
      {
        name: "The Hate U Give",
        id: "IbFuuQEACAAJ",
        isbn_13: "9781406387933",
      },
      {
        name: "Hunger Games",
        id: "_zSzAwAAQBAJ",
        isbn_13: "9781407133171",
      },
      {
        name: "I am Number Four",
        id: "ZO7wFUFKtw4C",
        isbn_13: "9780062000767",
      },
      {
        name: "It",
        id: "KiszDwAAQBAJ",
        isbn_13: "9781501175466",
      },
      {
        name: "Life of Pi",
        id: "c3JeEAAAQBAJ",
        isbn_13: "9781350295698",
      },
      {
        name: "The Lion, the Witch, and the Wardrobe",
        id: "rz7J9fFShpkC",
        isbn_13: "9780064409421",
      },
      {
        name: "Lockwood & Co. #1: The Screaming Staircase",
        id: "CmisjwEACAAJ",
        isbn_13: "9781484785164",
      },
      {
        name: "The Martian",
        id: "MQeHAAAAQBAJ",
        isbn_13: "9780804139038",
      },
      {
        name: "Matilda",
        id: "_uIlE7DkAzYC",
        isbn_13: "9780141929453",
      },
      {
        name: "Percy Jackson: The Lightning Thief",
        id: "FFTJDYx_ZiEC",
        isbn_13: "9781423131892",
      },
      {
        name: "Pride & Prejudice",
        id: "fuQDzQEACAAJ",
        isbn_13: "9780141439518",
      },
      {
        name: "The Princess Bride",
        id: "DhxUDEbqaZQC",
        isbn_13: "9780156035422",
      },
      {
        name: "Red, White & Royal Blue",
        id: "_jNwDwAAQBAJ",
        isbn_13: "9781250316776",
      },
      {
        name: "Sense & Sensibility",
        id: "3FkUf4Vd6sAC",
        isbn_13: "9781551111254",
      },
      {
        name: "Six of Crows",
        id: "yhIRBwAAQBAJ",
        isbn_13: "9781627795227",
      },
      {
        name: "To Kill a Mockingbird",
        id: "PGR2AwAAQBAJ",
        isbn_13: "9780062368683",
      },
    ],
  },
];

// Favorites
interface Favorite {
  name: string;
  id: string;
  isbn_13: string;
}

export const favorites: Favorite[] = [
  {
    name: "Percy Jackson: The Lightning Thief",
    id: "FFTJDYx_ZiEC",
    isbn_13: "9781423131892",
  },
  {
    name: "Percy Jackson: Book 4",
    id: "K_ZF6kZ9MlgC",
    isbn_13: "9781423131984",
  },
  {
    name: "Series of Unfortunate Events: Book 2",
    id: "qwEyXbUAHDcC",
    isbn_13: "9780064407670",
  },
  { name: "Babel", id: "ZWRQEAAAQBAJ", isbn_13: "9780063021440" },
  { name: "The Tainted Cup", id: "-YK9EAAAQBAJ", isbn_13: "9781984820723" },
  { name: "Divine Rivals", id: "C5BrEAAAQBAJ", isbn_13: "9781250857446" },
  { name: "The Final Empire", id: "t_ZYYXZq4RgC", isbn_13: "9781429914567" },
  {
    name: "The Ballad of Never After",
    id: "f05VEAAAQBAJ",
    isbn_13: "9781250268419",
  },
  { name: "Emily Wilde Book 1", id: "JtdkEAAAQBAJ", isbn_13: "9780593500149" },
  { name: "The Giver", id: "oZRlYDfxXpQC", isbn_13: "9780385732550" },
  {
    name: "The Phantom Tollbooth",
    id: "87UWNi83IrIC",
    isbn_13: "9780394820378",
  },
  { name: "Pride & Prejudice", id: "fuQDzQEACAAJ", isbn_13: "9780141439518" },
  { name: "The BFG", id: "XJH7DAAAQBAJ", isbn_13: "9780140315974" },
  {
    name: "The Things We Carried",
    id: "Op6eKrkxPq4C",
    isbn_13: "9780547420295",
  },
  { name: "Charlotte's Web", id: "WwN4BgAAQBAJ", isbn_13: "9780062406781" },
  {
    name: "To Kill a Mockingbird",
    id: "PGR2AwAAQBAJ",
    isbn_13: "9780062368683",
  },
  { name: "Fahrenheit 451", id: "AU9YtwAACAAJ", isbn_13: "9780671872298" },
  {
    name: "Flowers for Algernon",
    id: "NRWlitmahXkC",
    isbn_13: "9780156030304",
  },
  { name: "A Deadly Education", id: "0YDJDwAAQBAJ", isbn_13: "9780593128497" },
];

interface QuoteInterface {
  quote: string;
  author?: string;
}

// Book Quotes
export const quotes: QuoteInterface[] = [
  {
    quote: "Books are a uniquely portable magic.",
    author: "Stephen King",
  },
  {
    quote:
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
  },
  {
    quote: "Sleep is good, he said, and books are better.",
    author: "Gearge R.R. Martin",
  },
  {
    quote:
      "I cannot remember the books I've read any more than the meals I have eaten; even so, they have made me.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.",
    author: "Anna Quindlen",
  },
  {
    quote:
      "So Matilda's strong young mind continued to grow, nurtured by the voices of all those authors who had sent their books out into the world like ships on the sea.",
    author: "Roald Dahl",
  },
  {
    quote:
      "Read. Read. Read. Just don't read one type of book. Read different books by various authors so that you develop different style.",
    author: "R.L. Stine",
  },
  {
    quote:
      "If I were a young person today, trying to gain a sense of myself in the world, I would do that again by reading, just as I did when I was young.",
    author: "Maya Angelou",
  },
  {
    quote: "I can feel infinitely alive curled up on the sofa reading a book",
    author: "Benedict Cumberbatch",
  },
  {
    quote: "If a book is well written, I always find it too short.",
    author: "Jane Austen",
  },
  {
    quote: "All I have learned, I learned from books.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "He read while he walked. He read while he ate. The other librarians suspected he somehow read while he slept, or perhaps didn't sleep at all.",
    author: "Laini Taylor",
  },
  { quote: "Literature is my Utopia", author: "Helen Keller" },
  {
    quote:
      "I think books are like people, in the sense that they'll turn up in your life when you most need them.",
    author: "Emma Thompson",
  },
  {
    quote:
      "You don't spend your life hanging around books without learning a thing or two.",
    author: "Lemony Snicket",
  },
  {
    quote:
      "My alma mater was books, a good library... I could spend the rest of my life reading, just satisfying my curiousity",
    author: "Malcolm X",
  },
];

interface TestResponse {
  status: number;
  items: BookInterface[];
}
// test item
export const testResponse: TestResponse = {
  status: 200,

  items: [
    {
      id: "OHclhBVv-X4C",
      volumeInfo: {
        title: "The Way of Kings",
        subtitle: "Book One of the Stormlight Archive",
        authors: ["Brandon Sanderson"],
        publishedDate: "2010-08-31",
        description:
          "From #1 New York Times bestselling author Brandon Sanderson, The Way of Kings, Book One of the Stormlight Archive begins an incredible new saga of epic proportion. Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter. It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them. One such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable. Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity. Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar's niece, Jasnah. Though she genuinely loves learning, Shallan's motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war. The result of over ten years of planning, writing, and world-building, The Way of Kings is but the opening movement of the Stormlight Archive, a bold masterpiece in the making. Speak again the ancient oaths: Life before death. Strength before weakness. Journey before Destination. and return to men the Shards they once bore. The Knights Radiant must stand again. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
        pageCount: 1008,
        averageRating: 4.5,
        ratingsCount: 129,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=OHclhBVv-X4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=OHclhBVv-X4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=OHclhBVv-X4C&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
      },
    },
    {
      id: "6dt_DwAAQBAJ",
      volumeInfo: {
        title: "Ninth House",
        authors: ["Leigh Bardugo"],
        publishedDate: "2019-10-08",
        description:
          '"The best fantasy novel I’ve read in years, because it’s about real people... Impossible to put down." —Stephen King The smash New York Times bestseller from Leigh Bardugo, a mesmerizing tale of power, privilege, and dark magic set among the Ivy League elite. Goodreads Choice Award Winner Locus Finalist Galaxy “Alex” Stern is the most unlikely member of Yale’s freshman class. Raised in the Los Angeles hinterlands by a hippie mom, Alex dropped out of school early and into a world of shady drug-dealer boyfriends, dead-end jobs, and much, much worse. In fact, by age twenty, she is the sole survivor of a horrific, unsolved multiple homicide. Some might say she’s thrown her life away. But at her hospital bed, Alex is offered a second chance: to attend one of the world’s most prestigious universities on a full ride. What’s the catch, and why her? Still searching for answers, Alex arrives in New Haven tasked by her mysterious benefactors with monitoring the activities of Yale’s secret societies. Their eight windowless “tombs” are the well-known haunts of the rich and powerful, from high-ranking politicos to Wall Street’s biggest players. But their occult activities are more sinister and more extraordinary than any paranoid imagination might conceive. They tamper with forbidden magic. They raise the dead. And, sometimes, they prey on the living. Don\'t miss the highly-anticipated sequel, Hell Bent.',
        pageCount: 406,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=6dt_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=6dt_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=6dt_DwAAQBAJ&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
      },
    },
    {
      id: "G5tgDQAAQBAJ",
      volumeInfo: {
        title: "Tower of Dawn",
        authors: ["Sarah J. Maas"],
        publishedDate: "2017-09-05",
        description:
          "A glorious empire. A desperate quest. An ancient secret. The search for allies extends to a new land in the sixth book of the #1 bestselling Throne of Glass series by Sarah J. Maas. Chaol Westfall and Nesryn Faliq have arrived in the shining city of Antica to forge an alliance with the Khagan of the Southern Continent, whose vast armies are Erilea's last hope. But they have also come to Antica for another purpose: to seek healing at the famed Torre Cesme for the wounds Chaol received in Rifthold. After enduring unspeakable horrors as a child at the hands of Adarlanian soldiers, Yrene Towers has no desire to help the young lord from Adarlan, let alone heal him. Yet she has sworn an oath to assist those in need, and she will honor it. But Lord Westfall carries his own dark past, and Yrene soon realizes that those shadows could engulf them both. Chaol, Nesryn, and Yrene will have to draw on every scrap of their resilience to overcome the danger that surrounds them. But while they become entangled in the political webs of the khaganate, long-awaited answers slumber deep in the mountains, where warriors soar on legendary ruks. Answers that might offer their world a chance at survival . . . or doom them all. The final battle looms in this sixth book in the #1 New York Times bestselling Throne of Glass series.",
        pageCount: 692,
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=G5tgDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=G5tgDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=G5tgDQAAQBAJ&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
      },
    },
    {
      id: "JMJ0hN01dO4C",
      volumeInfo: {
        title: "Centaur Aisle",
        authors: ["Piers Anthony"],
        publishedDate: "2002-03-26",
        description:
          "The magic of Xanth was useless in Mundania—until Dor tried honesty! Dor was having troubles growing up to be the next Magician-King of the magic Land of Xanth. He wanted no part of running the Kingdom. But now the Good King Trent was leaving on a trade mission to non-magical Mundania, home of such weird beasts as horses and bears, so Dor had to take over as King for a week. A week passes. No Trent. Then three weeks. King Trent still hasn't returned. Surely, something terrible had happened; he was apparently held captive in some foul dungeon, unable to escape. Dor was left with the burden of ruling—and with Irene, who was entirely too willing to be his Queen! His only hope was to enter Mundania and free King Trent. But how could it be done without the powers of magic? Nevertheless, he started forth bravely—together with Irene, a golem, a centaur, and a young ogre—heading for the far south of Xanth. The entrance to Mundania, of course, lay to the north.",
        pageCount: 248,
        averageRating: 4,
        ratingsCount: 5,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=JMJ0hN01dO4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=JMJ0hN01dO4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=JMJ0hN01dO4C&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
      },
    },
    {
      id: "Tv9kLyxuRygC",
      volumeInfo: {
        title: "The Path of Daggers",
        subtitle: "Book Eight of 'The Wheel of Time'",
        authors: ["Robert Jordan"],
        publishedDate: "2010-05-18",
        description:
          "The Wheel of Time is now an original series on Prime Video, starring Rosamund Pike as Moiraine! In The Path of Daggers, the eighth novel in Robert Jordan’s #1 New York Times bestselling epic fantasy series, The Wheel of Time®, Rand al'Thor engages in battle wearing the Crown of Swords and wielding Callandor against a force unprepared for the wrath of the Dragon Reborn. The Seanchan invaders are heading for Illian—and Rand's army of Asha'man soldiers. When they meet in battle, some of the Asha'man are afflicted by madness, unable to control their channeling and unleashing raw power. The madness extends to Rand himself. He has been hearing the voice of a man believed to have been the previous Dragon Reborn. Besieged by visions and debilitated whenever he uses the One Power, Rand chooses to attack the Seanchan with Callandor. The sword consumes him with a berserker rage, felling ally and enemy alike. And when he regains his senses, Rand finds himself less trusted by those who were once the most loyal. Since its debut in 1990, The Wheel of Time® by Robert Jordan has captivated millions of readers around the globe with its scope, originality, and compelling characters. The last six books in series were all instant #1 New York Times bestsellers, and The Eye of the World was named one of America's best-loved novels by PBS's The Great American Read. The Wheel of Time® New Spring: The Novel #1 The Eye of the World #2 The Great Hunt #3 The Dragon Reborn #4 The Shadow Rising #5 The Fires of Heaven #6 Lord of Chaos #7 A Crown of Swords #8 The Path of Daggers #9 Winter's Heart #10 Crossroads of Twilight #11 Knife of Dreams By Robert Jordan and Brandon Sanderson #12 The Gathering Storm #13 Towers of Midnight #14 A Memory of Light By Robert Jordan and Teresa Patterson The World of Robert Jordan's The Wheel of Time By Robert Jordan, Harriet McDougal, Alan Romanczuk, and Maria Simons The Wheel of Time Companion By Robert Jordan and Amy Romanczuk Patterns of the Wheel: Coloring Art Based on Robert Jordan's The Wheel of Time At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
        pageCount: 710,
        averageRating: 4,
        ratingsCount: 23,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Tv9kLyxuRygC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Tv9kLyxuRygC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=Tv9kLyxuRygC&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
      },
    },
    {
      id: "Ah0QEAAAQBAJ",
      volumeInfo: {
        title: "Empire of the Vampire",
        authors: ["Jay Kristoff"],
        publishedDate: "2021-09-14",
        description:
          "THE INSTANT NEW YORK TIMES, USA TODAY, AND WALL STREET JOURNAL BESTSELLER From New York Times bestselling author Jay Kristoff comes Empire of the Vampire, the first illustrated volume of an astonishing new dark fantasy saga. From holy cup comes holy light; The faithful hand sets world aright. And in the Seven Martyrs’ sight, Mere man shall end this endless night. It has been twenty-seven long years since the last sunrise. For nearly three decades, vampires have waged war against humanity; building their eternal empire even as they tear down our own. Now, only a few tiny sparks of light endure in a sea of darkness. Gabriel de León is a silversaint: a member of a holy brotherhood dedicated to defending realm and church from the creatures of the night. But even the Silver Order could not stem the tide once daylight failed us, and now, only Gabriel remains. Imprisoned by the very monsters he vowed to destroy, the last silversaint is forced to tell his story. A story of legendary battles and forbidden love, of faith lost and friendships won, of the Wars of the Blood and the Forever King and the quest for humanity’s last remaining hope: The Holy Grail.",
        pageCount: 794,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Ah0QEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Ah0QEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=Ah0QEAAAQBAJ&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
      },
    },
    {
      id: "ttI9DDdL7psC",
      volumeInfo: {
        title: "The Complete Grimm's Fairy Tales",
        authors: ["Brothers Grimm"],
        publishedDate: "1972",
        description:
          "The stories of magic and myth gathered by the Brothers Grimm have become part of the way children—and adults—learn about the vagaries of the real world. Cinderella, Rapunzel, Snow-White, Hänsel and Gretel, Little Red-Cap (Little Red Riding Hood), and Briar-Rose (Sleeping Beauty) are only a few of the more than two hundred enchanting characters included in this volume. The tales are presented just as Jacob and Wilhelm Grimm originally set them down: bold, primal, just frightening enough, and endlessly engaging. With black-and-white illustrations throughout Illustrated by Josef Schari / Commentary by Joseph Campbell Part of the Pantheon Fairy Tale and Folklore Library",
        pageCount: 878,
        averageRating: 4,
        ratingsCount: 4,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ttI9DDdL7psC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ttI9DDdL7psC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=ttI9DDdL7psC&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
      },
    },
    {
      id: "ZnsZfWOpdukC",
      volumeInfo: {
        title: "Anathem",
        authors: ["Neal Stephenson"],
        publishedDate: "2008-09-09",
        description:
          "Raz, a mathematician, is among a cohort of secluded scientists and philosophers who are called upon to save the world from impending catastrophe.",
        pageCount: 961,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ZnsZfWOpdukC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ZnsZfWOpdukC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=ZnsZfWOpdukC&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
      },
    },
    {
      id: "DmdFf5PnB4wC",
      volumeInfo: {
        title: "Halo: First Strike",
        authors: ["Eric Nylund"],
        publishedDate: "2012-04-24",
        description:
          "The definitive edition of the novel that bridges the story of Halo®: Combat Evolved and Halo® 2",
        pageCount: 452,
        averageRating: 5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=DmdFf5PnB4wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=DmdFf5PnB4wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=DmdFf5PnB4wC&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
      },
    },
    {
      id: "gOy07Z1AAR8C",
      volumeInfo: {
        title: "Parable of the Talents",
        subtitle: "A Novel",
        authors: ["Octavia E. Butler"],
        publishedDate: "1998",
        description:
          "Parable of the Talents celebrates the classic Butlerian themes of alienation and transcendence, violence and spirituality, slavery and freedom, separation and community, to astonishing effect, in the shockingly familiar, broken world of 2032. Long awaited, Parable of the Talents is the continuation of the travails of Lauren Olamina, the heroine of 1994's Nebula-Prize finalist, bestselling Parable of the Sower. Parable of the Talents is told in the voice of Lauren Olamina's daughter&...from whom she has been separated for most of the girl's life&...with sections in the form of Lauren's journal. Against a background of a war-torn continent, and with a far-right religious crusader in the office of the U.S. presidency, this is a book about a society whose very fabric has been torn asunder, and where the basic physical and emotional needs of people seem almost impossible to meet.",
        pageCount: 374,
        averageRating: 3.5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=gOy07Z1AAR8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=gOy07Z1AAR8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        previewLink:
          "http://books.google.com/books?id=gOy07Z1AAR8C&printsec=frontcover&dq=subject:fiction/fantasy&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
      },
    },
  ],
};

// NYT Best Seller Test Response
export interface BestSellersBookInterface {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns: { isbn10: string; isbn13: string }[];
  buy_links: { name: string; url: string }[];
  book_uri: string;
}

interface bestSellersTestResponseInterface {
  status: string;
  copyright: string;
  num_results: number;
  last_modified: string;
  results: {
    list_name: string;
    list_name_encoded: string;
    bestsellers_date: string;
    published_date: string;
    published_date_description: string;
    next_published_date: string;
    previous_published_date: string;
    display_name: string;
    normal_list_ends_at: number;
    updated: string;
    books: BestSellersBookInterface[];
    corrections: [];
  };
}

export const bestSellersTestResponse: bestSellersTestResponseInterface = {
  status: "OK",
  copyright:
    "Copyright (c) 2024 The New York Times Company.  All Rights Reserved.",
  num_results: 5,
  last_modified: "2024-03-27T22:24:44-04:00",
  results: {
    list_name: "Hardcover Fiction",
    list_name_encoded: "hardcover-fiction",
    bestsellers_date: "2024-03-23",
    published_date: "2024-04-07",
    published_date_description: "one_before_latest",
    next_published_date: "2024-04-14",
    previous_published_date: "2024-03-31",
    display_name: "Hardcover Fiction",
    normal_list_ends_at: 15,
    updated: "WEEKLY",
    books: [
      {
        rank: 1,
        rank_last_week: 1,
        weeks_on_list: 7,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "1250178630",
        primary_isbn13: "9781250178633",
        publisher: "St. Martin's",
        description:
          "In 1965, a nursing student follows her brother to serve during the Vietnam War and returns to a divided America.",
        price: "0.00",
        title: "THE WOMEN",
        author: "Kristin Hannah",
        contributor: "by Kristin Hannah",
        contributor_note: "",
        book_image:
          "https://storage.googleapis.com/du-prd/books/images/9781250178633.jpg",
        book_image_width: 333,
        book_image_height: 500,
        amazon_product_url:
          "https://www.amazon.com/dp/1250178630?tag=thenewyorktim-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
          {
            isbn10: "1250178630",
            isbn13: "9781250178633",
          },
          {
            isbn10: "1250178657",
            isbn13: "9781250178657",
          },
        ],
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1250178630?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781250178633?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250178633",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2BWOMEN%2FKristin%2BHannah%2F9781250178633",
          },
          {
            name: "Bookshop",
            url: "https://bookshop.org/a/3546/9781250178633",
          },
          {
            name: "IndieBound",
            url: "https://www.indiebound.org/book/9781250178633?aff=NYT",
          },
        ],
        book_uri: "nyt://book/9ce735af-71cf-5ff3-a367-43ee07e3fdd7",
      },
      {
        rank: 2,
        rank_last_week: 2,
        weeks_on_list: 46,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "1649374046",
        primary_isbn13: "9781649374042",
        publisher: "Red Tower",
        description:
          "Violet Sorrengail is urged by the commanding general, who also is her mother, to become a candidate for the elite dragon riders.",
        price: "0.00",
        title: "FOURTH WING",
        author: "Rebecca Yarros",
        contributor: "by Rebecca Yarros",
        contributor_note: "",
        book_image:
          "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg",
        book_image_width: 309,
        book_image_height: 500,
        amazon_product_url:
          "https://www.amazon.com/dp/1649374046?tag=thenewyorktim-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
          {
            isbn10: "1649374046",
            isbn13: "9781649374042",
          },
          {
            isbn10: "1649374089",
            isbn13: "9781649374080",
          },
          {
            isbn10: "1705085059",
            isbn13: "9781705085059",
          },
          {
            isbn10: "1705085032",
            isbn13: "9781705085035",
          },
          {
            isbn10: "1649376162",
            isbn13: "9781649376169",
          },
        ],
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1649374046?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781649374042?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781649374042",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FFOURTH%2BWING%2FRebecca%2BYarros%2F9781649374042",
          },
          {
            name: "Bookshop",
            url: "https://bookshop.org/a/3546/9781649374042",
          },
          {
            name: "IndieBound",
            url: "https://www.indiebound.org/book/9781649374042?aff=NYT",
          },
        ],
        book_uri: "nyt://book/106c2cf0-7d20-51b1-bad4-91c3ebcd131a",
      },
      {
        rank: 3,
        rank_last_week: 0,
        weeks_on_list: 1,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0316499676",
        primary_isbn13: "9780316499675",
        publisher: "Little, Brown",
        description:
          "A criminal defense attorney in Biloxi becomes the prime suspect in his wife’s murder.",
        price: "0.00",
        title: "THE #1 LAWYER",
        author: "James Patterson and Nancy Allen",
        contributor: "by James Patterson and Nancy Allen",
        contributor_note: "",
        book_image:
          "https://storage.googleapis.com/du-prd/books/images/9780316499675.jpg",
        book_image_width: 323,
        book_image_height: 500,
        amazon_product_url:
          "https://www.amazon.com/dp/0316499676?tag=thenewyorktim-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
          {
            isbn10: "0316499676",
            isbn13: "9780316499675",
          },
          {
            isbn10: "0316499692",
            isbn13: "9780316499699",
          },
        ],
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/0316499676?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9780316499675?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316499675",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FTHE%2B%25231%2BLAWYER%2FJames%2BPatterson%2Band%2BNancy%2BAllen%2F9780316499675",
          },
          {
            name: "Bookshop",
            url: "https://bookshop.org/a/3546/9780316499675",
          },
          {
            name: "IndieBound",
            url: "https://www.indiebound.org/book/9780316499675?aff=NYT",
          },
        ],
        book_uri: "nyt://book/8736f247-4bb0-5b05-8664-28ea55c92479",
      },
      {
        rank: 4,
        rank_last_week: 0,
        weeks_on_list: 1,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "0385550367",
        primary_isbn13: "9780385550369",
        publisher: "Doubleday",
        description:
          "A reimagining of “Adventures of Huckleberry Finn” shines a different light on Mark Twain's classic, revealing new facets of the character of Jim.",
        price: "0.00",
        title: "JAMES",
        author: "Percival Everett",
        contributor: "by Percival Everett",
        contributor_note: "",
        book_image:
          "https://storage.googleapis.com/du-prd/books/images/9780385550369.jpg",
        book_image_width: 333,
        book_image_height: 500,
        amazon_product_url:
          "https://www.amazon.com/dp/0385550367?tag=thenewyorktim-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
          {
            isbn10: "0385550367",
            isbn13: "9780385550369",
          },
          {
            isbn10: "0385550375",
            isbn13: "9780385550376",
          },
        ],
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/0385550367?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9780385550369?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385550369",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FJAMES%2FPercival%2BEverett%2F9780385550369",
          },
          {
            name: "Bookshop",
            url: "https://bookshop.org/a/3546/9780385550369",
          },
          {
            name: "IndieBound",
            url: "https://www.indiebound.org/book/9780385550369?aff=NYT",
          },
        ],
        book_uri: "nyt://book/5788b098-426a-5f2c-a318-475692df69ee",
      },
      {
        rank: 5,
        rank_last_week: 3,
        weeks_on_list: 20,
        asterisk: 0,
        dagger: 0,
        primary_isbn10: "1649374178",
        primary_isbn13: "9781649374172",
        publisher: "Red Tower",
        description:
          "The second book in the Empyrean series. Violet Sorrengail’s next round of training might require her to betray the man she loves.",
        price: "0.00",
        title: "IRON FLAME",
        author: "Rebecca Yarros",
        contributor: "by Rebecca Yarros",
        contributor_note: "",
        book_image:
          "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg",
        book_image_width: 309,
        book_image_height: 500,
        amazon_product_url:
          "https://www.amazon.com/dp/1649374178?tag=thenewyorktim-20",
        age_group: "",
        book_review_link: "",
        first_chapter_link: "",
        sunday_review_link: "",
        article_chapter_link: "",
        isbns: [
          {
            isbn10: "1649374178",
            isbn13: "9781649374172",
          },
          {
            isbn10: "1705085083",
            isbn13: "9781705085080",
          },
        ],
        buy_links: [
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/1649374178?tag=thenewyorktim-20",
          },
          {
            name: "Apple Books",
            url: "https://goto.applebooks.apple/9781649374172?at=10lIEQ",
          },
          {
            name: "Barnes and Noble",
            url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781649374172",
          },
          {
            name: "Books-A-Million",
            url: "https://www.anrdoezrs.net/click-7990613-35140?url=https%3A%2F%2Fwww.booksamillion.com%2Fp%2FIRON%2BFLAME%2FRebecca%2BYarros%2F9781649374172",
          },
          {
            name: "Bookshop",
            url: "https://bookshop.org/a/3546/9781649374172",
          },
          {
            name: "IndieBound",
            url: "https://www.indiebound.org/book/9781649374172?aff=NYT",
          },
        ],
        book_uri: "nyt://book/d3c570c9-3c3a-5c8b-a740-85ea5e92bfc9",
      },
    ],
    corrections: [],
  },
};
