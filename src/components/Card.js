import './Card.scss';

function Card(props) {
  return (
    <div className={props.isSelected ? "Card CardOutline" : "Card"} style={props.style}>
      {props.children}
    </div>
  );
}

export default Card;