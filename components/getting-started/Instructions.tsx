import { Button } from "../ui/button";
import { BsDiscord } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi"
import Link from "next/link";


export default function Instructions() {
    return (
        <section className="w-screen h-fit flex flex-col items-center sm:items-strech gap-16 pt-24 pb-32 px-4">
            <div className="flex flex-col items-center gap-8 pb-6">
                <h1 className="text-6xl font-semibold text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(0,102,168,1)] via-[rgba(77,106,136,1)] to-[rgba(130,179,228,1)]">
                        Makhado Airways </span>
                        Virtual Airline Onboarding
                </h1>
                <p className="text-2xl text-muted-foreground text-center px-6">
                    We are currently accepting applications and can&apos;t wait to meet you!
                    To get started, there are 3 simple steps
                </p>
            </div>
            <div className="min-w-full px-6 lg:px-64 flex flex-col gap-8">
                <h2 className="text-4xl font-semibold">Step 1 | Apply</h2>
                <p className="text-muted-foreground">
                    Join our Discord server and take some time to introduce yourself.<br/><br/>
                    We're hyped to get to know you and find out if you're a good fit for our
                    virtual airline.<br/><br/>Here we can also render assistance with the onboarding
                    process if you require any
                </p>
                <Button asChild className="h-14 w-88 lg:w-1/2 bg-[#5865F2]" variant="outline">
                    <Link href="https://discord.gg/2XsyUuE9tr" target="_blank" className="text-lg 2xl:text-xl">
                    <BsDiscord size={20} className="mr-2" />
                        Join our Discord server
                    <BiLinkExternal size={20} className="ml-2" />
                    </Link>
                </Button>
            </div>
            <div className="min-w-full px-6 lg:px-64 flex flex-col gap-6">
                <h2 className="text-4xl font-semibold">Step 2 | Account Creation</h2>
                <p className="text-muted-foreground">
                    Head over to the FlyTheWorld website and click sign up.<br/><br/>
                    You will be directed to a page which will show you the two-step process 
                    of creating a FlyTheWorld account.<br/><br/> The website might be in 
                    german, but you can translate it to English by right clicking on the
                    page and clicking "Translate to English"
                </p>

                    <Button asChild className="h-14 w-88 lg:w-1/2 bg-primary" variant="outline">
                    <Link href="https://www.ftw-sim.de/" target="_blank" className="text-lg 2xl:text-xl">
                        FlyTheWorld VA Platform Website
                    <BiLinkExternal size={20} className="ml-2" />
                    </Link>
                </Button>

            </div>
            <div className="min-w-full px-6 lg:px-64  flex flex-col gap-6">
                <h2 className="text-4xl font-semibold">Step 3 | Joining The Pilot Roster</h2>
                <p className="text-muted-foreground">
                    Keep monitoring your Aiena e.V forum account for the notification stating that
                    your FTW account has been activated.<br/><br/>When your account has been activated,
                    you will be able to login on the actual FTW website and access your profile.<br/><br/>
                    To join the airline, simply request to be added as a crew member on our discord server
                </p>
            </div>
        </section>
    )
}