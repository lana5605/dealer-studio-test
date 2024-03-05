import './Button.scss';

function Button(props) {
  return (
    <div data-testid={props.testid} className={props.slim ? "Button Slim" : "Button"} onClick={props.onClick}>{props.buttonText}</div>
  )
}

export default Button;