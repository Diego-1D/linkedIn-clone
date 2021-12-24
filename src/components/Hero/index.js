import React from 'react';
import './styles.css';
import ImgHero from '../../images/img_hero.png';
import { ChevronRightOutlined } from '@material-ui/icons';

const Hero = () => {
    return (
        <div className='container_hero'>
            <div className='hero_left'>
                <p>Conheça a sua nova comunidade profissional</p>
                <div className='hero_option'>
                    <div className='option'>
                        <p>Procurar emprego</p>
                        <ChevronRightOutlined />
                    </div>
                    <div className='option'>
                        <p>Encontrar pessoas que você conhece</p>
                        <ChevronRightOutlined />
                    </div>
                    <div className='option'>
                        <p>Aprender novas competências</p>
                        <ChevronRightOutlined />
                    </div>
                </div>
            </div>
            <div className='hero_right'>
                <img src={ImgHero} alt='' />
            </div>
        </div>
    )
}

export default Hero;
