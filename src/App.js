import React from "react"
import TodoItem from "./TodoItems"
import todosData from "./todosData"

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App