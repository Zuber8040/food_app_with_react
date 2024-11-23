import { useState } from "react";
import { LOGO_URL } from "../utiles/constant";
const Headers = () => {
    const [loginBtn, setLoginBtn] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="food logo app"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login_btn" onClick={
                        () => {
                            loginBtn === 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login')
                        }
                    }>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Headers;