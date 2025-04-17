// Importing gallery images
import galleryImg01 from "../images/gallery-01.jpg";
import galleryImg02 from "../images/gallery-02.jpg";
import galleryImg03 from "../images/gallery-03.jpg";
import galleryImg04 from "../images/gallery-04.jpg";
import galleryImg05 from "../images/gallery-05.jpg";
import galleryImg06 from "../images/gallery-06.jpg";
import galleryImg07 from "../images/gallery-07.jpg";

// Destination data array
const destination = [
  {
    "id": 1,
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    address: 'somewhere',
    price: 99,
    maxGroupSize: 10,
    desc: "A historic bridge spanning the River Thames in London, offering breathtaking views of the city skyline.",
    reviews: [{ name: "John Doe", rating: 4.6 }],
    avgRating: 4.5,
    photo: galleryImg01, // Updated image reference
    featured: true,
  },
  {
    "id": 2,
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: 'somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Experience the rich culture, stunning beaches, and lush rice terraces of Bali.",
    reviews: [{ name: "Alice Smith", rating: 4.8 }],
    avgRating: 4.7,
    photo: galleryImg02, // Updated image reference
    featured: true,
  },
  {
    "id": 3,
    title: "Island Paradise, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'somewhere',
    price: 129,
    maxGroupSize: 6,
    desc: "Escape to the scenic snowy mountains of Thailand, a rare and breathtaking sight.",
    reviews: [{ name: "Emily Johnson", rating: 4.7 }],
    avgRating: 4.6,
    photo: galleryImg03, // Updated image reference
    featured: true,
  },
  {
    "id": 4,
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'somewhere',
    price: 110,
    maxGroupSize: 8,
    desc: "Witness the mesmerizing sunrise in Thailand, a view that captivates travelers from all over the world.",
    reviews: [{ name: "Michael Brown", rating: 4.5 }],
    avgRating: 4.5,
    photo: galleryImg04, // Updated image reference
    featured: true,
  },
  {
    "id": 5,
    title: "Nusa Penida, Bali",
    city: "Indonesia",
    distance: 500,
    address: 'somewhere',
    price: 150,
    maxGroupSize: 5,
    desc: "Explore the untouched beauty of Nusa Penida, with its crystal-clear waters and dramatic cliffs.",
    reviews: [{ name: "Sophia Wilson", rating: 4.9 }],
    avgRating: 4.8,
    photo: galleryImg05, // Updated image reference
    featured: false,
  },
  {
    "id": 6,
    title: "Cherry Blossoms Spring, Japan",
    city: "Japan",
    distance: 600,
    address: 'somewhere',
    price: 120,
    maxGroupSize: 7,
    desc: "Experience the magical cherry blossoms in full bloom during springtime in Japan.",
    reviews: [{ name: "Daniel Lee", rating: 4.8 }],
    avgRating: 4.7,
    photo: galleryImg06, // Updated image reference
    featured: false,
  },
  {
    "id": 7,
    title: "Holmen Lofoten, Norway",
    city: "Norway",
    distance: 700,
    address: 'somewhere',
    price: 180,
    maxGroupSize: 6,
    desc: "A scenic paradise in Norway, perfect for those who love Arctic landscapes and outdoor adventures.",
    reviews: [{ name: "Olivia Martin", rating: 4.9 }],
    avgRating: 4.8,
    photo: galleryImg07, // Updated image reference
    featured: false,
  },
  
];

export default destination;