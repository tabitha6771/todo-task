import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo";

const Home = () => {
    const [todos, setTodos] = useState([])


    const deleteHandler = async (todo) => {
        let response = await deleteTodo(todo)
        console.log(response)
      
    }
    useEffect(() => {
        const fetchTodos = async () => {
            let data = await readTodos()
            setTodos(data.todos)
            
        }
        fetchTodos()
    }, [])

    
    return (
        <div>
            <h1>I'm Home</h1>
            {todos ?
                <>
                    {todos.map((item) => {
                        return <h3>{item.text}</h3>
                    })}
                </>
                :
                <p>loading...</p>
            }
        </div>
    )
}

export default Home