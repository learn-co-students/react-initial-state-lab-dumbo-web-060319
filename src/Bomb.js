import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        console.log(props.initialCount)
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }   

    countDown = () => {
        if (this.state.secondsLeft === 0){
            return 'Boom!'
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render() {

        return(
            <div>
                {this.countDown()}
            </div>
        )
    }
}