// const TodoListItem = (props: { text: string }) => {

//     return (
//         <li>{props.text}</li>
//     )
// }

// export default TodoListItem;

import React, { Component } from 'react';
import { ITodo } from '../../types';
import './TodoListItem.css'

// Mutable(мутабельность) - изменение 
// state - незименяемый (inmutable)

interface ITodoListItemState {
    done: boolean
    important: boolean
}

interface ITodoListItemProps extends ITodo {
    onDoneClick: () => void
}

export default class TodoListItem extends Component<ITodoListItemProps, ITodoListItemState> {

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
        //@ts-ignore
        this.setState((state) => {
            //@ts-ignore
            return {
                [nameState]: !state[nameState]
            }
        })
    }

    render() {
        const { text, done, important } = this.props;

        let classNames = '';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        return (
            <li className={classNames}>
                {text}
                <button onClick={this.props.onDoneClick}>Done</button>
                <button onClick={() => this.onChangeState('important')}>Important</button>
            </li>
        )
    }
}