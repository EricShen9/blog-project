import NavLinks from "@/app/ui/sidenav/navlink";

export default function Sidenav(){
  return (
    <div className="flex w-64 shrink-0 bg-gray-100 p-3 hidden md:block">
      <div className="relative flex h-28 grow items-center rounded-2xl bg-gray-200 md:flex-none md:justify-start md:p-2 md:px-3">
        <h2 className= "absolute bottom-0 left-0 text-2xl font-bold p-4">My Blog</h2>
      </div>
      <NavLinks />
    </div>
  );
}
