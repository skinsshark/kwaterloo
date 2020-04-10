const data = [
  {
    "name": "Show & Tell Coffee",
    "filters": new Set(["food", "top"]),
    "files": ["2showandtell", "4showandtell", "0showandtell"]
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
    "files": ["0yeti", "3yeti", "2yeti"]
  },
  {
    "name": "Matter of Taste Coffee Bar",
    "filters": new Set(["food"]),
    "files": ["0mot", "1mot"]
  },
  // {
  //   "name": "Hacienda Coffee",
  //   "filters": new Set(["food"]),
  //   "files": [""]
  // },
  {
    "name": "Special Delivery",
    "filters": new Set(["food"]),
    "files": ["0special", "1special", "2special"]
  },
  {
    "name": "Smile Tiger Coffee Roasters",
    "filters": new Set(["food"]),
    "files": ["0smiletiger", "1smiletiger", "2smiletiger"]
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
    "files": ["0brch", "1brch"]
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
    "files": ["missing"],
  },
  {
    "name": "AMF Frederick",
    "filters": new Set(["fun"]),
    "files": ["0amf", "1amf", "2amf"]
  },
  {
    "name": "Victoria Park",
    "filters": new Set(["fun"]),
    "files": ["0vicpark", "1vicpark", "2vicpark"]
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
    "files": ["0ken", "2ken"]
  },
  {
    "name": "O’My Bakery",
    "filters": new Set(["food"]),
    "files": ["0omy"]
  },
  {
    "name": "Yummy Chongqing",
    "filters": new Set(["food", "top"]),
    "files": ["0yummy", "1yummy"]
  },
  {
    "name": "Scoop Du Jour",
    "filters": new Set(["food"]),
    "files": ["0scoop", "7scoop", "2scoop"]
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
    "files": ["4kims", "1kims", "0kims"]
  },
  {
    "name": "Lancaster Smokehouse",
    "filters": new Set(["food"]),
    "files": ["0lancaster", "1lancaster", "2lancaster"]
  },
  {
    "name": "Pho Dau Bo",
    "filters": new Set(["food", "top"]),
    "files": ["0phodaubo", "1phodaubo", "2phodaubo"]
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
    "files": ["0kinkaku", "1kinkaku", "2kinkaku"]
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
    "files": ["0watami", "1watami", "3watami"]
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
    "files": ["0janebond", "2janebond"]
  },
  {
    "name": "Pho Ben Thanh Restaurant",
    "filters": new Set(["food"]),
    "files": ["missing"]
  },
  {
    "name": "Better Chef",
    "filters": new Set(["food"]),
    "files": ["0betterchef", "1betterchef"]
  },
  {
    "name": "Cameron Chinese",
    "filters": new Set(["food"]),
    "files": ["0cameron"]
  },
  {
    "name": "Mel’s Diner",
    "filters": new Set(["food"]),
    "files": ["0mels", "1mels"]
  },
  {
    "name": "McDonald’s",
    "filters": new Set(["food"]),
    "files": ["0mcds", "1mcds", "4mcds"]
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
    "files": ["1bobsvalu","2bobsvalu"]
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
  {
    "name": "Snackhut",
    "filters": new Set(["shop", "top"]),
    "files": ["0snackhut", "1snackhut", "2snackhut"]
  },
  {
    "name": "Waterloo Central Supermarket",
    "filters": new Set(["shop"]),
    "files": ["0centralsupermarket"]
  },
  {
    "name": "Eby Farmstead",
    "filters": new Set(["fun"]),
    "files": ["0eby", "1eby", "2eby"]
  },
  {
    "name": "Gustav Bakos Observatory",
    "filters": new Set(["fun"]),
    "files": ["0observatory"]
  },
  {
    "name": "Cafe Pyrus",
    "filters": new Set(["food", "top"]),
    "files": ["0pyrus", "1pyrus", "2pyrus"]
  },
  {
    "name": "THEMUSEUM",
    "filters": new Set(["fun"]),
    "files": ["0museum", "2museum", "3museum"]
  }
]
