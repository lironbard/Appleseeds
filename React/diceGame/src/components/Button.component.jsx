const Button = (props) => {
  return <button onClick={props.btnClick}>{props.textValue}</button>;
};

export default Button;
