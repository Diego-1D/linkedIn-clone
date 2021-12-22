import React from 'react';
import './styles.css';
import ImgHero from '../../images/img_hero.png';

const Hero = () => {
    return (
        <div className='container_hero'>
            <div className='hero_left'>
                <p>Conheça a sua nova comunidade profissional</p>
                <div className='hero_option'>
                        <div className='option'>Procurar emprego</div>
                        <div className='option'>Encontrar pessoas que você conhece</div>
                        <div className='option'>Aprender novas competências</div>
                </div>
            </div>
            <div className='hero_right'>
               <img src={ImgHero} alt=''/>
            </div>
        </div>
    )
}

export default Hero;
