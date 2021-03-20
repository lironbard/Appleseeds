// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//-----11.2 Check Box-----\\
//We want to render 4 checkboxes and make 2 of them checked by default.

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckedDefault: this.props.initial_value,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ isCheckedDefault: event.target.checked });
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.onChange} checked={this.state.isCheckedDefault}></input>
        <label>{this.props.text}</label>
      </div>
    );
  }
}

function render() {
  ReactDOM.render(
    <div>
      <Checkbox initial_value={false} text="I read the terms" />
      <Checkbox initial_value={false} text="I accept the terms" />
      <Checkbox initial_value={true} text="I want to get weekly newsletter" />
      <Checkbox initial_value={true} text="I want to get sales and marketing offers" />
    </div>,
    document.querySelector("#root")
  );
}

render();
