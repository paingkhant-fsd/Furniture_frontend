import { Link } from "react-router-dom";
import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  //CardAction,
  //CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/components/layouts/Footer";
import { Icons } from "@/components/icons";

function Error() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="mx-auto my-32 flex flex-1 items-center">
        <Card className="w-87.5 md:w-125 lg:w-125">
          <CardHeader className="flex flex-col items-center text-center">
            <CardTitle>Oops!</CardTitle>
            <div className="border-muted-foreground/70 my-4 grid size-24 shrink-0 place-items-center rounded-full border border-dashed">
              <Icons.exclamation
                className="text-muted-foreground/70 size-10"
                aria-hidden="true"
              />
            </div>
            <CardDescription className="flex flex-col gap-1">
              <span>An error has occurred.</span>
              <span>Please try again later.</span>
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button variant="outline" asChild>
              <Link to="/">Go back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
