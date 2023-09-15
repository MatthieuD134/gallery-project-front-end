"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <Button onClick={handleChangeTheme}>Switch Theme</Button>;
}
