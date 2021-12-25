import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Slider from '../../components/Slider';
import Suggestion from '../../components/Suggestion';
import './styles.css';

const Home = () => {
    return (
        <div className='container_home'>
            <div className='nav_home'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt='' />
                <div className='nav_home_right'>
                    <Link to='/register'><h3>Cadastra-se agora</h3></Link>
                    <Link to='/log'> <span>Entrar</span></Link>
                </div>
            </div>
            <Hero />
            <Suggestion />
            <div className='container_announce'>
                <div className='area_announce'>
                    <p>Anuncie sua vaga e alcance milhões de pessoas</p>
                    <button>Anuncie uma vaga</button>
                </div>
            </div>
            <Slider/>
            <Footer/>
        </div>
    )
}

export default Home;
