export async function GET(request: Request) {
    const response = await fetch("https://api.ftw-sim.net/v1/airline/pilots", {
        next: { revalidate: 600 }, // 600 seconds (10 minutes)
        headers: {
            "readaccesskey": process.env.FTW_AIRLINE_API_KEY!
        },
    });

    if (!response.ok) {
        throw new Error("Error fetching pilot data from FTW")
    }

    const data = await response.json();

    return Response.json(data);
}