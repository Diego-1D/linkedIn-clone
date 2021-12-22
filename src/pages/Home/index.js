import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import './styles.css';

const Home = () => {
    return (
        <div className='container_home'>
            <div className='nav_home'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt='' />
                <div className='nav_home_right'>
                        <h3>Cadastra-se agora</h3>
                        <span>Entrar</span>
                </div>
            </div>
            <Hero/>
        </div>
    )
}

export default Home;
