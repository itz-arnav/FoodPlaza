import React from 'react';
import css from "../styles/Login/Login.module.css"; // Ensure the path is correct
import CompanyLogo from "/pad-thai.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  "../styles/toast.css";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleHomeClick = () => {
        navigate("/");
    }

    const handleSignupCLick = () => {
        navigate("/signup");
    }

    const { login } = useAuth();

    const handleLogin = async () => {
        login(username, password)
            .then(() => {
                navigate('/');
                toast.success("Login successful", {
                position: "top-center",
                })
            })
            .catch((error) => {
                toast.error("Please enter a valid username and password", {
                    position: "top-center",
                })
            })
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
                        <span className={css.greyedSmall}>Don't have an account?</span>
                        <div className={css.loginButton} onClick={handleSignupCLick}>Sign Up</div>
                    </div>
                </div>
            </div>

            <div className={css.signupBody}>
                <div className={css.signupWrapper}>
                    <div className={css.signupWrapperTitle}>
                        Sign In
                    </div>
                    <form action=""
                        className={css.signupForm}
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}>
                        <div className={css.signupInputfieldDiv}>
                            <input
                                type="text"
                                className={css.signupInputField}
                                name="username"
                                placeholder='Username'
                                required
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className={css.signupInputfieldDiv}>
                            <input
                                type="password"
                                className={css.signupInputField}
                                name="password"
                                placeholder='Password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className={css.submitButton}>Sign in with email</button>
                    </form>
                    <div className={css.separateSection}>
                        <hr className={css.separateHR} />
                        <div className={css.signUpOrText}>OR</div>
                        <hr className={css.separateHR} />
                    </div>
                    <div className={css.signupSocialMedia}>
                        <div className={css.signUpSocialContainer}>
                            <svg className={css.socialSignupIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6835 8.18411C15.6835 7.64031 15.6394 7.09357 15.5453 6.55859H7.99973V9.63914H12.3207C12.1414 10.6327 11.5653 11.5116 10.7217 12.0701V14.0689H13.2996C14.8134 12.6756 15.6835 10.618 15.6835 8.18411Z" fill="#4285F4"></path><path d="M7.99973 16C10.1573 16 11.9768 15.2916 13.3025 14.0688L10.7246 12.07C10.0074 12.5579 9.08145 12.8342 8.00267 12.8342C5.91565 12.8342 4.1461 11.4262 3.51118 9.5332H0.850967V11.5938C2.209 14.2951 4.97502 16 7.99973 16Z" fill="#34A853"></path><path d="M3.50824 9.53314C3.17314 8.5396 3.17314 7.46376 3.50824 6.47023V4.40967H0.850973C-0.283658 6.67011 -0.283658 9.33326 0.850973 11.5937L3.50824 9.53314Z" fill="#FBBC04"></path><path d="M7.99973 3.16633C9.14023 3.1487 10.2425 3.57786 11.0685 4.36563L13.3525 2.08167C11.9063 0.723645 9.9868 -0.0229766 7.99973 0.000539093C4.97502 0.000539093 2.209 1.70542 0.850967 4.40972L3.50824 6.47028C4.14022 4.57433 5.91271 3.16633 7.99973 3.16633Z" fill="#EA4335"></path></svg>
                            <div className={css.signupSocialText}>Sign in with Google</div>
                        </div>
                        <div className={css.signUpSocialContainer}>
                            <svg className={css.socialSignupIcon} width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.55416 0.00332907L6.42212 0C4.02684 0 2.47891 1.54552 2.47891 3.93762V5.75313H0.335243C0.150004 5.75313 0 5.89927 0 6.07954V8.71001C0 8.89028 0.150175 9.03625 0.335243 9.03625H2.47891V15.6737C2.47891 15.854 2.62892 16 2.81416 16H5.61104C5.79628 16 5.94628 15.8539 5.94628 15.6737V9.03625H8.45273C8.63797 9.03625 8.78797 8.89028 8.78797 8.71001L8.789 6.07954C8.789 5.99299 8.75359 5.91009 8.69082 5.84884C8.62805 5.78758 8.54253 5.75313 8.45359 5.75313H5.94628V4.2141C5.94628 3.47438 6.12741 3.09886 7.11758 3.09886L8.55382 3.09836C8.73888 3.09836 8.88889 2.95222 8.88889 2.77211V0.329578C8.88889 0.149642 8.73905 0.00366197 8.55416 0.00332907Z" fill="#3B5998"></path></svg>
                            <div className={css.signupSocialText}>Sign in with Facebook</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;
