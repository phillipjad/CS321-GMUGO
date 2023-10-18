async function fetchTransportOptions(fromLocation, toLocation) {
    
    const apiUrl = "https://example.com/api/transportation";

    const params = new URLSearchParams({ from: fromLocation, to: toLocation });

    try {
        const response = await fetch(`${apiUrl}?${params.toString()}`);

        if (response.status === 200) {
            const transportOptions = await response.json(); 
            return transportOptions;
        } else {
            console.log(`Failed to fetch transportation options. Status code: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    return [];
}

// Example usage:
const fromLocation = "GMU";
const toLocation = "Activity Location 1";

fetchTransportOptions(fromLocation, toLocation)
    .then((transportOptions) => {
        // Process the retrieved transport options
        for (const option of transportOptions) {
            console.log("Transportation Method:", option.method);
            console.log("Estimated Time:", option.estimated_time);
            console.log("Estimated Cost:", option.estimated_cost);
            console.log("\n");
        }
    });
