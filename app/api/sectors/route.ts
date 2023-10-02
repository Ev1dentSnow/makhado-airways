
export async function GET(request: Request) {
    const response = await fetch("https://api.ftw-sim.net/v1/airline/logbook", {
        headers: {
            "readaccesskey": process.env.FTW_AIRLINE_API_KEY!
        },
    });

    if (!response.ok) {
        return Response.json({ error: "Bad response from FTW airline logbook API route" }, { status: response.status });
    }

    const data = await response.json();
    return Response.json(data);
}