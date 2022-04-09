import React from 'react'
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControlls";
import "./Carousel.scss";
import useWindowDimensions from "./UseWindowDimensions";
import {BussinesContactCards} from '../data';

function Carousel() {

    const { width, height } = useWindowDimensions();
    const [currentSlide, setCurrentSlide] = useState(0);

    const prev = () => {
        const index = currentSlide > 0 ? currentSlide - 1 : BussinesContactCards.length - 1;
        setCurrentSlide(index);
    };
    const next = () => {
        const index = currentSlide < BussinesContactCards.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    };

    return (
        <div>
            <div className="carousel">
                <div
                    className="carousel-inner"
                    style={
                        width > 1068
                            ? { transform: `translateX(${-currentSlide * 20}%)` }
                            : width < 1068 && width >= 462
                            ? { transform: `translateX(${-currentSlide * 50}%)` }
                            : { transform: `translateX(${-currentSlide * 100}%)` }
                    }
                >
                    <div className="carousel-item">
                        {BussinesContactCards.map((BussinesContactCards, i) => {
                            return <CarouselItem BussinesContactCards={BussinesContactCards} key={i} />;
                        })}
                    </div>
                </div>
            </div>
            <CarouselControls prev={prev} next={next} />
        </div>
    )
}

export default Carousel