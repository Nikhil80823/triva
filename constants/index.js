const allPlaces = [
  {
    id: 1,
    name: "Kashmir",
    image: "../src/assets/hero/kashmir2.jpg",
    title: `Walk through Kashmir's meadows, lakes, and timeless beauty.`
  },
  {
    id: 2,
    name: "Ladakh",
    image: "../src/assets/hero/ladakh.jpg",
    title: `Where rugged mountains meet timeless adventure`
  },
  {
    id: 3,
    name: "Himachal",
    image: "../src/assets/hero/Himachal.jpg",
    title: "Where misty mountains and soulful trails await."
  },
  {
    id: 4,
    name: "Tungnath",
    image: "../src/assets/hero/tungnath.jpg",
    title: "Walk above the clouds on the sacred trails of Tungnath."
  }
]

const ALL_TREKS = [
  {
    id:         1,
    name:       "Kashmir Great Lakes",
    location:   "Kashmir, India",
    image:      "../src/assets/treks/greatKashmirlakes.webp",
    price:      12999,
    duration:   "7 Days",
    difficulty: "Moderate",
    rating:     4.8,
    reviews:    324,
    description: "Journey through alpine meadows, crystal-clear glacial lakes, and snow-clad Himalayan peaks that redefine natural beauty"
  },
  {
    id:         2,
    name:       "Chadar Frozen River",
    location:   "Ladakh, India",
    image:      "../src/assets/treks/ladakhTrek.webp",
    price:      18500,
    duration:   "9 Days",
    difficulty: "Hard",
    rating:     4.9,
    reviews:    198,
    description: "The Chadar Trek is a thrilling adventure that tests endurance while offering one of the most unique trekking experiences in the Himalayas."
  },
  {
    id:         3,
    name:       "Triund Trek",
    location:   "Himachal, India",
    image:      "../src/assets/treks/triund.jpg",
    price:      7999,
    duration:   "6 Days",
    difficulty: "Easy",
    rating:     4.7,
    reviews:    512,
    description: "Trek through lush forests and scenic ridgelines to reach Triund’s stunning meadow overlooking the mighty Dhauladhar range."
  },
  {
    id:         4,
    name:       "Tungnath Chandrashila",
    location:   "Uttarakhand, India",
    image:      "../src/assets/treks/tungathTrek.jpg",
    price:      9500,
    duration:   "5 Days",
    difficulty: "Moderate",
    rating:     4.6,
    reviews:    287,
    description: "Hike through alpine meadows and rhododendron forests to reach Tungnath, the highest Shiva temple in the world."
  },
];


const DIFFICULTY_CONFIG = {
  Easy:     { color: "#4ade80", bg: "rgba(74,  222, 128, 0.12)" },
  Moderate: { color: "#fb923c", bg: "rgba(251, 146, 60,  0.12)" },
  Hard:     { color: "#f87171", bg: "rgba(248, 113, 113, 0.12)" },
  Expert:   { color: "#c084fc", bg: "rgba(192, 132, 252, 0.12)" },
};

const itineraryData = [
  {
    day: "Day 1",
    title: "Arrival & Acclimatization",
    desc: "Reach base camp, meet trek leaders and enjoy a short acclimatization walk."
  },
  {
    day: "Day 2",
    title: "Trek to First Campsite",
    desc: "Walk through pine forests and cross scenic streams to reach the first campsite."
  },
  {
    day: "Day 3",
    title: "High Altitude Meadows",
    desc: "Gradual climb to breathtaking alpine meadows with panoramic mountain views."
  },
  {
    day: "Day 4",
    title: "Summit / Lake Visit",
    desc: "Early morning push to the summit or glacial lake followed by descent."
  },
  {
    day: "Day 5",
    title: "Return & Departure",
    desc: "Descend to base village and depart with unforgettable memories."
  }
];
export {
  allPlaces,
  ALL_TREKS,
  DIFFICULTY_CONFIG,
  itineraryData,
}