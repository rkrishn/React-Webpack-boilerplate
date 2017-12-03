import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    //alert('constructor')
    this.state={
      helloText:"Hello",
      colorVal:"ff0000",
      inputVal:'Hello'
    };
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

 onChange=(e)=>{
    this.setState({
      inputVal:e.target.value,
      helloText:e.target.value
    });
  }

  onColorChange=(e)=>{
    document.querySelectorAll("body")[0].style.backgroundColor = e.target.value;
    this.setState({
      colorVal:e.target.value
    });
  }

  render() {
    //alert('App render')
      return (
        <div>
          <input type='text' value={this.state.inputVal} onChange={this.onChange} placeholder={this.state.helloText} />
          <h1>{this.state.helloText}, {this.props.data.text}</h1>
          <input type='color' onChange={this.onColorChange} value={this.state.colorVal}/>
        </div>
      );
    }
  }

export default App;