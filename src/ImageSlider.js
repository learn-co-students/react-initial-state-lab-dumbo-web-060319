import React from 'react'


class ImageSlider extends React.Component {
    state = {
      currentSlideIndex: 0
    }


  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div>
          I am on slide { this.state.currentSlideIndex }
      </div>
    );
  }
}

export default ImageSlider;
