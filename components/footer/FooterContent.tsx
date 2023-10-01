import Image from "next/image";
import VATSIMLogo from "../../public/VATSIMLogo.png";
import VATSSALogo from "../../public/VATSSALogo.png";

export default function FooterContent() {
    return (
        <div className="flex flex-col gap-6 items-center pt-6 bg-black">
            <div>
                <h5>Disclaimer: Makhado Airways is a virtual airline for flight simulators only. We do not exist in the real world</h5>
            </div>
            <div>
                <h5 className="text-2xl">Our Partners</h5>
            </div>
            <div className="flex gap-12">
                <Image 
                    src={VATSIMLogo}
                    alt="VATSIM Network Logo"
                    width={256}
                />
                <Image 
                    src={VATSSALogo}
                    alt="VATSSA Logo"
                    width={256}
                />
            </div>
        

        </div>
    )
}