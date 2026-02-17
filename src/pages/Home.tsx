import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import couch from "@/data/images/couch.png";
import CarouselCard from "@/components/products/CarouselCard";
import { products } from "@/data/products";

function Home() {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-col lg:justify-between lg:flex-row">
        {/* Text Section */}
        <div className="my-8 lg:mb-0 lg:mt-20 text-center lg:text-left lg:w-2/5">
          <h1 className="text-4xl font-extrabold mb-4 lg:mb-8 text-own lg:text-6xl">Modern Interior Design Studio</h1>
          <p className="mb-6 lg:mb-8 text-own">
            Furniuture is an essential component of any living space, providing
            functionality comfort and aesthetic appeal.
          </p>
          <div>
            <Button asChild className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold">
              <Link to="">Shop Now</Link>
            </Button>
            <Button asChild variant="outline"className="rounded-ful px-8 py-6 text-base text-own">
              <Link to="">Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image Section */} 
        <img src={couch} alt="couch" className="w-full lg:w-3/5" />
      </div>
        <CarouselCard products={products} />
    </div>
  );
}

export default Home;
