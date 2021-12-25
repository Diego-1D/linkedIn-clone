import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './components/Feed';
import { auth } from './firebase';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Register from './pages/Register';
import Log from './pages/Log';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fee from './pages/Fee';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        })
        );
      } else {
        dispatch(logout());
      }
    })
  }, []);
  return (
    <BrowserRouter>
      {!user ?
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/log' element={<Log />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        : (
          <Fee />
        )}
    </BrowserRouter>
  );
}

export default App;
