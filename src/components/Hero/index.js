import React from 'react';
import './styles.css';
import { ChevronRightOutlined } from '@material-ui/icons';

const Hero = () => {
    return (
        <div className='container_hero'>
            <div className='area_hero'>
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
                <div className='area_img_hero'>
                <img src='https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Hero;
