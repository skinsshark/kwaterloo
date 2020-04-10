const data = [
  {
    "name": "Show & Tell Coffee",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png", "show-and-tell1.png"]
  },
  {
    "name": "Zero Waste Bulk",
    "filters": new Set(["shop", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Princess Cinemas",
    "filters": new Set(["fun"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "The Yeti Cafe",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Matter of Taste Coffee Bar",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Hacienda Coffee",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Special Delivery",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Smile Tiger Coffee Roasters",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Settlement Coffee Roasters",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Seven Shores",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Exotica Cafe",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "brch social",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "The Break Room",
    "filters": new Set(["fun"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Canadian Clay and Glass Gallery",
    "filters": new Set(["fun"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Kitchener Public Library",
    "filters": new Set(["fun"]),
    "files": [],
  },
  {
    "name": "AMF Frederick",
    "filters": new Set(["fun"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Victoria Park",
    "filters": new Set(["fun"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Waterloo Park",
    "filters": new Set(["fun"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Queen Street Yoga",
    "filters": new Set(["fun", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "KEN Sushi House",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "O’My Bakery",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Yummy Chongqing",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Scoop Du Jour",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Bauer Kitchen",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Now Tea",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Mimo Thai Kitchen",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Kim’s Kitchen",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Lancaster Smokehouse",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Pho Dau Bo",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "goodvibes juice co.",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Darlise Cafe",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Kinkaku Izakaya",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Chef On Call",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Red House",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Watami Sushi",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "My-Thai Restaurant",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Loloan Lobby Bar",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Jane Bond",
    "filters": new Set(["food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Pho Ben Thanh Restaurant",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Better Chef",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Cameron Chinese",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Mel’s Diner",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "McDonald’s",
    "filters": new Set(["food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "A Second Look Books And Movies",
    "filters": new Set(["shop"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "St. Jacobs Farmers' Market",
    "filters": new Set(["shop", "food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "T&T Supermarket",
    "filters": new Set(["shop", "food"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Michaels",
    "filters": new Set(["shop"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Luster & Oak",
    "filters": new Set(["shop"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Bob's valu-mart",
    "filters": new Set(["shop"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Legacy Greens",
    "filters": new Set(["shop"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "BJ's Photo Labs",
    "filters": new Set(["shop"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Vincenzo's",
    "filters": new Set(["shop", "food", "top"]),
    "files": ["show-and-tell.png"]
  },
  {
    "name": "Kitchener Market",
    "filters": new Set(["shop", "food"]),
    "files": ["show-and-tell.png"]
  },
]
