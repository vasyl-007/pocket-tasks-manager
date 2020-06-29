import React, { Component } from "react";
import "./SearchPanel.css";

export default class SearchPanel extends Component {
  state = {
    searchTask: "",
  };
  onSearchChange = (e) => {
    this.setState({
      searchTask: e.target.value,
    });
    this.props.onFilterTodos(this.state.searchTask);
  };
  render() {
    const { searchTask } = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search a task"
        onChange={this.onSearchChange}
        value={searchTask}
      />
    );
  }
}
