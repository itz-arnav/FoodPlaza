import React from 'react'
import css from "../../styles/Home/Hero.module.css"
import FoodImage from "/foodhero.png"

const Hero = () => {
    return (
        <>
            <div className={css.heroSectionWrapper}>

                <div className={css.heroSectionContainer}>
                    <div className={css.heroLeft}>
                        <div className={css.smallTopText}>We provide only the best food out there!</div>
                        <div className={css.largeCatchText}>Unlock <span className={css.redText}>Culinary</span> Adventures</div>
                        <div className={css.smallTextWrapper}>
                            <div className={css.smallTextDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sunt velit beatae minus animi voluptas inventore dolor nulla excepturi eveniet mollitia, nobis consequatur error nostrum, neque sit enim. Nisi, consectetur!</div>
                        </div>
                        <div className={css.buttonSection}>
                            <div className={css.orderNowButton}>Order Now</div>
                            <div className={css.findRestaurantsButton}>Find Restaurants</div>
                        </div>
                    </div>
                    <div className={css.heroRight}>
                        <img src={FoodImage} alt="Hero Food Image" className={css.heroImage} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero