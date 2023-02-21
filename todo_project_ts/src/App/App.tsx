// App - компонент
import React from "react"
import { TodoList, Header } from "../components"

// JSX - компоненты
// JSX - элементы
const App = () => {

    return (
        <div>
            <Header title="Todo App" />
            <TodoList />
        </div>
    )
}

export default App;