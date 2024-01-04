import React, { Component } from 'react'
import '../App.css'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter : 0
      }
    }
    adder(){
        this.setState({
           counter:this.state.counter+1
            
        })
        console.log(this)
    }
    subract (){
        this.setState({
            counter:this.state.counter-1
        })
        
    }
    reset (){
        this.setState({
            counter:0
        })
    }
  render() {
    return (
      <div id='parent'>
        <h1>Counter App</h1>
        <h3>{this.state.counter}</h3>
        <div id='button_div'>
            <button onClick={this.adder.bind(this)}>+</button>
            <button onClick={this.subract.bind(this)}>-</button>
            <button  onClick={this.reset.bind(this)}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Content