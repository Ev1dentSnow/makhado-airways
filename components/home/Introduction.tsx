
export default function Introduction() {
    return (
        <div className="flex flex-col gap-16 sm:max-w-1/2">
            <div className="flex flex-col gap-y-6">
                <h2 className="text-4xl">Who are we?</h2>
                <p className="text-xl text-muted-foreground">
                    Makhado Airways Virtual Airline is the busiest Virtual Airline in South Africa operating on the VATSIM Network.
                    We comprise of a diverse group of people from all walks of life, united by a common passion
                </p>
            </div>

            <div className="flex flex-col gap-y-6">
                <h2 className="text-4xl">What do we do?</h2>
                <p className="text-xl text-muted-foreground">
                    We simulate &apos;as real as it gets&apos; airline operations on the Fly The World VA platform.
                    If you're familiar with the Sub Saharan region on VATSIM you&apos;ve probably heard or seen the MAW | Makhado 
                    callsign at some point
                </p>
            </div>

            <div className="flex flex-col gap-y-6">
                <h2 className="text-4xl">How does one join?</h2>
                <p className="text-xl text-muted-foreground">
                    Simply head over to the getting started page to begin our onboarding process. For more information about us, keep scrolling!
                </p>
            </div>
        </div>
    )
}