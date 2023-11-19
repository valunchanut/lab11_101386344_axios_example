import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class PersonList extends Component {
    //Define state default values
    state = {
        persons: []
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    render() {
        return (
            <div>
                {this.state.persons.map(person => <UserCard key={person.login.uuid} person={person} />)}
            </div>
        );
    }
}

export default PersonList;
