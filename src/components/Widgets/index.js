import React from 'react';
import './styles.css';
import { Info, FiberManualRecord } from '@material-ui/icons'

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecord />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn Notícias</h2>
                <Info />
            </div>
            {newsArticle("Covid-19: as últimas notícias sobre as va...", "Notícias mais lidas • 14.853 leitores")}
            {newsArticle("iFood e Kroton se unem para formar um...", "há 16 h • 2.277 leitores")}
            {newsArticle("Bilionários ficaram US$ 1 tri mais ricos e...", "há 7 h • 1.202 leitores")}
            {newsArticle("Chuvas na Bahia deixam dezenas de mo...", "há 10 h • 1525 leitores")}
            {newsArticle("Cobre ganha importância com onda sus...", "há 16 h • 222 leitores")}
        </div>
    )
}

export default Widgets;












