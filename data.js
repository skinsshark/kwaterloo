const data = [
  {
    "name": "Show & Tell Coffee",
    "filters": new Set(["food", "top"]),
    "files": ["0showandtell", "1showandtell", "2showandtell"]
  },
  {
    "name": "Zero Waste Bulk",
    "filters": new Set(["shop", "top"]),
    "files": ["0zerobulk"]
  },
  {
    "name": "Princess Cinemas",
    "filters": new Set(["fun"]),
    "files": ["0princess"]
  },
  {
    "name": "The Yeti Cafe",
    "filters": new Set(["food", "top"]),
    "files": ["0yeti"]
  },
  {
    "name": "Matter of Taste Coffee Bar",
    "filters": new Set(["food"]),
    "files": ["0mot"]
  },
  // {
  //   "name": "Hacienda Coffee",
  //   "filters": new Set(["food"]),
  //   "files": [""]
  // },
  {
    "name": "Special Delivery",
    "filters": new Set(["food"]),
    "files": ["0special"]
  },
  {
    "name": "Smile Tiger Coffee Roasters",
    "filters": new Set(["food"]),
    "files": ["0smiletiger"]
  },
  {
    "name": "Settlement Coffee Roasters",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Seven Shores",
    "filters": new Set(["food"]),
    "files": ["0sevenshores"]
  },
  {
    "name": "Exotica Cafe",
    "filters": new Set(["food"]),
    "files": ["0exotica"]
  },
  {
    "name": "brch social",
    "filters": new Set(["food"]),
    "files": ["0brch"]
  },
  {
    "name": "The Break Room",
    "filters": new Set(["fun"]),
    "files": ["0breakroom", "1breakroom"]
  },
  {
    "name": "Canadian Clay and Glass Gallery",
    "filters": new Set(["fun"]),
    "files": ["0clay", "1clay", "2clay"]
  },
  {
    "name": "Kitchener Public Library",
    "filters": new Set(["fun"]),
    "files": ["0kpl"],
  },
  {
    "name": "AMF Frederick",
    "filters": new Set(["fun"]),
    "files": ["0amf", "1amf", "2amf"]
  },
  {
    "name": "Victoria Park",
    "filters": new Set(["fun"]),
    "files": ["0vicpark"]
  },
  {
    "name": "Waterloo Park",
    "filters": new Set(["fun"]),
    "files": ["0waterloopark", "1waterloopark", "2waterloopark"]
  },
  {
    "name": "Queen Street Yoga",
    "filters": new Set(["fun", "top"]),
    "files": ["missing"]
  },
  {
    "name": "KEN Sushi House",
    "filters": new Set(["food"]),
    "files": ["0ken"]
  },
  {
    "name": "O’My Bakery",
    "filters": new Set(["food"]),
    "files": ["0omy"]
  },
  {
    "name": "Yummy Chongqing",
    "filters": new Set(["food", "top"]),
    "files": ["0yummy"]
  },
  {
    "name": "Scoop Du Jour",
    "filters": new Set(["food"]),
    "files": ["0scoop", "1scoop", "2scoop"]
  },
  {
    "name": "Bauer Kitchen",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Now Tea",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Mimo Thai Kitchen",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Kim’s Kitchen",
    "filters": new Set(["food", "top"]),
    "files": ["0kims", "1kims", "2kims"]
  },
  {
    "name": "Lancaster Smokehouse",
    "filters": new Set(["food"]),
    "files": ["0lancaster", "1lancaster", "2lancaster"]
  },
  {
    "name": "Pho Dau Bo",
    "filters": new Set(["food", "top"]),
    "files": ["0phodaubo", "1phodaubo"]
  },
  {
    "name": "goodvibes juice co.",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Darlise Cafe",
    "filters": new Set(["food"]),
    "files": ["0darlise"]
  },
  {
    "name": "Kinkaku Izakaya",
    "filters": new Set(["food", "top"]),
    "files": ["0kinkaku"]
  },
  {
    "name": "Chef On Call",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Red House",
    "filters": new Set(["food", "top"]),
    "files": ["0redhouse", "1redhouse"]
  },
  {
    "name": "Watami Sushi",
    "filters": new Set(["food", "top"]),
    "files": ["0watami", "1watami", "2watami"]
  },
  {
    "name": "My-Thai Restaurant",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Loloan Lobby Bar",
    "filters": new Set(["food", "top"]),
    "files": ["0loloan", "1loloan", "2loloan"]
  },
  {
    "name": "Jane Bond",
    "filters": new Set(["food", "top"]),
    "files": ["0janebond", "1janebond", "2janebond"]
  },
  {
    "name": "Pho Ben Thanh Restaurant",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Better Chef",
    "filters": new Set(["food"]),
    "files": ["0betterchef"]
  },
  {
    "name": "Cameron Chinese",
    "filters": new Set(["food"]),
    "files": ["0cameron"]
  },
  {
    "name": "Mel’s Diner",
    "filters": new Set(["food"]),
    "files": ["0mels"]
  },
  {
    "name": "McDonald’s",
    "filters": new Set(["food"]),
    "files": ["0mcds", "1mcds", "2mcds"]
  },
  {
    "name": "A Second Look Books And Movies",
    "filters": new Set(["shop"]),
    "files": ["0asecondlook", "1asecondlook"]
  },
  {
    "name": "St. Jacobs Farmers' Market",
    "filters": new Set(["shop", "food"]),
    "files": ["0stjacob", "1stjacob"]
  },
  {
    "name": "T&T Supermarket",
    "filters": new Set(["shop", "food"]),
    "files": ["0tt", "1tt", "2tt"]
  },
  {
    "name": "Michaels",
    "filters": new Set(["shop"]),
    "files": ["missing"]
  },
  {
    "name": "Luster & Oak",
    "filters": new Set(["shop"]),
    "files": ["missing"]
  },
  {
    "name": "Bob's valu-mart",
    "filters": new Set(["shop"]),
    "files": ["0bobsvalu", "1bobsvalu","2bobsvalu"]
  },
  {
    "name": "Legacy Greens",
    "filters": new Set(["shop"]),
    "files": ["0legacygreens", "1legacygreens"]
  },
  {
    "name": "BJ's Photo Labs",
    "filters": new Set(["shop"]),
    "files": ["0bjphotolabs", "1bjphotolabs"]
  },
  {
    "name": "Vincenzo's",
    "filters": new Set(["shop", "food", "top"]),
    "files": ["0vinc"]
  },
  {
    "name": "Kitchener Market",
    "filters": new Set(["shop", "food"]),
    "files": ["missing"]
  },
]
