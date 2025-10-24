"use client";
import { Button } from "@/components/ui/button.jsx";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
 const{setTheme}=useTheme();
  return (
    <div>
    <h2>This is temporary set up for app</h2>
    <Button>Use</Button>
    <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
    <Button onClick={() => setTheme('light')}>Light Mode</Button>
    </div>
  );
}
