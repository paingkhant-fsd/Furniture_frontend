import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import NewsLetterForm from "@/components/new-letters";  

function Footer() {
  return <footer className="w-full border-t ml-4 lg:ml-0">
    <div className="mx-auto container pb-8 pt-6 lg:py-6">
        <section className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20 ">
            <section>
                <Link to="/" className="flex items-center space-x-2">
                <div className="size-6" aria-hidden="true">
                  <Icons.logo />
                </div>
                <span className="font-bold">{siteConfig.title}</span>
                <span className="sr-only">Home</span>
                </Link>
            </section>
            <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">{siteConfig.footerNav.map((foot) => (
              <div key={foot.title} className="space-y-2">
                <h4 className="font-medium">{foot.title}</h4>
                <ul className="">
                  {foot.items.map((item) => (

                  <li key={item.title} className="text-sm">
                    <Link to={item.href} target={item.external ? "_blank" : undefined} className="text-muted-foreground text-sm hover:text-primary">
                    {item.title}
                    <span className="sr-only">{item.title}</span>
                    </Link>
                  </li>
                  ))}
                </ul>
              </div>
            ))}</section>
          <section className="">
            <h4 className="font-medium">Subscribe to our newsletter</h4>
            <NewsLetterForm />
          </section>
        </section>
    </div>
  </footer>;
}

export default Footer;
