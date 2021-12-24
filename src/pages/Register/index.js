import React, { useState } from 'react';
import './styles.css';
import { auth } from '../../firebase';
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                        })
                        );
                    });
            })
            .catch((error) => alert(error));
    };


    return (
        <div className='container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt='' />
            <p>Aproveite sua vida profissional ao máximo</p>
            <div className='container__input'>
                <form>
                    <p>Nome Completo</p>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                    />

                    <p>E-mail</p>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                    />

                    <p>Senha (8 ou mais caracteres)</p>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                    />
                </form>
                <p className='term'>Ao clicar em Aceite e cadastre-se,
                    você aceita o <span>Contrato do Usuário </span>,
                    a <span>Política de Privacidade</span> e a
                    <span>Política de Cookies</span> do LinkedIn.
                </p>

                <button type='submit' onClick={register}>Aceite e cadastre-se</button>

                <h3>Já se cadastrou no LinkedIn?{" "}
                    <span className='login__resgiter'>
                        <Link to='/log'>Entre</Link>
                    </span>
                </h3>

            </div>
        </div>
    )
}

export default Register;
