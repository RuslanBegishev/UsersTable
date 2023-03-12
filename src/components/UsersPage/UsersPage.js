import React from 'react';

import CardList from "../CardList/CardList";
import '../../App.css';

export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?per_page=12')
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    users: result.data,
                    isLoading: false
                });
            })
    }

    renderUsers() {
        if (this.state.users.length) {
            return <CardList userList={this.state.users}/>
        }
    }

    render() {
        return (
            <div className="App1">
                <h1>Список пользователей</h1>
                {this.state.isLoading
                    ? <div>Загрузка...</div>
                    :  this.renderUsers()
                }
            </div>
        );
    }
}
