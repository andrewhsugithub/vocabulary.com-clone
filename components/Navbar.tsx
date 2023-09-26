import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Menu from "./ui/Menu";
import Tabs from "./Tabs";

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 bg-zinc-700 py-2 lg:py-4 z-10">
      <div className="container max-sm:px-2 max-w-7xl grid grid-rows-2 gap-y-4 grid-cols-2 lg:grid-cols-4 lg:grid-rows-1">
        {/* logo */}
        <Link href="/" title="logo" className="self-center">
          <Image src={logo} alt="vocabulary.com logo" height={24} />
        </Link>
        {/* tabs, client components */}
        <Tabs />
        {/* auth */}
        <div className="order-2 flex gap-4 items-center place-self-end text-center">
          <Link
            href="/log-in"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "max-lg:p-2 text-xs lg:text-base"
            )}
          >
            Log In
          </Link>
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ size: "sm" }),
              "max-lg:p-2 bg-green-500 text-white hover:bg-green-600 text-[0.75rem] lg:text-base"
            )}
          >
            Sign Up
          </Link>
          {/*Todo: Make this into a client component*/}
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
