import { Award, Landmark, Laptop, RadioTower, CheckCircle, Construction } from "lucide-react"

export default function Features() {

    const theme = "dark";

    const setFeatureIconColor = () => {
        if (theme === "dark") {
            return "hsl(222.2 84% 4.9%)"
        }
        else {
            // dark background color
            return "white"
        }
    }

    return (
        <section className="flex flex-col xl:flex-row gap-24 xl:gap-48 px-12 sm:px-24 pt-12 pb-12">
            <div className="flex flex-col justify-center items-center gap-8 min-w-1/3 lg:max-w-3/4 xl:max-w-none">
                <h2 className="text-5xl font-bold">Crafted to ensure an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(0,102,168,1)] via-[rgba(77,106,136,1)] to-[rgba(130,179,228,1)]">authentic virtual aviation experience</span></h2>
                <p className="text-lg">Here, we dont have competition. We operate on a completly different wavelength from the competition, thus we are not the same</p>
            </div>

            <div className="grid grid-rows-2 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6 p-4 rounded-md shadow-2xl hover:bg-accent transition-all duration-300">
                    <div className="w-fit rounded-md p-2 bg-[rgba(130,179,228,1)] border-white">
                        <Laptop size={40} color={setFeatureIconColor()} />
                    </div>
                    <h4 className="text-2xl">FTW VA Platform</h4>
                    <p className="text-muted-foreground">
                        The cutting edge platform incomparable to anything else currently available
                    </p>
                    <span className="w-24 h-0.5 bg-foreground rounded-sm"></span>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle width={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Aircraft orders, wet and dry leasing</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle width={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Fuel costs, maintenance costs, and realistic maintenance system</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle width={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Seasonal variations on passenger and cargo demand per destination</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 p-4 rounded-md shadow-2xl hover:bg-accent transition-all duration-300">
                    <div className="w-fit rounded-md p-2 bg-[rgba(130,179,228,1)] border-white">
                        <Landmark size={40} color={setFeatureIconColor()} />
                    </div>
                    <h4 className="text-2xl">Finances</h4>
                    <p className="text-muted-foreground">
                        Your bank account belongs to YOU
                    </p>
                    <span className="w-24 h-0.5 bg-foreground rounded-sm"></span>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle width={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Fully feautured banking system</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle size={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Transfer funds to other users or companies</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle size={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Invest in FBOs, private aircraft, or other assets</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 p-4 rounded-md shadow-2xl hover:bg-accent transition-all duration-300">
                    <div className="w-fit rounded-md p-2 bg-[rgba(130,179,228,1)] border-white">
                        <RadioTower size={40} color={setFeatureIconColor()} />
                    </div>
                    <h4 className="text-2xl">Dispatch</h4>
                    <p className="text-muted-foreground">
                        Realism-centric dispatch environment
                    </p>
                    <span className="w-24 h-0.5 bg-foreground rounded-sm"></span>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle size={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Realistic flight planning tools</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle size={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Dispatch team on hand to handle passenger and cargo loading</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <Construction size={20} color="#FF8800"/>
                        </div>
                        <p className="text-muted-foreground">Integrated dispatch environment (coming soon)</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6 p-4 rounded-md shadow-2xl hover:bg-accent transition-all duration-300">
                    <div className="w-fit rounded-md p-2 bg-[rgba(130,179,228,1)] border-white">
                        <Award size={40} color={setFeatureIconColor()} />
                    </div>
                    <h4 className="text-2xl">Seniority System</h4>
                    <p className="text-muted-foreground">
                        Hour based seniority system (not just for bragging rights)
                    </p>
                    <span className="w-24 h-0.5 bg-foreground rounded-sm"></span>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle size={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Hierarchy ranging from trainee to senior captain</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle size={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Determines pay and bonuses</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <CheckCircle size={20} color="#00C851"/>
                        </div>
                        <p className="text-muted-foreground">Upon becoming an instructor, one can assist with proficiency checks on line pilots</p>
                    </div>
                </div>
            </div>
        </section>
    )
}