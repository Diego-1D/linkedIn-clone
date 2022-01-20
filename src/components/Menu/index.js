import React from 'react';
import './styles.css';
import HeaderOptions from '../HeaderOptions';
import { BusinessCenter, Chat, Notifications,SupervisorAccount, Home } from '@material-ui/icons';

const Menu = ({logOut}) => {
    return (
        <div className='container_menu'>
              <HeaderOptions Icon={Home} title='Início' />
                <HeaderOptions Icon={SupervisorAccount} title='Minha rede' />
                <HeaderOptions Icon={BusinessCenter} title='Vagas' />
                <HeaderOptions Icon={Chat} title='Messagens' />
                <HeaderOptions Icon={Notifications} title='Notificações' />
                <HeaderOptions
                    avatar={true}
                    title='Eu'
                    onClick={logOut}
                />
        </div>
    )
}

export default Menu;
