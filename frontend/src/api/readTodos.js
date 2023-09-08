const API_URL = "http://localhost:4000";

export const readTodos = async () => {
    try {
        // fetch the data from this endpoint 
        // your backend server is running on port 4000
        // from your routes>items.js 
        // this request is for the 'getTodos' controller
        let response = await fetch(`${API_URL}/todos/items`);

        // Check if the response is okay (status code 200)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // convert to json()
        let data = await response.json();

        // return the data collect from fetch 
        return data;

    } catch (error) {
        console.error('There was a problem fetching the todos:', error.message);
        return []; // return an empty array if there's an error, or handle this differently based on your needs.
    }
}

export default readTodos