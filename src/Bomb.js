// your Bomb code here!

import React from "react"

export default class Bomb extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state = 
        {
            secondsLeft: this.props.initialCount
        }
    }

    calculateTime = () => 
    {
        let time = this.state.secondsLeft; 
        if (time == 0)
        {
            return "Boom!"
        }
        else 
        {
            return `${time} seconds left before I go boom!`
        }
    }

    render() 
    {
        // let calculateTime = () => 
        // {
        //     let time = this.state.secondsLeft; 
        //     if (time == 0)
        //     {
        //         return "Boom!"
        //     }
        //     else 
        //     {
        //         return `${time} seconds left before I go boom!`
        //     }
        // }
        return (
            this.calculateTime()
        )
    }
}