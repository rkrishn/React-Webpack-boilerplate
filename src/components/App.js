import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    //alert('constructor')
    this.state={
      helloText:"Helllo"
    };
    this.cclick = this.cclick.bind(this);
  }
  //  componentWillReceiveProps(nextProps, nextState){
  //   alert('componentWillReceiveProps');
  // }
  // componentWillMount(){
  //   alert('componentWillMount');
  // }
  // componentDidMount(){
  //   alert('componentDidMount');
  // }
  // componentWillUpdate(){
  //   alert('componentWillUpdate');
  // }
  // componentDidUpdate(){
  //   alert('componentDidUpdate');
  // }
  //shouldComponentUpdate(){
    //alert('shouldComponentUpdate');
 // }

  cclick=()=>{
    this.setState({
      helloText:"bujji"
    });
  }

  render() {
    //alert('App render')
      return <h1 onClick={this.cclick}>{this.state.helloText}, {this.props.name}</h1>;
    }
  }

export default App;