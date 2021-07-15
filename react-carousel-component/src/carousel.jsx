import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageId: this.props.images[0].id
    };
    this.handleClick = this.handleClick.bind(this);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.handleRightArrowClick(), 3000);
  }

  handleClick(event) {
    return (
      event.target.className.includes('arrow-left')
        ? this.handleLeftArrowClick()
        : event.target.className.includes('arrow-right')
          ? this.handleRightArrowClick()
          : event.target.className.includes('progress-dot')
            ? this.handleProgressDotClick()
            : null
    );
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

  handleProgressDotClick() {
    const targetIndex = this.props.images.findIndex(element => element.id === event.target.id);
    this.setState({ currentImageId: this.props.images[targetIndex].id });
  }

  renderImages() {
    const images = this.props.images;
    return (
      images.map(image =>
        <img key={image.id} src={image.url} id={image.id} className={
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
        <i key={image.id} onClick={this.handleClick} id={image.id} className={
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
          <div onClick={this.handleClick} className="fas fa-chevron-left arrow column arrow-left"></div>
          <div className="column">
            <div className="image-container">
              {images}
            </div>
            <div className="progress-dot-container">
              {progressDots}
            </div>
          </div>
          <div onClick={this.handleClick} className="fas fa-chevron-right arrow column arrow-right"></div>
        </div>
      </div>
    );
  }
}

export default Carousel;
