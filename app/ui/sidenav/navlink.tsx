
import Link from "next/link";
import { HomeIcon, IdentificationIcon, RectangleStackIcon, CubeTransparentIcon, PhotoIcon} from '@heroicons/react/24/outline';

const links = [
    { name: "Home", href: "/", icon: HomeIcon},
    { name: "About", href: "/about", icon: IdentificationIcon},
    { name: "Gallery", href: "/gallery", icon: PhotoIcon},
    { name: "Projects", href: "/projects", icon: CubeTransparentIcon},
];

export default function NavLinks(){
  return (
    <>
      {links.map((link) =>{
        const Icon = link.icon;
        return (
          <Link
            key = {link.name}
            href = {link.href}
            className="mt-2 flex h-[48px] grow items-center justify-center gap-[10px] rounded-md bg-gray-200 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <Icon className="w-6 h-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
