import "./search-box.style.css";

const SearchBox = (props) => (
  <input
    type="search"
    placeholder={props.placeholder}
    className={`search-box ${props.className}`}
    onChange={props.inputChangeHandler}
  />
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         type="search"
//         placeholder={this.props.placeholder}
//         className={`search-box ${this.props.className}`}
//         onChange={this.props.inputChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
