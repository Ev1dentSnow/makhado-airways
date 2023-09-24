"use client";

import Link from "next/link";

import { 
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuLink,
	navigationMenuTriggerStyle
} from "./ui/navigation-menu";

export default function Navigation() {
	return(
		<NavigationMenu className="bg-white">
			<NavigationMenuList className="bg-white">
				<NavigationMenuItem className="bg-white">
					<Link href="getting-started" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Getting Started
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
            
		
	);
}