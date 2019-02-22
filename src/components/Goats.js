import React, { Component } from "react";

class Goats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      list: [
        "NBA: Michael Jordan",
        "NFL: Tom Brady",
        "MLB: Babe Ruth",
        "NHL: Wayne Getzky",
        "Golf: Jack Nicklaus",
        "Tennis: Roger Federer"
      ]
    };
  }
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    this.setState(state => {
      const list = [...state.list, state.value];

      return {
        list,
        value: ""
      };
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <div key={item}>{item}</div>
          ))}
        </ul>

        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeValue}
        />
        <button
          type="button"
          onClick={this.onAddItem}
          disabled={!this.state.value}
        >
          Add
        </button>

        <button type="button" onClick={this.onResetArray}>
          Reset Array
        </button>
      </div>
    );
  }
}

export default Goats;
