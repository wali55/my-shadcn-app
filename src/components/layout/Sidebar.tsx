import { LayoutDashboard, LogOut, Settings, User } from "lucide-react";
import { Button } from "../ui/button";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen border-r p-4 bg-background relative">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>

      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <LayoutDashboard className="size-4 mr-2" /> Overview
        </Button>

        <Button variant="ghost" className="w-full justify-start">
          <User className="size-4 mr-2" /> Users
        </Button>

        <Button variant="ghost" className="w-full justify-start">
          <Settings className="size-4 mr-2" /> Settings
        </Button>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="destructive" className="w-full">
          <LogOut className="size-4 mr-2" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
