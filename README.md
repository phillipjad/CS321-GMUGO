# CS321-GMUGO

1. fetchExternalEvents(apiUrl)

Functionality: Part of "Searching for activities around GMU." This method is responsible for fetching events or activities from an external API.


2. fetchInternalActivity(activityId)

Functionality: Also falls under "Searching for activities around GMU." It's responsible for fetching specific activity details stored internally (e.g., in your database).

3. addInternalActivity(activityData)
Functionality: This would be used internally, mainly for administrative purposes, to add or update activities in your database. It might not map directly to one of your high-level functionalities but is essential for managing your data.


4. getAvailableDiscounts(activityId)

Functionality: "Showcasing available discounts." As the name suggests, this method fetches available discounts for a specific activity.

5. integrateData(externalData, internalData)

Functionality: This is more of a helper/utility function. Its primary role is to merge data from external APIs with your internal database, ensuring a seamless user experience. It can be used in conjunction with "Searching for activities around GMU."
