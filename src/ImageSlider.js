import React, { Component } from 'react';

export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    // generateCurrentSlide = () => {
    //     <CURRENT_SLIDE> = 
    // }

    render() {

        return(
            <div>
                {`I am on slide ${this.state.currentSlideIndex}`}
            </div>
        )
    }
}