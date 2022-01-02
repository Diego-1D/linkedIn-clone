import React from 'react';
import './styles.css';

const Loading = () => {
    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <img src="https://image.flaticon.com/icons/svg/1409/1409945.svg" alt="" className="logo" />
                <div className="loading-bar"></div>
            </div>
        </div>

    )
}

export default Loading;
