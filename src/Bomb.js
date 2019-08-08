// your Bomb code here!
import React, { Component } from 'react';


export default class Bomb extends Component{

    state={
        secondsLeft:this.props.initialCount
    }


    renderFunction= () => {
       
        if (this.state.secondsLeft){
            return <p>{`${this.state.secondsLeft} seconds left before I go boom!`}</p>
         }else{
             return <p>Boom!</p>
         }
    }
   render(){
    //    console.log(this.state)
       return (
           <div>{this.renderFunction()}</div>
       )
   }
}