import './App.css';
import CardList from "./components/CardList/CardList";
import React from 'react';

export default class App1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?per_page=12')
            .then((response) => response.json())
            .then((result) => {
                this.setState({users: result.data});
            })
    }

    renderUsers() {
        if (this.state.users.length) {
            return <CardList userList={this.state.users}/>
        }

        return <div>Загрузка...</div>
    }

    render() {
        return (
            <div className="App1">
                <h1>Список пользователей</h1>

                {this.renderUsers()}
            </div>
        );
    }
}
