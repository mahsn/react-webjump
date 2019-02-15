import React, {Component} from 'react';
import Search from './Search.js'
import './App.css';
import List from "./List";

class App extends Component {

    state = {
        repositories: []
    };

    setRepositories = repositories => {
        this.setState({repositories});
    };

    render() {
        return (
            <div className="App">
                <Search setRepositories={this.setRepositories}/>
                <List repositories={this.state.repositories}/>
            </div>
        );
    }
}

export default App;
