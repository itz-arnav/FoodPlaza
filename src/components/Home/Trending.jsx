import React, { useRef } from 'react';
import css from "../../styles/Home/Trending.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Home/slickOptions.css";
import Noodle from "/noodles.png";
import Chicken from "/chicken.png";
import Salad from "/salad.png";

import { FaAngleLeft , FaAngleRight } from 'react-icons/fa6';


const Trending = () => {

  const sliderRef = useRef();

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    // autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className={css.trendingContainer}>
        <div className={css.trendingTitleSection}>
          <div className={css.trendingLargeTitle}>Trending Recipes</div>
          <div className={css.trendingSmallText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>

        <div className={css.trendingCardSection}>

        <button
          className={css.arrowBtn + ' ' + css.prev}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaAngleLeft />
        </button>

          <Slider {...settings} ref={sliderRef} className={css.slider}>
            <div className={css.sliderCard}>
              <img src={Noodle} alt="" className={css.sliderImg}/>
              <div className={css.sliderTitleText}>Noodles</div>
              <div className={css.sliderTextDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</div>
            </div>
            <div className={css.sliderCard}>
              <img src={Chicken} alt="" className={css.sliderImg}/>
              <div className={css.sliderTitleText}>Chicken</div>
              <div className={css.sliderTextDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</div>
            </div>
            <div className={css.sliderCard}>
              <img src={Salad} alt="" className={css.sliderImg}/>
              <div className={css.sliderTitleText}>Salad</div>
              <div className={css.sliderTextDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</div>
            </div>
            <div className={css.sliderCard}>
              <img src={Noodle} alt="" className={css.sliderImg}/>
              <div className={css.sliderTitleText}>Noodles</div>
              <div className={css.sliderTextDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</div>
            </div>
            <div className={css.sliderCard}>
              <img src={Salad} alt="" className={css.sliderImg}/>
              <div className={css.sliderTitleText}>Salad</div>
              <div className={css.sliderTextDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</div>
            </div>
            <div className={css.sliderCard}>
              <img src={Noodle} alt="" className={css.sliderImg}/>
              <div className={css.sliderTitleText}>Noodles</div>
              <div className={css.sliderTextDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</div>
            </div>
            <div className={css.sliderCard}>
              <img src={Chicken} alt="" className={css.sliderImg}/>
              <div className={css.sliderTitleText}>Chicken</div>
              <div className={css.sliderTextDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, commodi?</div>
            </div>
          </Slider>

          <button
          className={css.arrowBtn + ' ' + css.next}
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaAngleRight />
        </button>

        </div>

        <div className={css.trendingButton}>Know More</div>
      </div>
    </>
  )
}

export default Trending