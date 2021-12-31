import { Avatar } from '@material-ui/core';
import { KeyboardArrowDownOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './styles.css';

const Sidebar = () => {

    const user = useSelector(selectUser);

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);


    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDBBMHxleHBsb3JlLWZlZWR8MXx8fGVufDBBfHw%3D&w=1000&q=80' alt='' />
                <Avatar src={user.photoUrl} className='sidebar__avatar' >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4> {user.email}</h4>
            </div>

            {activeMenu && (
                <div>
                    <div className='sidebar__stats'>
                        <div className='sidebar__stat'>
                            <p>Conexões</p>
                            <p className='sidebar__statNumber'>1,523</p>
                        </div>
                        <div className='sidebar__stat'>
                            <p>Quem viu seu perfil</p>
                            <p className='sidebar__statNumber'>2,719</p>
                        </div>
                    </div>
                    <div className='sidebar__bottom'>
                        <p>Recentes</p>
                        {recentItem('reactjs')}
                        {recentItem('programming')}
                        {recentItem('softwareengineering')}
                        {recentItem('design')}
                        {recentItem('developer')}
                    </div>
                </div>
            )}
            <div className='view_button_area'>
                <div className='view_button' onClick={() => setActiveMenu(!activeMenu)}>
                    {!activeMenu ?
                        <p>Exibir mais</p>
                        :
                        <p>Exibir menos</p>
                    }
                    <KeyboardArrowDownOutlined />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
