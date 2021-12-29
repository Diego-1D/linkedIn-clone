import React from 'react';
import { Link } from 'react-router-dom';
import Links from '../../components/Links';
import Hero from '../../components/Hero';
import Slider from '../../components/Slider';
import Suggestion from '../../components/Suggestion';
import './styles.css';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div className='container_home'>
            <div className='nav_home'>
                <img src='https://cdn.worldvectorlogo.com/logos/linkedin-logo-2013-1.svg' alt='' />
                <div className='nav_home_right'>
                    <Link to='/register' className='h3'>Cadastra-se agora</Link>
                    <Link to='/log' className='span'>Entrar</Link>
                </div>
            </div>
            {/* <Hero /> */}
            <Suggestion />
            <div className='container_announce'>
                <div className='area_announce'>
                    <p className='title_announce'>Anuncie sua vaga e alcance milhões de pessoas</p>
                    <button>Anuncie uma vaga</button>
                </div>
            </div>
            {/* <Slider/> */}
            <Links />
            <Footer />
        </div>
    )
}

export default Home;
