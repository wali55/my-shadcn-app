import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Component4 = () => {
  return (
    <nav className="w-full px-6 py-4 bg-background border-b flex items-center justify-between">
      <h2 className="text-xl font-semibold">Welcome</h2>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>

            <NavigationMenuContent>
              <div className="w-48">
                <NavigationMenuLink href="/dashboard">
                  Dashboard
                </NavigationMenuLink>
                <NavigationMenuLink href="/dashboard">
                  Pricing
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>

            <NavigationMenuContent>
              <div className="w-48">
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink> 
                <NavigationMenuLink href="/products">All Users</NavigationMenuLink> 
                <NavigationMenuLink href="/products">All Brands</NavigationMenuLink> 
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-3">
        <Button variant="outline">Login</Button>

        <Avatar>
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Component4;
