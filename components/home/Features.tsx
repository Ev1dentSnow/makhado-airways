
import { Award, Landmark, Laptop, RadioTower } from "lucide-react"

export default function Features() {
    return (
        <section className="flex gap-64 pl-24 pr-24 pt-12">
            <div className="flex flex-col justify-center items-center gap-12 min-w-1/3">
                <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[rgba(0,102,168,1)] via-[rgba(77,106,136,1)] to-[rgba(130,179,228,1)]">Crafted to ensure an authentic virtual aviation experience</h2>
                <p className="text-lg">Here, we dont have competition. We operate on a completly different wavelength from the competition, thus we are not the same</p>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 gap-12">
                <div className="flex flex-col gap-6 p-4 rounded-md hover:bg-accent transition-all duration-300">
                    <Laptop size={40} color="rgb(0, 102, 168)" />
                    <h4 className="text-2xl">VA Platform</h4>
                    <p className="text-muted-foreground">
                        The VA platform we use is highly advanced and emphasises the individual. You as the individual are
                        free to decide where to work (OR NOT WORK!), buy your own private aircraft (depending on what license you have), FBOs,
                         freelance... Whatever
                        floats your boat
                    </p>
                </div>
                <div className="flex flex-col gap-6 p-4 rounded-md hover:bg-accent transition-all duration-300">
                    <Landmark size={40} color="rgb(0, 102, 168)" />
                    <h4 className="text-2xl">Finances</h4>
                    <p className="text-muted-foreground">
                        Once you complete a sector, you get paid. You are free to do numerous things with your money, such as donate to your compatriots,
                        invest in assets or let it sit in the bank
                    </p>
                </div>
                <div className="flex flex-col gap-6 p-4 rounded-md hover:bg-accent transition-all duration-300">
                    <RadioTower size={40} color="rgb(0, 102, 168)" />
                    <h4 className="text-2xl">Dispatch</h4>
                    <p className="text-muted-foreground">
                        The VA platform we use is highly advanced and emphasises the individual. You as the individual are
                        free to decide where to work (OR NOT WORK!), buy your own private aircraft (depending on what license you have), FBOs,
                         freelance... Whatever
                        floats your boat
                    </p>
                </div>
                <div className="flex flex-col gap-6 p-4 rounded-md hover:bg-accent transition-all duration-300">
                    <Award size={40} color="rgb(0, 102, 168)" />
                    <h4 className="text-2xl">Seniority System</h4>
                    <p className="text-muted-foreground">
                        Our hour-based seniority system determines how much a pilot gets paid, bonuses and their
                        rank (bragging rights)
                    </p>
                </div>
            </div>
        </section>
    )
}