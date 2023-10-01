import Image from "next/image"
import CallToActionBackground from "../../public/CallToActionBackground.png";
import { Button } from "../ui/button";


export default function CallToAction() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="h-[60vh] w-full relative">
            <Image 
                src={CallToActionBackground}
                alt="Call to action section background"
                className="-z-10 object-cover object-top"
                fill
            />
            </div>
            <div className="absolute flex flex-col items-center justify-center gap-12">
                <h4 className="text-6xl font-bold">Heard enough?</h4>
                <Button className="bg-foreground w-full h-12 text-xl">Join The Crew</Button>
            </div>
        </section>
    )
}