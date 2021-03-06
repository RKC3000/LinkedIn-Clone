import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccontIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className='header'>
            <div className="header_left">
                <img
                    src="https://image.flaticon.com/icons/png/512/174/174857.png"
                    alt="LinkedIn"
                />

                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccontIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationIcon} title="Notification" />
                <HeaderOption
                    avatar={true}
                    title="me"
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}

export default Header;
