import React, { useEffect, useState } from 'react';
import "./styles.css";
import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons'
import InputOptions from '../InputOptions';
import Post from '../Post';
import { db } from '../../firebase';
import firebase from 'firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

const Publication = () => {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            )
    }, [])

    const sendPost = (event) => {
        event.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }

    return (
        <div className='publication'>
            <div className='publication__inputContainer'>
                <div className='publication__input'>
                    <Create />
                    <form>
                        <input
                            value={input} onChange={e => setInput(e.target.value)}
                            type='text'
                            placeholder='Começar publicação'
                        />
                        <button onClick={sendPost} ontype='submit'>Send</button>
                    </form>
                </div>
                <div className='publication__inputOptions'>
                    <InputOptions Icon={Image} title='Foto' color='#70B5F9' />
                    <InputOptions Icon={Subscriptions} title='Vídeo' color='#E7A33E' />
                    <InputOptions Icon={EventNote} title='Evento' color='#C0CBCD' />
                    <InputOptions Icon={CalendarViewDay} title='Escrever artigo' color='#7FC15E' />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    < Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />

                ))}
            </FlipMove>
        </div>
    )
}

export default Publication;