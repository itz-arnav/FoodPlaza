import { useState, useRef, useEffect } from 'react'
import css from "../styles/Header.module.css"
import Logo from "/pad-thai.png"
import { useNavigate } from 'react-router-dom'
import UserIcon from "/profile-user.png"
import { useAuth } from '../context/AuthContext';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClickLogin = () => navigate("/login");
  const {logout} = useAuth();

  const handleLogout = () => {
    logout();
  }

  const handleClickSignup = () => navigate("/signup");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div className={css.headerContainer}>

        <div className={css.headerImageSection}>
          <img src={Logo} alt="Logo" className={css.logoImage} />
          <div className={css.logoText}>FoodPlaza</div>
        </div>

        <ul className={css.headerNavListSection}>
          <li className={css.navListItem}>Home</li>
          <li className={css.navListItem}>Menu</li>
          <li className={css.navListItem}>Restaurants</li>
          <li className={css.navListItem}>About</li>
          <li className={css.navListItem}>Contact</li>
        </ul>
        {isAuthenticated ? (
           <div className={css.headerUserSection}>
           <img 
             src={UserIcon} 
             alt="User profile" 
             className={css.headerUserIcon} 
             onClick={handleClick} 
             aria-describedby={id} 
           />
           <Popover
             id={id}
             open={open}
             anchorEl={anchorEl}
             onClose={handleClose}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
             }}
             transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
             }}
           >
             <Typography sx={{}}>
               <ul className={css.popoverMenu}>
                 <li className={css.popoverMenuItem}>Profile</li>
                 <li className={css.popoverMenuItem}>Settings</li>
                 <li className={css.popoverMenuItem} onClick={handleLogout}>Logout</li>
               </ul>
             </Typography>
           </Popover>
         </div>
        ) : (
          <div className={css.headerLoginSection}>
            <div className={css.loginButton} onClick={handleClickLogin}>Login</div>
            <div className={css.signupButton} onClick={handleClickSignup}>Sign Up</div>
          </div>
        )}

      </div>
    </>
  )
}

export default Header