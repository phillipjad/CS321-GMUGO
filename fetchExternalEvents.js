const axios = require('axios');

/**
 * Fetches event data from an external API.
 * 
 * @param {string} apiUrl - The URL of the external API.
 * @returns {Array} - An array of event objects.
 */
async function fetchExternalEvents(apiUrl) {
    try {
        // Make a GET request to the external API.
        const response = await axios.get(apiUrl);

        // Extract the event data from the response.
        const eventData = response.data;

        return eventData;
    } catch (error) {
        // Handle any errors that may occur during the API request.
        console.error(`Error fetching external events: ${error}`);
        throw error; 
    }
}
