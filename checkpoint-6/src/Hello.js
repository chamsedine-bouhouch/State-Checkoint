import React from "react";
export default class Hello extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      alert("Hello Visitor");
    }, 2000);
  }
  componentWillUnmount() {
    alert("Goodbye");
  }
  render() {
    return <div></div>;
  }
}
