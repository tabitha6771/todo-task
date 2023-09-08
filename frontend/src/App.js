import Navbar from "./components/Navbar"
import {useState} from "react"
import { readTodos } from "./api/readTodos"
import AddTodo from "./pages/AddTodo"
import Home from "./pages/Home"
import EditTodo from "./pages/EditTodo"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
const [todos, setTodos] = useState ('')

const handler = async () => {
let data = await readTodos()
setTodos(data.todos)
}

  return (
    <div>
      <BrowserRouter>
        <h1>To do List</h1>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/add-todo"
            element={<AddTodo />}
          />
          <Route
            // dynamic :id to create custom route
            path= '/todos/:id'
            element={<EditTodo />}
          />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App