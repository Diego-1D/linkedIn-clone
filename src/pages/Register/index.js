import React, { useState } from 'react';
import './styles.css';
import { auth } from '../../firebase';
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';


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
        <div className='container_register'>
            <div className='section_register'>
                <img src='https://cdn.worldvectorlogo.com/logos/linkedin-logo-2013-1.svg' alt='' />
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
                        <Link to='/login' className='login__resgiter'>Entre</Link>
                    </h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Register;
