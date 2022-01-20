import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './styles.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

const Log = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const loginToApp = async (event) => {
        event.preventDefault();
        setLoading(true)
        await auth.signInWithEmailAndPassword(email, password)
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
            .catch((error) => alert(error)).finally(() => {
                setLoading(false);
            })
    };

    return (
        loading ?
            <Loading />
            :
            <div className='container_login'>
                <div className='section_login'>
                    <div className='img_login'>
                        <img src='https://cdn.worldvectorlogo.com/logos/linkedin-logo-2013-1.svg' alt='' />
                    </div>
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
                        <Link to='/register' className='resgiter'>Cadastre-se</Link>
                    </h3>
                </div>
                <Footer styles={{ display: 'block' }} />
            </div>

    )
}

export default Log;
