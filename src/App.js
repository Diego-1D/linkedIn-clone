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
    <div className="app">
      <Header />
      {!user ?
        <Login /> : (
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets/>
          </div>
        )}
    </div>
  );
}

export default App;
