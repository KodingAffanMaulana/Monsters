import { Component } from "react"
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this

    const filterMonsters = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <h1 className="app-title">Monsters Affan</h1>

        <SearchBox
          className="search-box"
          placeholder="search monster"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
