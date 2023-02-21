// App - компонент
import React from "react"

const Header = (props: any) => {
    console.log(props)
    return (
        <h1>{props.title}</h1>
    )
}
const TodoList = () => (
    <ul>
        <li>Learn React</li>
        <li>Execute Task</li>
        <AddTasks />
    </ul>)

const AddTasks = () => {
    return (
        <>
            <li>asd</li>
            <li>asd</li>
        </>
    )
}

// JSX - компоненты
// JSX - элементы
const App = () => {

    const welcomeText = "Hello Human!";

    const isLogin = false;

    return (
        <div>
            <Header title={welcomeText} isBoolean />
            <h2>
                {isLogin ? welcomeText : 'Login please!'}
            </h2>
            {isLogin && <h3>{welcomeText}</h3>}
            <TodoList />
        </div>
    )
}

export default App;