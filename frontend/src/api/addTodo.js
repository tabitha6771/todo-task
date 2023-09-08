const API_URL = `http://localhost:4000`;

export const addTodo = async (todo) => {
   
    let obj = { text: todo }

    const response = await fetch(`${API_URL}/todos/item`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    
    const json = await response.json();

    return json;
}
