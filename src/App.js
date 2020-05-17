import React,{Component} from 'react';
import './App.css';
import  {Footer} from './components/footer/footer.component';
import { SearchBox } from './components/search-box/search-box-component';
import { CardList } from './components/card-list/card-list-component';

class App extends Component{
  constructor()
    {
      super();
      this.state={
        monsters:[],
        searchField:""
      };
    }
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  .then(users=> this.setState({monsters:users}));
}
  render(){
    const{monsters,searchField}= this.state;
    const flterMonster= monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
          <div className="App">
           <h1 className="title">Monsters App </h1>
           <SearchBox
           handleChange= {e=> this.setState({searchField:e.target.value})}
           />
          <CardList monsters={flterMonster}/>
          <Footer/>
          </div>
        );
      }
}

export default App;
