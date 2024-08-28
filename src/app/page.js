import Login from "@pages/LoginPage";
import Signup from "@pages/SignupPage";
import Properties from "@pages/properties";
import CarouselD from "@components/Carousel"; // Make sure this matches the actual component name

const images = [
  {
    src: 'images/carousel/1.png',
    alt: 'House 1',
    label: 'Popular',
    labelClass: 'bg-red-500 text-white',
  },
  {
    src: 'images/carousel/2.png',
    alt: 'House 2',
    label: 'New Listing',
    labelClass: 'bg-blue-500 text-white',
  },
  {
    src: 'images/carousel/3.png',
    alt: 'House 3',
    label: 'Top Location',
    labelClass: 'bg-purple-500 text-white',
  },
  {
    src: 'images/carousel/4.png',
    alt: 'House 4',
    label: 'Best Rated',
    labelClass: 'bg-orange-500 text-white',
  },
  {
    src: 'images/carousel/5.png',
    alt: 'House 5',
    label: 'Discount Price',
    labelClass: 'bg-green-500 text-white',
  },
];

export default function Home() {
  return (
    <main className="app min-h-screen w-full bg-red-500">
      <CarouselD images={images} />
    </main>
  );
}
