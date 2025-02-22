import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import logoSrc from "@/assets/logo.png";
import titleSrc from "@/assets/Title.png";

type Link = {
  label: string;
  path: string;
};
const LINKS = [
  { label: "Home", path: "/" },
  { label: "Solutions", path: "/solution" },
];
export default function Navbar() {
  return (
    <NavigationMenu className="position-fixed items-start py-7 px-[7rem]">
      <NavigationMenuList className="flex gap-[3rem] ">
        <NavigationMenuItem className="flex items-center gap-2">
          <img src={logoSrc} />
          <img src={titleSrc} />
        </NavigationMenuItem>
        {LINKS.map((link) => {
          return (
            <NavigationMenuItem>
              <Link to={link.path}>
                <p className="text-primary text-lg">{link.label}</p>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
