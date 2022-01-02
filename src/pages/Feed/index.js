
import React from 'react';
import Publication from '../../components/Publication';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Widgets from '../../components/Widgets';
import './styles.css';

const Fee = () => {
    return (
        <div className="container_feed">
            <Header />
            <div className='app__body'>
                <Sidebar />
                <Publication />
                <Widgets />
            </div>
        </div>
    )
}

export default Fee;
