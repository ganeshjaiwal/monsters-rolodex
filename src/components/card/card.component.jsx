import "./card.style.css";

const Card = ({ name, email, id }) => (
  <div className="card-container" key={id}>
    <img
      alt={`Monster ${name}`}
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

// class Card extends Component {
//   render() {
//     const { name, email, id } = this.props;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`Monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
