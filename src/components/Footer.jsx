import React from 'react'
import css from "../styles/Footer.module.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className={css.footerContainer}>
                <div className={css.topFooterPart}></div>
                <hr className={css.footerHR} />
                <div className={css.bottomFooterPart}>
                    <div className={css.leftBottomCopyright}>FoodPlaza @2024 Copyright Reserved</div>
                    <div className={css.socialMediaIcons}>
                        <div className={css.footerIconWrapper}>
                            <FaFacebookF className={css.footerIcon} />
                        </div>
                        <div className={css.footerIconWrapper}>
                            <FaInstagram className={css.footerIcon} />
                        </div>
                        <div className={css.footerIconWrapper}>
                            <FaTwitter className={css.footerIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer