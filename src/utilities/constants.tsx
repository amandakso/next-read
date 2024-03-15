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

// test item
export const testResponse = [
  {
    id: "OHclhBVv-X4C",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/OHclhBVv-X4C",
    volumeInfo: {
      title: "The Way of Kings",
      subtitle: "Book One of the Stormlight Archive",
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
    },
  },
  {
    id: "6dt_DwAAQBAJ",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/6dt_DwAAQBAJ",
    volumeInfo: {
      title: "Ninth House",
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
    },
  },
  {
    id: "G5tgDQAAQBAJ",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/G5tgDQAAQBAJ",
    volumeInfo: {
      title: "Tower of Dawn",
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
    },
  },
  {
    id: "Tv9kLyxuRygC",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/Tv9kLyxuRygC",
    volumeInfo: {
      title: "The Path of Daggers",
      subtitle: "Book Eight of 'The Wheel of Time'",
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
    },
  },
  {
    id: "Ah0QEAAAQBAJ",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/Ah0QEAAAQBAJ",
    volumeInfo: {
      title: "Empire of the Vampire",
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
    },
  },
  {
    id: "ttI9DDdL7psC",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/ttI9DDdL7psC",
    volumeInfo: {
      title: "The Complete Grimm's Fairy Tales",
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
    },
  },
  {
    id: "ZnsZfWOpdukC",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/ZnsZfWOpdukC",
    volumeInfo: {
      title: "Anathem",
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
    },
  },
  {
    id: "DmdFf5PnB4wC",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/DmdFf5PnB4wC",
    volumeInfo: {
      title: "Halo: First Strike",
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
    },
  },
  {
    id: "zSirFQbt4CYC",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/zSirFQbt4CYC",
    volumeInfo: {
      title: "The Confessions of St. Augustine",
      publishedDate: "1909",
      pageCount: 314,
      maturityRating: "NOT_MATURE",
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=zSirFQbt4CYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=zSirFQbt4CYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
    },
  },
  {
    id: "gOy07Z1AAR8C",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/gOy07Z1AAR8C",
    volumeInfo: {
      title: "Parable of the Talents",
      subtitle: "A Novel",
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
    },
  },
];
