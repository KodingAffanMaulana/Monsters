import { Component } from "react"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => { console.log(this.state) }
        )))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.monsters.map((monster, index) => {
            return (
              <div>
                <h1 key={index}>{monster.name}</h1>
              </div>
            )
          })}
        </header>
      </div>
    );
  }
}

export default App;
