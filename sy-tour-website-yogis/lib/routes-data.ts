export interface Route {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  cities: string[];
  description: string;
  image: string;
  imageAlt: string;
  accentColor: string;
}

export const routes: Route[] = [
  {
    id: 1,
    name: "West Coast",
    slug: "west-coast",
    tagline: "Pacific to the Prairies",
    cities: ["Victoria", "Kelowna", "Kamloops", "Edmonton", "Calgary"],
    description:
      "Beginning at the Pacific shore and journeying through British Columbia into Alberta — forests, mountains, and the vibrations of the West.",
    image: "/rockies.jpg",
    imageAlt: "Rocky Mountains, British Columbia, Canada",
    accentColor: "#3eccb5",
  },
  {
    id: 2,
    name: "Prairies",
    slug: "prairies",
    tagline: "Big Skies, Open Hearts",
    cities: ["Winnipeg", "Saskatoon", "Regina", "Lethbridge"],
    description:
      "Crossing the vast interior of Canada — under immense skies and golden horizons, vibrating the heart of the nation.",
    image: "/buffalo.avif",
    imageAlt: "Buffalo on the Canadian Prairies",
    accentColor: "#c9933a",
  },
  {
    id: 3,
    name: "Great Lakes",
    slug: "great-lakes",
    tagline: "Ontario's Shores & Cities",
    cities: ["Thunder Bay", "Sudbury", "Ottawa", "Toronto"],
    description:
      "Following the shores of the Great Lakes through Ontario — from smaller communities to the final Mega Program in Toronto.",
    image: "/niagra.jpg",
    imageAlt: "Niagara Falls, Ontario, Canada",
    accentColor: "#c084a5",
  },
  {
    id: 4,
    name: "Maritimes",
    slug: "maritimes",
    tagline: "East Coast Rising",
    cities: ["Halifax", "Moncton", "Fredericton", "Quebec City", "Montréal"],
    description:
      "From the Atlantic shores through the eastern provinces — bringing vibrations to the coastlines and awakening the East.",
    image: "/big-maritime.jpg",
    imageAlt: "Lighthouse on the Maritime coast, Atlantic Canada",
    accentColor: "#3eccb5",
  },
];

export const quotes = [
  {
    text: "…somebody told me that in Canada there is an ocean of seekers, there are many, many seekers here and very true seekers.",
    attribution: "H.H. Shri Mataji Nirmala Devi",
    date: "October 9th, 1981",
    location: "Vancouver, Canada",
  },
  {
    text: "Especially happening of this Kundalini is an extremely easy thing and it works out very fast and in thousands and thousands of people it has worked — and I am sure in Canada it has to work.",
    attribution: "H.H. Shri Mataji Nirmala Devi",
    date: "August 11th, 1990",
    location: "Vancouver, Canada",
  },
  {
    text: "Somehow, it has to go from Canada to America. So, it is going to penetrate via Canada, I think, that side.",
    attribution: "H.H. Shri Mataji Nirmala Devi",
    date: "September 11th, 1992",
    location: "Toronto, Canada",
  },
];
