import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  //arrow function to fix the `this` context
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index //+ for converting str to int
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {this.props.media.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo.large}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo.large}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
            // Could have this run correctly, but just leaving it here for now.
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
