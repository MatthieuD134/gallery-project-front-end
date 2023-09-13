"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <Button onClick={handleChangeTheme}>Switch Theme</Button>;
}
