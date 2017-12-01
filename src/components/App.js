import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    alert('constructor')
  }
  componentWillReceiveProps(nextProps, nextState){
    alert('componentWillReceiveProps');
  }
  componentWillMount(){
    alert('componentWillMount');
  }
  componentDidMount(){
    alert('componentDidMount');
  }
  componentWillUpdate(){
    alert('componentWillUpdate');
  }
  componentDidUpdate(){
    alert('componentDidUpdate');
  }
  shouldComponentUpdate(){
    alert('shouldComponentUpdate');
  }

  render() {
    alert('App render')
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

export default App;