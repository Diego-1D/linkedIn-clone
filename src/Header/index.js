import React from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOptions from '../HeaderOptions';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { LinkedIn } from '@material-ui/icons';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title='Home'/>
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOptions Icon={ChatIcon} title='Messaging'/>
                <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOptions avatar='https://avatars.githubusercontent.com/u/50786415?v=4' title='me'/>
            </div>
        </div>
    )
}

export default Header;
