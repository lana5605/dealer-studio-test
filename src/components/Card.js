import './Card.scss';

function Card(props) {
  return (
    <div data-testid={props.testid} className={props.isSelected ? "Card CardOutline" : "Card"} style={props.style}>
      {props.children}
    </div>
  );
}

export default Card;