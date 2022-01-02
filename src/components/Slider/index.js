import React, { useState } from 'react';
import './styles.css';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';

const Slider = () => {

    const [sliderIndex, setSliderIndex] = useState(0);

    const slideItems = [
        {
            id: 1,
            img: 'https://static-exp1.licdn.com/sc/h/dbvmk0tsk0o0hd59fi64z3own',
            title: 'Informe às pessoas certas que você está buscando emprego',
            desc: 'Com o recurso Open To Work, você pode informar a recrutadores em sigilo ou compartilhar com a comunidade do LinkedIn que está buscando novas oportunidades de emprego.'
        },
        {
            id: 2,
            img: 'https://static-exp1.licdn.com/sc/h/2r8kd5zqpi905lkzsshdlvvn5',
            title: 'As conversas de hoje podem levar a oportunidades amanhã',
            desc: 'Interaja com seus contatos para fortalecer os relacionamentos que podem ajudar você a dar o próximo passo na sua carreira.'
        },
        {
            id: 3,
            img: 'https://static-exp1.licdn.com/sc/h/ann24vsq7r0ux3vipqa1n90gg',
            title: 'Fique por dentro das novidades do seu setor',
            desc: 'Desde vídeos ao vivo até stories, newsletters e muito mais, o LinkedIn oferece diversas maneiras de você ficar por dentro das novidades do seu setor.'
        },

    ];

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        }
    }
    

    return (
        <div className='container_slide'>
            <div className='area_slide'>
                <div className='nav_slide'>
                    <div className='nav' direction="left" onClick={() => handleClick("left")}>
                        <ChevronLeftOutlined />
                        <h4 className='title_nav'>Voltar</h4>
                    </div>
                    <div className='nav' direction="right" onClick={() => handleClick("right")}>
                        <h4 className='title_nav'>Avançar</h4>
                        <ChevronRightOutlined />
                    </div>
                </div>
                <div className='wrapper_slide'>
                    <div className='info_container'>
                        <h3>{slideItems[sliderIndex].title}</h3>
                        <p>{slideItems[sliderIndex].desc}</p>
                    </div>
                    <div className='image_container'>
                        <img src={slideItems[sliderIndex].img} alt='' />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Slider;
