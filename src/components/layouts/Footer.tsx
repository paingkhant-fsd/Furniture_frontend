import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

function Footer() {
  return <footer className="w-full border-t ">
    <div className="mx-auto container ">
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-20 ">
            <section>
                <Link to="/" className="flex items-center space-x-2">
                <div className="size-6" aria-hidden="true">
                  <Icons.logo />
                </div>
                <span className="font-bold">{siteConfig.title}</span>
                <span className="sr-only">Home</span>
                </Link>
            </section>
            <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">Loop Menu</section>
        </section>
    </div>
  </footer>;
}

export default Footer;
