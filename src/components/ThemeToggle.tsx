import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="w-10 h-10 hover:bg-muted transition-colors duration-300"
    >
      {theme === "light" ? (
        <Sun className="h-4 w-4  sm:hidden rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="h-4 w-4 sm:hidden rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}

      <span
        aria-label="Toggle theme"
        className="lg:inline-block pl-100 font-bold"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
