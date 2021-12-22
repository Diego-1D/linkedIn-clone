import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './styles.css';

const Log = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoURL: userAuth.user.photoURL,
                    })
                )
            })
            .catch((error) => alert(error));
    };

    return (
        <div className='container_login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt='' />
            <div className='container__input__login'>
                <h2>Entrar</h2>
                <p>Acompanhe as novidades do seu mundo profissional</p>
                <form>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='E-mail'
                        type='email'
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Senha'
                        type='password'
                    />
                </form>
                <span className='forgot_password'>Esqueceu a senha?</span>
                <button type='submit' onClick={loginToApp}>Entrar</button>
            </div>
            <h3>Novo no LinkedIn?{" "}
                <span className='resgiter'>
                    Cadastre-se
                </span>
            </h3>
        </div>
    )
}

export default Log;