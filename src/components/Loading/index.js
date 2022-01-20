import React from 'react';
import './styles.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" className="logo" />
                <div className="loading-bar"></div>
            </div>
        </div>

    )
}

export default Loading;
