import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Component2 = () => {
  return (
    <div className="p-10 space-y-8">
      <div className="max-w-sm space-y-2">
        <h2 className="font-semibold text-lg">Role selection</h2>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="investor">Investor</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Actions</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Button
        onClick={() =>
          toast("Action completed", {
            description: "Your settings have been saved.",
          })
        }
      >
        Show toast
      </Button>
    </div>
  );
};

export default Component2;
