import React,{forwardRef} from 'react';
import './styles.css';
import { Avatar } from '@material-ui/core';
import {ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined } from '@material-ui/icons';
import InputOptions from '../InputOptions';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post__header'>
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='post_body'>
                <p>{message}</p>
            </div>
            <div className='post__buttons'>
                <InputOptions Icon={ThumbUpAltOutlined} title='Like' color='gray' />
                <InputOptions Icon={ChatOutlined} title='Comment' color='gray' />
                <InputOptions Icon={ShareOutlined} title='Share' color='gray' />
                <InputOptions Icon={SendOutlined} title='Send' color='gray' />
            </div>
        </div>
    )
});

export default Post;