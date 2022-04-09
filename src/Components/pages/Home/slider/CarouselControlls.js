
import React from "react";
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'

const CarouselControls = ({ prev, next }) => {
  return (
    <div>
      <button className="carusel-control leftt" onClick={prev}><HiChevronLeft /></button>
      <button className="carusel-control rightt" onClick={next}><HiChevronRight /></button>
    </div>
  );
};

export default CarouselControls;