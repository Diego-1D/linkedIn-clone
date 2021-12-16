import { Avatar } from '@material-ui/core';
import './styles.css';
import React from 'react';

const HeaderOptions = ({avatar, Icon, title}) => {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOption__icon'/> }
            {avatar && <Avatar className='headerOption__icon' src={avatar}/>}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOptions;