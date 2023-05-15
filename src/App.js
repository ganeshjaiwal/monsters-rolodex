import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("Render Called");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    // On search field change
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="Search Monster"
        inputChangeHandler={onSearchChange}
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("http://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log("Monsters: ", this.state.monsters);
//           }
//         );
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value;
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // <button onClick={() => {this.setState(this.state.name == 'Ganesh' ? {name: 'Ashu'} : {name: 'Ganesh'})}}>Change Name</button>

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     // Filter the monster array
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monster-search-box"
//           placeholder="Search Monster"
//           inputChangeHandler={onSearchChange}
//         />
//         <CardList filteredMonsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
