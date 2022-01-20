import React, { useEffect, useState } from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from '../HeaderOptions';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { BusinessCenter, Chat, Home, MoreHoriz, Notifications, SupervisorAccount } from '@material-ui/icons';
import Menu from '../Menu';


const Header = () => {

    const user = useSelector(selectUser);

    const [blackHeader, setBlackHeader] = useState(false);
    const [active, setActive] = useState(false);

    const click = () => {
        setActive(!active);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setBlackHeader(false);
            } else {
                setBlackHeader(true);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className="header__left">
                <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Pesquisar' type="text" />
                </div>
            </div>
            <div className="header__right">
                {
                    blackHeader &&
                    <HeaderOptions Icon={SearchIcon} title='Pesquisar' />
                }
                <HeaderOptions Icon={Home} title='Início' />
                <HeaderOptions Icon={SupervisorAccount} title='Minha rede' />
                <HeaderOptions Icon={BusinessCenter} title='Vagas' />
                <HeaderOptions Icon={Chat} title='Messagens' />
                <HeaderOptions Icon={Notifications} title='Notificações' />
                <HeaderOptions
                    avatar={true}
                    title='Eu'
                    onClick={logoutOfApp}
                />
            </div>
            <div className='button-menu'>
                <HeaderOptions Icon={MoreHoriz} onClick={click} />
            </div>
            {active && (
                <Menu />
            )

            }
        </div>
    )
}

export default Header;
