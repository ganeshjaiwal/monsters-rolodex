import "./card-list.style.css";
import Card from "../card/card.component";

// const CardList = (props) => { // Can be done like this
// const { filteredMonsters } = props;
const CardList = ({ filteredMonsters }) => (
  <div className="card-list">
    {filteredMonsters.map((monster, index) => {
      const { name, id, email } = monster;
      return <Card name={name} id={id} email={email} key={id}></Card>;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { filteredMonsters } = this.props;
//     return (
//       <div className="card-list">
//         {filteredMonsters.map((monster, index) => {
//           const { name, id, email } = monster;
//           return <Card name={name} id={id} email={email}></Card>;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
