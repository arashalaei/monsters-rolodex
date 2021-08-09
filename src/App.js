import {Component} from 'react'
import './App.css';
import {CardList} from './components/card-list/CardList.component.jsx'
import {SearchBox} from './components/search-box/SearchBox.component.jsx'
class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
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

  changeHandler = (e) => {
    this.setState({
      searchField: e.target.value.toLowerCase()
    })
  }

  render(){
    const {monsters} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField))
    return (
      <div className="App">
        <SearchBox 
          placeholder = "Monster's name"
          changeHandler = {this.changeHandler}
          />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
