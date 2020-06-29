import React, { Component } from "react";
import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    const { value } = e.target;
    this.setState({
      label: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    const { label } = this.state;
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Add new task"
          value={label}
        />
        <button className="btn btn-outline-secondary">Add task</button>
      </form>
    );
  }
}
