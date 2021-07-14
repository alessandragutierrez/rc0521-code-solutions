import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }

  renderImages() {
    const images = this.props.images;
    return (
      images.map(image =>
        <img key={image.id} src={image.url}/>
      )
    );
  }

  render() {
    const images = this.renderImages();
    return (
      <div>{images}</div>
    );
  }
}

export default Carousel;
