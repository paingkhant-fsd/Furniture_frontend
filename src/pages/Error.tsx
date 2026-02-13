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

function Error() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4">
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <CardHeader>
            <CardTitle className="text-center">Oops</CardTitle>
            <CardDescription className="text-center">
              An error has occurred. Please try again later.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button variant="outline" asChild>
              <Link to="/">Go back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

export default Error;
