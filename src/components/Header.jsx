import React from 'react'
import css from "../styles/Header.module.css"
import Logo from "/pad-thai.png";

const Header = () => {
  return (
    <>
        <div className={css.headerContainer}>

          <div className={css.headerImageSection}>
            <img src={Logo} alt="Logo" className={css.logoImage}/>
            <div className={css.logoText}>FoodPlaza</div>
          </div>

          <ul className={css.headerNavListSection}>
            <li className={css.navListItem}>Home</li>
            <li className={css.navListItem}>Menu</li>
            <li className={css.navListItem}>Restaurants</li>
            <li className={css.navListItem}>About</li>
            <li className={css.navListItem}>Contact</li>
          </ul>

          <div className={css.headerLoginSection}>
            <div className={css.loginButton}>Login</div>
            <div className={css.signupButton}>Sign Up</div>
          </div>

        </div>
    </>
  )
}

export default Header