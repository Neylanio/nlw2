import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH6_yhNEh-EfQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=xHpZFcP3j70bec6yUnrtjzdS8rhi_igBB6oFYN1-u1g" alt="Neylanio"/>
          <div>
            <strong>Neylanio</strong>
            <span>Geografia</span>
          </div>
        </header>

        <p>
          Entusiasta das melhores tecnologias de geografia avançada.
          <br/><br/>
          Apaixonado por terrenos íngrimesApaixonado por terrenos íngrimes Apaixonado por terrenos íngrimes.
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 60,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </button>
        </footer>
    </article>
  );
}

export default TeacherItem;
