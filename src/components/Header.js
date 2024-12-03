import { useState } from "react";
import { LOGO_URL } from "../utiles/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus";
const Headers = () => {
    const [loginBtn, setLoginBtn] = useState('Login');
    const oneStatus = useOnlineStatus();
    return (
        <div className="flex justify-between ">
            <div className="w-40">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="food logo app"
                />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 gap-5">
                    <li>Online Status : {oneStatus ? "✅" : "🔴"}</li>
                    <li> <Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='contact'>Contact Us</Link></li>
                    <li><Link to='grocery'>Grocery</Link></li>
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