import logo from "./logo.svg"
import "./App.css"
import React from "react"
import CardList from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  handleChange =(e) => {
    this.setState({searchField: e.target.value})
  }
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsteres = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="Search Monsters"
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsteres} />
      </div>
    )
  }
}

export default App
