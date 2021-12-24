import React from 'react';
import './styles.css';

const Suggestion = () =>{

    return (
        <div className='container_susggetion'>
            <div className='info_area'>
                <p>Encontre o emprego ou estágio certo para você</p>
                <div className='suggestion_area'>
                    <p>SUGESTÕES DE PESQUISA</p>
                    <div className='suggestion_button_area'>
                        <p className='suggestion_button'>Engenharia</p>
                        <p className='suggestion_button'>Desenvolvimento de negócios</p>
                        <p className='suggestion_button'>Financeiro</p>
                        <p className='suggestion_button'>Auxiliar administrativo</p>
                        <p className='suggestion_button'>Representante de vendas no varejo</p>
                        <p className='suggestion_button'>Atendimento ao cliente</p>
                        <p className='suggestion_button'>Operações</p>
                        <p className='suggestion_button'>Tecnologia da informação</p>
                        <p className='suggestion_button'>Marketing</p>
                        <p className='suggestion_button'>Recursos humanos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion;
