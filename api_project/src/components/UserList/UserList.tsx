import React, { Component } from 'react'
import apiClient from '../../common/api'
import { IUser } from '../../common/models'

interface IUserListState {
    users: IUser[]
}

export default class UserList extends Component {

    state: IUserListState = {
        users: [],
    }

    getUsers = async () => {
        const res = await apiClient.get<IUser[]>('/users')
        this.setState({ users: res.data })
    }

    componentDidMount() {
        this.getUsers()
    }

    // componentDidUpdate(prevProps: any, prevState: any) {
    //     if (prevState.userId !== this.state.userId) {
    //         this.setState({
    //             loader: true
    //         })
    //         this.getUsers(this.state.userId)
    //     }
    // }

    // componentWillUnmount() {
    //     // clearInterval()
    //     // removeEventListener()
    // }

    // ErrorBoundry
    // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        
    // }

    render() {
        return (
            <div>
                {this.state.users.map(user => <p key={user.id}>{user.name}</p>)}
            </div>
        )
    }
}