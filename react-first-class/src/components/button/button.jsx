import './button.css';

function Button(props) {
  return (
    <div>
        <button onClick={props.onClick}>
            {props.label}
        </button>
        <p>Button color: {props.color}</p>

    </div>
  )
}

export default Button
