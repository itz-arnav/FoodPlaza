import React from 'react'
import css from "../styles/SignUp/SignUp.module.css";
import CompanyLogo from "/pad-thai.png";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/");
    }
    return (
        <div className={css.signupContainer}>
            <div className={css.signupHeaderWrapper}>
                <div className={css.signupHeader}>
                    <div className={css.headerLeftSection} onClick={handleHomeClick}>
                        <img src={CompanyLogo} alt="Company Logo" className={css.headerCompanyLogo} />
                        <div className={css.headerCompanyTitle}>FoodPlaza</div>
                    </div>
                    <div className={css.headerLoginSection}>
                        <span className={css.greyedSmall}>Already have an account?</span>
                        <div className={css.loginButton}>Login</div>
                    </div>
                </div>
            </div>

            <div className={css.signupBody}>
                <div className={css.signupWrapper}>
                    <div className={css.signupWrapperTitle}>
                        Sign Up
                    </div>
                    <form action="" className={css.signupForm}>
                        <div className={css.signupInputfieldDiv}>
                            <input type="email" className={css.signupInputField} name="email" placeholder='Email' />
                        </div>

                        <div className={css.signupInputfieldDiv}>
                            <input type="password" className={css.signupInputField} name="password" placeholder='Password' />
                        </div>

                        <button className={css.submitButton}>Sign up with email</button>
                    </form>
                    <div className={css.separateSection}>
                        <hr className={css.separateHR} />
                        <div className={css.signUpOrText}>OR</div>
                        <hr className={css.separateHR} />
                    </div>
                    <div className={css.signupSocialMedia}>
                        <div className={css.signUpSocialContainer}>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp