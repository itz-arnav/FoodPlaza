import React from 'react'
import css from "../../styles/Home/Contact.module.css"
import Icecream from "/icecream.avif"

const Contact = () => {
    return (
        <>
            <div className={css.contactWrapper}>
                <div className={css.contactSection}>
                    <div className={css.leftSection}>
                        <img src={Icecream} alt="" className={css.imageLeft}/>
                    </div>
                    <div className={css.rightSection}>
                        <div className={css.rightTitle}>Subscribe to our Newsletter and get <span className={css.redText}>15% off</span></div>
                        <div className={css.rightDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est sapiente?</div>

                        <div className={css.submitSection}>
                            <input type="text" className={css.submitEmail} placeholder='Enter Your Email Address'/>
                            <button className={css.submitButton}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact