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
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle("Little Mix", "Melhor banda do mundo!")}
            {newsArticle("BLACKPINK", "Melhor banda do mundo!")}
            {newsArticle("Demi Lovato", "Melhor banda do mundo!")}
            {newsArticle("Jessie J", "Melhor banda do mundo!")}
            {newsArticle("Lady Gaga", "Melhor banda do mundo!")}
        </div>
    )
}

export default Widgets
