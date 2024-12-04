"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
  { name: "post", href: "/blog" },
  { name: "about", href: "/about" },
];
const localePathList = ["/about"];

const Header = () => {
  const pathname = usePathname();

  const isLocation = localePathList.some((path) => pathname.startsWith(path));

  console.log(isLocation, navList);
  return (
    <header className="flex mt-10 mb-5 md:mb-10 items-center">
      <div className="flex align-center w-full">
        <span className="text-md md:text-[19px] whitespace-nowrap font-bold">
          <a>DEV-RIM</a>
        </span>
        <nav className="font-medium text-xs grow justify-end items-center flex gap-1 md:gap-[6px]">
          <div className="">
            {navList.map((navItem) => (
              <Link
                href={navItem.href}
                key={navItem.name}
                className={cn(
                  "transotion-[background-color] rounded-lg p-2 inline-flex",
                  pathname.startsWith(navItem.href)
                    ? "underline text-[17.5px] text-sky-950 font-bold cursor-default"
                    : "text-[16px] text-gray-600 font-semibold hover:bg-gray-200 active:bg-gray-300"
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
