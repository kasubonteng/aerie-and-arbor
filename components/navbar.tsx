import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex min-h-12 w-full items-center border-b border-white bg-gray-900/50 backdrop-blur-lg sm:block">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="hidden sm:block">
          <h1 className="font-monoton text-2xl">Aeris & Arbor</h1>
        </Link>
        <ul className="hidden gap-4 font-geist-mono sm:flex">
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="mr-4 flex items-center justify-center hover:bg-gray-800 sm:hidden"
            size={"icon"}
            variant={"ghost"}
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"} className="bg-gray-800">
          <div className="container mx-auto p-4">
            <Link href="/">
              <h1 className="font-monoton text-2xl">Aeris & Arbor</h1>
            </Link>
            <ul className="mt-10 flex flex-col gap-8 font-geist-mono">
              <li>
                <Link href="#gallery">Gallery</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
