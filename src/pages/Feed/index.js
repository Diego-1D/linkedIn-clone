
import React from 'react';
import Publication from '../../components/Publication';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Widgets from '../../components/Widgets';
import './styles.css';

const Feed = () => {
    return (
        <div className="container_feed">
            <Header />
            <div className='body_feed'>
                <Sidebar />
                <Publication />
                <Widgets />
            </div>
        </div>
    )
}

export default Feed;
