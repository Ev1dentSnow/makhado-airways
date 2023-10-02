import Image from "next/image";
import VATSIMLogo from "../../public/VATSIMLogo.png";
import VATSSALogo from "../../public/VATSSALogo.png";
import FTWLogo from "../../public/FTWLogo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col gap-6 items-center px-16 pt-6 pb-4 bg-background">
            <h6 className="text-2xl">Our Partners</h6>
            <div className="flex gap-12">
                <div>
                    <Link href="https://vatsim.net/" target="_blank">
                        <Image 
                        src={VATSIMLogo}
                        alt="VATSIM Network Logo"
                        width={128}
                        />
                    </Link>
                    </div>
                <div>
                    <Link href="https://vatssa.com/hq/index.php" target="_blank">
                        <Image 
                        src={VATSSALogo}
                        alt="VATSSA Logo"
                        width={128}
                        />
                    </Link>
                </div>
                <div>
                    <Link href="https://www.ftw-sim.de/" target="_blank">
                        <Image
                        src={FTWLogo}
                        alt="FlyTheWorld Virtual Airline Platform Logo"
                        width={64}
                        />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-32">
                <p className="text-muted-foreground">&copy; Makhado Airways Virtual Airline. All Rights Reserved</p>
                <p className="text-muted-foreground">Background images supplied with &#9825; from Skhindi</p>
            </div>
        </div>
    )
}