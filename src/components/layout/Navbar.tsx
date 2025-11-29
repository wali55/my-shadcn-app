import { User } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="h-16 border-b px-6 flex items-center justify-between bg-background">
      <h2 className="font-semibold text-lg">Welcome</h2>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">
            <User className="size-4 mr-1" />Profile
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>My account</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
