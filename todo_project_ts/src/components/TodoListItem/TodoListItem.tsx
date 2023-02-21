// const TodoListItem = (props: { text: string }) => {

//     return (
//         <li>{props.text}</li>
//     )
// }

// export default TodoListItem;
import React, { Component } from 'react';

// Mutable(мутабельность) - изменение 
// state - незименяемый (inmutable)

interface ITodoListItemState {
    done: boolean
    important: boolean
}

export default class TodoListItem extends Component<{ text: string }, ITodoListItemState> {

    state = {
        done: false,
        important: false
    }

    onDoneClick = () => {
        console.log('click')
        // this.state.done = !this.state.done;
        // 1. Передаем в setState объект с НОВЫМИ значениями state
        // this.setState({ done: !this.state.done })
        // 2. В setState передаем колбэк в который приходит актуальный state.
        // Используем тогда когда меняем значение, которое ЗАВИСИТ от предыдущего
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }

    onImportantClick = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }

    onChangeState = (nameState: 'done' | 'important') => {
        this.setState((state) => {
            return {
                [nameState]: !state[nameState]
            }
        })
    }

    render() {
        console.log(this)
        const { text } = this.props;
        return (
            <li
                style={{
                    textDecoration: this.state.done ? 'line-through' : 'auto',
                    fontWeight: this.state.important ? 'bold' : 'normal'
                }}
            >
                {text}
                <button onClick={() => this.onChangeState('done')}>Done</button>
                <button onClick={() => this.onChangeState('important')}>Important</button>
            </li>
        )
    }
}