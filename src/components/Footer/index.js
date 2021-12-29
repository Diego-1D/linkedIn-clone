import React from 'react';
import './styles.css';

const Footer = () => {
    return (
        <div className='container_footer'>
            <ul className='wrapper_list'>
                <li className='list_item_footer'>
                    <img src='https://cdn.worldvectorlogo.com/logos/linkedin.svg' alt='' />
                    <span>© 2021</span>
                </li>
                <li className='list_item_footer'>Sobre</li>
                <li className='list_item_footer'>Acessibilidade</li>
                <li className='list_item_footer'>Contrato do Usuário</li>
                <li className='list_item_footer'>Política de Privacidade do LinkedIn</li>
                <li className='list_item_footer'>Política de Cookies</li>
                <li className='list_item_footer'>Política de Direitos Autorais</li>
                <li className='list_item_footer'>Política da Marca</li>
                <li className='list_item_footer'>Controles de visitantes</li>
                <li className='list_item_footer'>Diretrizes da Comunidade</li>
            </ul>
        </div>
    )
}

export default Footer;