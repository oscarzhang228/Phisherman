import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

type Link = {
  label: string;
  path: string;
};
const LINKS = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
];
export default function Navbar() {
  return (
    <NavigationMenu className="bg-[#0a0a0a] min-w-screen position-fixed justify-start items-start py-7 px-[7rem] font-[Space Grotesk] text-white">
      <NavigationMenuList className="flex gap-[3rem] ">
        {LINKS.map((link) => {
          return (
            <NavigationMenuItem>
              <Link to={link.path}>
                <p className="text-lg">{link.label}</p>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
