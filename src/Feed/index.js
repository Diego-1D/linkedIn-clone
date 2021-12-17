import React, { useEffect, useState } from 'react';
import "./styles.css";
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import InputOptions from '../InputOptions';
import Post from '../Post';
import { db } from '../Services/firebase';

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])

    const sendPost = (event) => {
        event.preventeDefault();

        db.collection('posts').add({
            name: 'Diego Fernandes',
            description: 'This is a test',
            message
        })
    }

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <Create />
                    <form>
                        <input type='text' />
                        <button onClick={sendPost} ontype='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOptions Icon={Image} title='Photo' color='#70B5F9' />
                    <InputOptions Icon={Subscriptions} title='Video' color='#E7A33E' />
                    <InputOptions Icon={EventNote} title='Event' color='#C0CBCD' />
                    <InputOptions Icon={CalendarViewDay} title='Write article' color='#7FC15E' />
                </div>
            </div>
            <Post
                name='Diego Fernandes'
                description='This is a test'
                message='WOW this worked'
            />
        </div>
    )
}

export default Feed
