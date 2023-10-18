async function saveItinerary(userId, itineraryObj) {
    try {
        const response = await fetch('/saveItinerary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, itinerary: itineraryObj }),
        });

        const data = await response.json();

        if (response.ok) {
            return data.message;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        console.error('Error saving itinerary:', error);
        return 'Failed to save itinerary. Please try again.';
    }
}

// Example usage:
saveItinerary('someUserId', { location: 'Paris', activities: ['Eiffel Tower', 'Louvre Museum'] })
    .then(message => console.log(message))
    .catch(error => console.error(error));
