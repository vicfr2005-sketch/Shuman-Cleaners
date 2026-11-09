// Everything below comes from shumanscleaners.com (Home, About Us, Our Services)
// and the lettering on the company van. Edit here; the page reads from this file.

export const site = {
  name: "Shuman Cleaners",
  founded: 1926,
  phone: "912-537-3212",
  phoneHref: "tel:+19125373212",
  street: "128 South West Main Street",
  city: "Vidalia",
  region: "GA",
  regionLong: "Georgia",
  facebook: "https://www.facebook.com/Shuman-Cleaners-1053040124893389/",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Shuman+Cleaners+128+South+West+Main+Street+Vidalia+GA",
} as const

export const serviceGroups = [
  {
    title: "Cleaning",
    items: [
      "Dry cleaning",
      "Wash, dry and fold",
      "Washing and ironing",
      "Leather and suede cleaning and repair",
      "Drapery cleaning",
    ],
  },
  {
    title: "Gowns and formal wear",
    items: ["Wedding gown cleaning and preservation", "Formal dresses"],
  },
  {
    title: "Tailoring",
    items: ["Expert alterations"],
  },
] as const

export const perks = [
  {
    title: "Free pick-up and delivery",
    body: "For local businesses. Call and we'll set up a route that suits your schedule.",
  },
  {
    title: "Free laundry bag",
    body: "Fill it at home, drop it at the counter, pick it up clean.",
  },
  {
    title: "10% off for seniors",
    body: "For customers 60 years young and up, on every order.",
  },
] as const

export const timeline = [
  {
    year: "1926",
    text: "Troy Shuman opens Shuman's Pressing Club, later Shuman's Cleaners and Dyers. Clothes are cleaned in gasoline and hung under a tree in the yard to dry.",
  },
  {
    year: "1950s",
    text: "The business moves into downtown Vidalia, where it thrives for years.",
  },
  {
    year: "1974",
    text: "A move to the edge of town. People said customers would never drive that far. Troy's son Felton proved them wrong.",
  },
  {
    year: "1977",
    text: "Felton's daughter Sherry, who worked the plant after school, makes dry cleaning her career.",
  },
  {
    year: "1984",
    text: "A second plant opens with an alterations department. Later, Sherry's sister Phyllis, a fashion design graduate, runs alterations at a new drop-off store in Lyons.",
  },
  {
    year: "2002",
    text: "Highway widening brings the plant back downtown, refitted with a new J&T dry cleaning machine and Hoffman press.",
  },
  {
    year: "Today",
    text: "Sherry runs the business, three generations on from the pressing club.",
  },
] as const
