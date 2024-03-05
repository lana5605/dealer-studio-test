import './CardBody.scss';

function CardBody(props) {
  return <div className="CardBody" style={props.style}>{props.children}</div>
}

export default CardBody;


