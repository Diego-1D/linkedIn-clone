import React, { useState } from 'react';
import './styles.css';
import { auth } from '../../firebase';
import { login } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
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


    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        })
                        );
                    });
            })
            .catch((error) => alert(error));
    };

    return (
        <div className='login'>
            <img src='https://logospng.org/wp-content/uploads/linkedin.png' alt='' />

            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Full name (required if registering)'
                    type='text'
                />

                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder='Profile'
                    type='text'
                />

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    type='email'
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password'
                    type='password'
                />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className='login__resgiter' onClick={register}>
                    Resgister Now
                </span>
            </p>
        </div>
    )
}

export default Login;
