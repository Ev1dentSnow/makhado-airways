"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ModeToggle() {
	const { theme, setTheme } = useTheme();
   
	const changeTheme = () => {
		if (theme === "dark") {
			setTheme("light")
		}
		else {
			setTheme("dark");
		}
	}

	return (

		<Button variant="outline" size="icon" onClick={changeTheme}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>

	);
}