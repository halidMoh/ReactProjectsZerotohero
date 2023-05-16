
import './App.css';
import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends React.Component 
{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    };
  }
  // feth the json file and then render the data and then in the json there is this array called 
  //users so put the user as the value for monsters and using set state it will render it
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters:users}));
  }
render(){
  const {monsters, searchField} = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    
    <div className="App">
      <SearchBox
      placeholder='search monsters'
      handleChange={e => this.setState({searchField: e.target.value})}/>
      <CardList monsters = {filteredMonsters}/>
  
      
    </div>
  );
}
}
export default App;
