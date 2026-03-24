// Add these imports at the top
import kashmir from "../src/assets/hero/kashmir2.jpg";
import ladakh from "../src/assets/hero/ladakh.jpg";
import himachal from "../src/assets/hero/Himachal.jpg";
import tungnath from "../src/assets/hero/tungnath.jpg";

import greatLakes from "../src/assets/treks/greatKashmirlakes.webp";
import ladakhTrek from "../src/assets/treks/ladakhTrek.webp";
import triund from "../src/assets/treks/triund.jpg";
import tungnathTrek from "../src/assets/treks/tungathTrek.jpg";
const allPlaces = [
  {
    id: 1,
    name: "Kashmir",
    image: kashmir,
    title: `Walk through Kashmir's meadows, lakes, and timeless beauty.`
  },
  {
    id: 2,
    name: "Ladakh",
    image: ladakh,
    title: `Where rugged mountains meet timeless adventure`
  },
  {
    id: 3,
    name: "Himachal",
    image: himachal,
    title: "Where misty mountains and soulful trails await."
  },
  {
    id: 4,
    name: "Tungnath",
    image: tungnath,
    title: "Walk above the clouds on the sacred trails of Tungnath."
  }
]

const ALL_TREKS = [
  {
    id:         1,
    name:       "Kashmir Great Lakes",
    location:   "Kashmir, India",
    image:      greatLakes,
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
    image:      ladakhTrek,
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
    image:      triund,
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
    image:      tungnathTrek,
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
const reasons = [
  {
    icon: "🧭",
    title: "Expert Local Guides",
    desc: "Our guides are born and raised in the mountains. They know every trail, every weather pattern, every hidden viewpoint that no map shows.",
  },
  {
    icon: "🛡️",
    title: "Safety First, Always",
    desc: "Certified first-aid teams, satellite communication, acclimatization protocols, and emergency evacuation plans on every trek.",
  },
  {
    icon: "🌿",
    title: "Responsible Trekking",
    desc: "Leave No Trace principles on every route. We support local communities, hire local staff, and actively restore mountain ecosystems.",
  },
  {
    icon: "🎒",
    title: "All-Inclusive Packages",
    desc: "Gear rental, meals, permits, transport, accommodation — every detail is handled. You just show up and trek.",
  },
  {
    icon: "👥",
    title: "Small Group Sizes",
    desc: "Maximum 12 trekkers per group. More personal attention, lighter environmental footprint, and a deeper connection with the mountains.",
  },
  {
    icon: "⭐",
    title: "4.9★ Rated Experience",
    desc: "Over 1,200 trekkers have trusted us. Our reviews speak for themselves — consistently rated the best trekking operator in the region.",
  },
];
const testimonialsData = [
  {
    name: "Arjun Mehta",
    location: "Mumbai, India",
    trek: "Kashmir Great Lakes",
    rating: 5,
    text: "Absolutely life-changing. The guides knew every trail, every hidden camp spot. Waking up to those alpine lakes at sunrise — I still can't believe it was real. Trekora made every detail seamless.",
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    trek: "Chadar Trek",
    rating: 5,
    text: "Walking on a frozen river in -20°C sounds crazy — and it is, beautifully so. The team handled everything from gear to acclimatization. I felt safe the entire time. Will be booking again.",
    initials: "PS",
  },
  {
    name: "Rohit Nair",
    location: "Bangalore, India",
    trek: "Triund Trek",
    rating: 4,
    text: "Perfect first trek. Not too hard, incredibly rewarding. The views of the Dhauladhar range from the top are something no photograph can capture. The crew was warm, knowledgeable, and fun.",
    initials: "RN",
  },
  {
    name: "Sneha Kapoor",
    location: "Pune, India",
    trek: "Tungnath Trek",
    rating: 5,
    text: "Tungnath in autumn is a dream — red and gold everywhere. Trekora's small group format meant it felt personal, never crowded. The storytelling around the campfire was the highlight of my trip.",
    initials: "SK",
  },
  {
    name: "Vikram Bose",
    location: "Kolkata, India",
    trek: "Valley of Flowers",
    rating: 5,
    text: "I've done treks with three different operators. Trekora is in a different league. The logistics, the food, the guides — everything was exceptional. Already planning my next trip with them.",
    initials: "VB",
  },
];

const faqs = [
  {
    q: "Do I need prior trekking experience?",
    a: "It depends on the trek. We have routes for complete beginners (Triund, Tungnath) all the way to advanced multi-day expeditions (Chadar, Kashmir Great Lakes). Each trek page clearly lists the fitness level required. Our team also helps you choose the right trek based on your experience.",
  },
  {
    q: "What is included in the package price?",
    a: "All our packages include experienced guides, porters, all meals during the trek, camping equipment (tents, sleeping bags, mats), necessary permits and fees, and basic first-aid support. Transport from the nearest major city is included in most packages — check individual trek pages for details.",
  },
  {
    q: "How do I prepare physically for a trek?",
    a: "We recommend starting preparation 4–6 weeks before your trek. Focus on cardio (running, cycling, swimming) 3–4 times a week, stair climbing with a weighted backpack, and leg-strengthening exercises. We send all booked trekkers a detailed preparation guide after booking.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "Cancellations made 30+ days before the trek receive a full refund. 15–29 days: 75% refund. 7–14 days: 50% refund. Less than 7 days: no refund. In case of cancellations due to extreme weather or natural events, we offer a full credit towards any future trek valid for 12 months.",
  },
  {
    q: "Is altitude sickness a concern? How do you handle it?",
    a: "Altitude sickness is real and we take it seriously. Our guides are trained in altitude illness recognition and management. All high-altitude treks include mandatory acclimatization days. We carry supplemental oxygen and medications on every high-altitude expedition, and our protocols follow Wilderness Medicine guidelines.",
  },
  {
    q: "What should I pack? Is gear rental available?",
    a: "We provide a detailed packing list after booking. Essential personal items include warm layers, waterproof jacket, trekking boots, and sunscreen. We offer gear rental (trekking poles, crampons, gaiters, high-altitude sleeping bags) at reasonable rates — ideal if you're trying trekking for the first time.",
  },
  {
    q: "Are solo travellers welcome?",
    a: "Absolutely. A large portion of our trekkers are solo adventurers. Our small group format (max 12 people) means you'll quickly feel part of a community. Many of our solo trekkers end up making lifelong friends on the trail.",
  },
];



export {
  allPlaces,
  ALL_TREKS,
  DIFFICULTY_CONFIG,
  itineraryData,
  reasons,
  testimonialsData,
  faqs
}