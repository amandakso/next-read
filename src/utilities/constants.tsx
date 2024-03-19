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
  {
    name: "Contemporary Fantasy",
    prompt: genrePromptPhrase + "Contemporary Fantasy",
    search: "fiction/fantasy/contemporary",
  },
  {
    name: "Historical Fantasy",
    prompt: genrePromptPhrase + "Historical Fantasy",
    search: "fiction/fantasy/historical",
  },
  {
    name: "Epic Fantasy",
    prompt: genrePromptPhrase + "Epic Fantasy",
    search: "fiction/fantasy/epic",
  },
  {
    name: "Romance Fantasy",
    prompt: genrePromptPhrase + "Romantasy",
    search: "fiction/fantasy/romance",
  },
  {
    name: "Urban Fantasy",
    prompt: genrePromptPhrase + "Urban Fantasy",
    search: "fiction/fantasy/urban",
  },
  {
    name: "Gothic Fiction",
    prompt: genrePromptPhrase + "Gothic Fiction",
    search: "fiction/gothic",
  },
  {
    name: "Graphic Novel",
    prompt: genrePromptPhrase + "Graphic Novel",
    search: "graphic+novel",
  },
  {
    name: "Historical Fiction",
    prompt: genrePromptPhrase + "Historical Fiction",
    search: "fiction/historical",
  },
  {
    name: "Historical Fiction",
    prompt: genrePromptPhrase + "Historical Fiction",
    search: "fiction/historical/general",
  },
  {
    name: "Literary Fiction",
    prompt: genrePromptPhrase + "Literary Fiction",
    search: "fiction/literary",
  },
  {
    name: "Magical Realism",
    prompt: genrePromptPhrase + "Magical Realism",
    search: "fiction/magical+realism",
  },
  {
    name: "Mystery",
    prompt: genrePromptPhrase + "Mystery",
    search: "fiction/mystery+detective",
  },
  {
    name: "Romance Fiction",
    prompt: genrePromptPhrase + "Romance",
    search: "fiction/romance",
  },
  {
    name: "Romance Fiction",
    prompt: genrePromptPhrase + "Romance",
    search: "fiction/romance/general",
  },
  {
    name: "Contemporary Romance",
    prompt: genrePromptPhrase + "Contemporary Romance",
    search: "fiction/romance/contemporary",
  },
  {
    name: "Historical Romance",
    prompt: genrePromptPhrase + "Historical Romance",
    search: "fiction/romance/historical",
  },
  {
    name: "Science Fiction",
    prompt: genrePromptPhrase + "Science Fiction",
    search: "fiction/science+fiction",
  },
  {
    name: "Science Fiction",
    prompt: genrePromptPhrase + "Science Fiction",
    search: "fiction/science+fiction/general",
  },
  {
    name: "Short Stories",
    prompt: genrePromptPhrase + "Short Stories",
    search: "fiction/short+stories",
  },
  {
    name: "Biographies",
    prompt: genrePromptPhrase + "Biographies",
    search: "biography",
  },
  {
    name: "Thrillers",
    prompt: genrePromptPhrase + "Thriller",
    search: "fiction/thrillers",
  },
  {
    name: "Thrillers",
    prompt: genrePromptPhrase + "Thriller",
    search: "fiction/thrillers/general",
  },
  {
    name: "Crime Thrillers",
    prompt: genrePromptPhrase + "Crime Thriller",
    search: "fiction/thrillers/crime",
  },
  {
    name: "Spy Thrillers",
    prompt: genrePromptPhrase + "Spy Thriller",
    search: "fiction/thrillers/espionage",
  },
  {
    name: "Psych Thrillers",
    prompt: genrePromptPhrase + "Psychological Thriller",
    search: "fiction/thrillers/psychological",
  },
  {
    name: "Suspense Thrillers",
    prompt: genrePromptPhrase + "Suspense Thriller",
    search: "fiction/thrillers/suspense",
  },
  {
    name: "Poetry",
    prompt: genrePromptPhrase + "Poetry",
    search: "poetry",
  },
  {
    name: "Poetry",
    prompt: genrePromptPhrase + "Poetry",
    search: "poetry/general",
  },

  {
    name: "YA Fiction",
    prompt: genrePromptPhrase + "Young Adult Fiction",
    search: "young+adult+fiction",
  },
  {
    name: "YA Fiction",
    prompt: genrePromptPhrase + "Young Adult Fiction",
    search: "young+adult+fiction/general",
  },
  {
    name: "YA Fiction: Classics",
    prompt: genrePromptPhrase + "Young Adult Fiction (Classics)",
    search: "young+adult+fiction/classics",
  },
  {
    name: "YA Fiction: Graphic Novels",
    prompt: genrePromptPhrase + "Young Adult Fiction (Comics & Graphic Novels)",
    search: "young+adult+fiction/comics+&+graphic+novels",
  },
  {
    name: "YA Fiction: Graphic Novels",
    prompt: genrePromptPhrase + "Young Adult Fiction (Comics & Graphic Novels)",
    search: "young+adult+fiction/comics+&+graphic+novels/general",
  },
  {
    name: "YA Fiction: Dystopian",
    prompt: genrePromptPhrase + "Young Adult Fiction (Dystopian)",
    search: "young+adult+fiction/dystopian",
  },
  {
    name: "YA Fiction: Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Fantasy)",
    search: "young+adult+fiction/fantasy",
  },
  {
    name: "YA Fiction: Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Fantasy)",
    search: "young+adult+fiction/fantasy/general",
  },
  {
    name: "YA Fiction: Contemporary Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Contemporary Fantasy)",
    search: "young+adult+fiction/fantasy/contemporary",
  },
  {
    name: "YA Fiction: Epic Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Epic Fantasy)",
    search: "young+adult+fiction/fantasy/epic",
  },
  {
    name: "YA Fiction: Historical Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Historical Fantasy)",
    search: "young+adult+fiction/fantasy/historical",
  },
  {
    name: "YA Fiction: Romance Fantasy",
    prompt: genrePromptPhrase + "Young Adult Fiction (Romantasy)",
    search: "young+adult+fiction/fantasy/romance",
  },
  {
    name: "YA Fiction: Historical",
    prompt: genrePromptPhrase + "Young Adult Fiction (Historical)",
    search: "young+adult+fiction/historical",
  },
  {
    name: "YA Fiction: Historical",
    prompt: genrePromptPhrase + "Young Adult Fiction (Historical)",
    search: "young+adult+fiction/historical/general",
  },
  {
    name: "YA Fiction: Horror",
    prompt: genrePromptPhrase + "Young Adult Fiction (Horror)",
    search: "young+adult+fiction/horror",
  },
  {
    name: "YA Fiction: Literary",
    prompt: genrePromptPhrase + "Young Adult Fiction (Literary)",
    search: "young+adult+fiction/literary",
  },
  {
    name: "YA Fiction: Magical Realism",
    prompt: genrePromptPhrase + "Young Adult Fiction (Magical Realism)",
    search: "young+adult+fiction/magical+realism",
  },
  {
    name: "YA Fiction: Mystery",
    prompt: genrePromptPhrase + "Young Adult Fiction (Mystery)",
    search: "young+adult+fiction/mysteries+detective+stories",
  },
  {
    name: "YA Fiction: Romance",
    prompt: genrePromptPhrase + "Young Adult Fiction (Romance)",
    search: "young+adult+fiction/romance",
  },
  {
    name: "YA Fiction: Romance",
    prompt: genrePromptPhrase + "Young Adult Fiction (Romance)",
    search: "young+adult+fiction/romance/general",
  },
  {
    name: "YA Fiction: Contemporary Romance",
    prompt: genrePromptPhrase + "Young Adult Fiction (Contemporary Romance)",
    search: "young+adult+fiction/romance/contemporary",
  },
  {
    name: "YA Fiction: Historical Romance",
    prompt: genrePromptPhrase + "Young Adult Fiction (Historical Romance)",
    search: "young+adult+fiction/romance/historical",
  },
  {
    name: "YA Fiction: Science Fiction",
    prompt: genrePromptPhrase + "Young Adult Fiction (Sci Fi)",
    search: "young+adult+fiction/science+fiction",
  },
  {
    name: "YA Fiction: Science Fiction",
    prompt: genrePromptPhrase + "Young Adult Fiction (Sci Fi)",
    search: "young+adult+fiction/science+fiction/general",
  },
  {
    name: "YA Fiction: Thriller",
    prompt: genrePromptPhrase + "Young Adult Fiction (Thriller)",
    search: "young+adult+fiction/thrillers+&+suspense",
  },
  {
    name: "YA Fiction: Spy Thriller",
    prompt: genrePromptPhrase + "Young Adult Fiction (Spy Thriller)",
    search: "young+adult+fiction/thrillers+&+suspense/espionage",
  },
  {
    name: "YA Fiction: Psychological Thriller",
    prompt: genrePromptPhrase + "Young Adult Fiction (Psychological Thriller)",
    search: "young+adult+fiction/thrillers+&+suspense/psychological",
  },
  {
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

interface ThemeInterface {
  name: string;
  prompt: string;
  search: string;
}

export const themes: ThemeInterface[] = [
  {
    name: "coming of age story",
    prompt: themePrompt + "Coming of Age",
    search: '"coming-of-age"',
  },
  { name: "love", prompt: themePrompt + "Love", search: "love" },
  { name: "betrayal", prompt: themePrompt + "Betrayal", search: "betrayal" },
  {
    name: "friendship",
    prompt: themePrompt + "Friendship",
    search: "friendship",
  },
  {
    name: "good vs evil",
    prompt: themePrompt + "Good vs. Evil",
    search: '"good+vs+evil"',
  },
  {
    name: "redemption",
    prompt: themePrompt + "Redemption",
    search: "redemption",
  },
  {
    name: "food",
    prompt: themePrompt + "Food and Cooking",
    search: "young%2Badult%2Bfiction%2Fcooking%2B%26%2Bfood",
  },
  {
    name: "small town",
    prompt: themePrompt + "Small Town",
    search: "fiction/small+town%2B%26%2Brural",
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
  { name: "Ender's Game", id: "jaM7DwAAQBAJ", isbn_13: "9780765394866" },
  { name: "A Deadly Education", id: "0YDJDwAAQBAJ", isbn_13: "9780593128497" },
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
