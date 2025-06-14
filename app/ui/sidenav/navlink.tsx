"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/", icon: ""},
    { name: "About", href: "/about", icon: ""}
    //{ name: "", href: "", icon: ""}
];

export default function NavLinks(){
  const pathname = usePathname();
  return (
    <>
      {links.map((link) =>{
        return (
          <Link
            key = {link.name}
            href = {link.href}
            className="mt-2 flex h-[48px] grow items-center justify-center gap-[10px] rounded-md bg-gray-200 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
