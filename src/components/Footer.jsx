import React from 'react'
import css from "../styles/Footer.module.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "/pad-thai.png";

const Footer = () => {
    return (
        <>
            <div className={css.footerContainer}>
                <div className={css.topFooterPart}>
                    <div className={css.topFooterLeftPart}>
                        <div className={css.companyDetails}>
                            <img src={Logo} alt="" className={css.companyIcon} />
                            <div className={css.companyTitle}>FoodPlaza</div>
                        </div>
                        <div className={css.companyDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta erat purus, vel cursus sem egestas at. Nunc eget velit ac arcu interdum pretium.</div>
                    </div>
                    <div className={css.topFooterRightPart}>
                        <div className={css.rightCategorySection}>
                            <div className={css.sectionTitle}>Popular Categories</div>
                            <ul className={css.sectionItems}>
                                <li className={css.sectionItem}>Alcohol Delivery</li>
                                <li className={css.sectionItem}>Back to School Delivery</li>
                                <li className={css.sectionItem}>Beauty Stores</li>
                                <li className={css.sectionItem}>Beauty Supply</li>
                                <li className={css.sectionItem}>Catering Near Me</li>
                                <li className={css.sectionItem}>Convenience Sources</li>
                            </ul>
                        </div>
                        <div className={css.rightCategorySection}>
                            <div className={css.sectionTitle}>Get To Know Us</div>
                            <ul className={css.sectionItems}>
                                <li className={css.sectionItem}>About Us</li>
                                <li className={css.sectionItem}>Careers</li>
                                <li className={css.sectionItem}>Investors</li>
                                <li className={css.sectionItem}>Company Blog</li>
                                <li className={css.sectionItem}>Engineering Blog</li>
                                <li className={css.sectionItem}>Merchant Blog</li>
                            </ul>
                        </div>
                        <div className={css.rightCategorySection}>
                            <div className={css.sectionTitle}>Let Us Help You</div>
                            <ul className={css.sectionItems}>
                                <li className={css.sectionItem}>Account Details</li>
                                <li className={css.sectionItem}>Order Details</li>
                                <li className={css.sectionItem}>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
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