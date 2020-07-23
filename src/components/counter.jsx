import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //   };

  //   handleIncrement = () => {
  //     this.setState({ value: this.props.counter.value + 1 });
  //   };

  //   deleteIncrement = () => {
  //     this.setState({ value: this.state.value - 1 });
  //   };

  formatCount = () => {
    const { value: count } = this.props;
    return count === 0 ? "ZERO" : count;
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
            disabled={this.props.value === 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBatchClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
