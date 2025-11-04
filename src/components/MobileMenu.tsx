import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  apps: Array<{ title: string; id: string }>;
}

const MobileMenu = ({ apps }: MobileMenuProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-8">
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <span className="text-sm font-medium">Theme</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* App Links */}
          <div className="space-y-2">
            {apps.map((app) => (
              <Button
                key={app.id}
                variant="ghost"
                className="w-full justify-start text-left"
                asChild
              >
                <Link to={`/app/${app.id}`}>
                  {app.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
