import React from "react";

export const withCounter = (Component) => {
  return class Hoc extends React.Component {
    state = {
      count: 0,
    };
    // some logic
    render() {
      return <Component {...this.state} {...this.props} />;
    }
  };
};
