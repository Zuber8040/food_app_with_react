import { useState } from "react";
import { LOGO_URL } from "../utiles/constant";
import { Link } from "react-router-dom";
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
                    <li> <Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='contact'>Contact Us</Link></li>
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