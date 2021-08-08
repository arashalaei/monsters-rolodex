import {Component} from 'react'
import './App.css';
import {Card} from './components/card/card.component.jsx'

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: []
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          monsters: users
        })
      })

  }


  render(){
    return (
      <div className="App">
        
        <div className="cards-container">
            {this.state.monsters
              .map(monster => <Card 
                                key   = {monster.id}
                                id    = {monster.id}
                                name  = {monster.name}
                                email = {monster.email}
                              />)}
        </div>
      </div>
    );
  }
}

export default App;
