import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
//import './App.css';
/*
const state = {
    robots: robots,
    searchfield: ''
}*/
//const App = () => {
    class App extends Component {
        constructor() {
            super()
            this.state = {
                robots: robots,//robots,
                searchfield: ''
            }
            //console.log('constructor');
        }
/*
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
            }
           
           // console.log('componentDidMount');
        }*/

        onSearchChange = (event) => {
            this.setState({ searchfield: event.target.value })
        //console.log(event.target.value);
        //console.log(filteredRobots);
        }

        render() {
            const filteredRobots = this.state.robots.filter(robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })
           // console.log('render');
return (
    <div className="tc">
    <h1 className='f1'>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <CardList robots={filteredRobots}/>
    </div>
);
        }}
   
export default App;


