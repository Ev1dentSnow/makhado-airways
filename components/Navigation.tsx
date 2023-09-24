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
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
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