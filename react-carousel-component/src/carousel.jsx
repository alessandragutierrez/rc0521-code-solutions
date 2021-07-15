import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageId: this.props.images[0].id
    };
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleProgressDotClick = this.handleProgressDotClick.bind(this);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.handleRightArrowClick(), 3000);
  }

  handleLeftArrowClick() {
    let currentIndex = this.props.images.findIndex(element => element.id === this.state.currentImageId);
    if (currentIndex === 0) {
      currentIndex = this.props.images.length;
    }
    this.setState({ currentImageId: this.props.images[currentIndex - 1].id });
  }

  handleRightArrowClick() {
    let currentIndex = this.props.images.findIndex(element => element.id === this.state.currentImageId);
    if (currentIndex === this.props.images.length - 1) {
      currentIndex = -1;
    }
    this.setState({ currentImageId: this.props.images[currentIndex + 1].id });
  }

  handleProgressDotClick(imageId) {
    this.setState({ currentImageId: imageId });
  }

  renderImages() {
    const images = this.props.images;
    return (
      images.map(image =>
        <img key={image.id} src={image.url} className={
          this.state.currentImageId === image.id
            ? 'image-show'
            : 'image-hide'
        }/>
      )
    );
  }

  renderProgressDots() {
    const images = this.props.images;
    return (
      images.map(image =>
        <i key={image.id} onClick={() => this.handleProgressDotClick(image.id)} className={
          this.state.currentImageId === image.id
            ? 'fas fa-circle progress-dot'
            : 'far fa-circle progress-dot'
        }></i>
      )
    );
  }

  render() {
    this.resetInterval();
    const images = this.renderImages();
    const progressDots = this.renderProgressDots();
    return (
      <div className="container">
        <div className="carousel-container row">
          <div onClick={this.handleLeftArrowClick} className="fas fa-chevron-left arrow column arrow-left"></div>
          <div className="column">
            <div className="image-container">
              {images}
            </div>
            <div className="progress-dot-container">
              {progressDots}
            </div>
          </div>
          <div onClick={this.handleRightArrowClick} className="fas fa-chevron-right arrow column arrow-right"></div>
        </div>
      </div>
    );
  }
}

export default Carousel;
