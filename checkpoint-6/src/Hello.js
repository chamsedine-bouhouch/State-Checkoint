import React from "react";
export default class Hello extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      alert("Hello Visitor");
    }, 2000);
  }
  componentWillUnmount() {
    window.addEventListener("beforeunload", event => {
      event.returnValue = `Goodbye`;
    });
  }
  render() {
    return <div></div>;
  }
}
