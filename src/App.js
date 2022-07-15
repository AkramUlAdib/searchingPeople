import React, { Component } from 'react';
import CardList from './CardList'
import { people } from './people';
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            people: people,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filteredPeople = this.state.people.filter(people => {
            return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>PEOPLES</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList people={filteredPeople}/>
            </div>
            
        )
    }
}

export default App;
