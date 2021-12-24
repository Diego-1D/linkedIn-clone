
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feed from '../../components/Feed';
import Header from '../../components/Header';
import Login from '../../components/Login';
import Sidebar from '../../components/Sidebar';
import { login, logout, selectUser } from '../../features/userSlice';
import Widgets from '../../components/Widgets';
import { auth } from '../../firebase';
import './styles.css';


const Fee = () => {

    return (
        <div className="app">
            <Header />
            <div className='app__body'>
                <Sidebar />
                <Feed />
                <Widgets />
            </div>
        </div>
    )
}

export default Fee;
