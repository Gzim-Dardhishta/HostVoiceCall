const CarouselIndicators = ({ slider, currentIndex, switchIndex }) => {
    return (
      <div className="phone-carousel-indicators">
        {slider.map((_, index) => (
          <button
            className={`carousel-indicator-item${currentIndex === index ? 'active' : ''}`}
            onClick={() => switchIndex(index)}
          ></button>
        ))}
      </div>
    );
  };
  
  export default CarouselIndicators;