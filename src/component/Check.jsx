import React, { Component } from 'react';
 class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state={name:"hello"}

      this.setState({
        name: 'kkkk'
      });
    }

  render() {
    return <div>{this.state.name} </div>
  }
}
export default Hello