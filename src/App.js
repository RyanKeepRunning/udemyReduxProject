import React, { Component } from 'react';
import Frame from './containers/Frame/Frame';
import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  state={
    products:[],
    isLoading:true,
  }
  componentDidMount(){
      setTimeout(()=>{
        console.log('props change')
          this.setState({products:['Placeholder1','Placeholder2'],isLoading:false})
      },3000)
  }
  render() {
    return (
      <div className="App">
        <Frame products={this.state.products} height={123} isLoading={this.state.isLoading}/>
        <br/>
       <Counter />
      </div>
    );
  }
}

export default App;
