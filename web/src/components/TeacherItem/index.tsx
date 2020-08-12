import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher: {id, subject, cost, name, avatar, whatsapp, bio}, children }) => {

  function createNewConnection(){
    api.post('connections', {
      user_id: id
    });
  }

  return (
    <article className="teacher-item">
        <header>
          <img src={avatar} alt={"Imagem de "+name}/>
          <div>
            <strong>{name}</strong>
            <span>{subject}</span>
          </div>
        </header>

        <p> {bio} </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ {cost}</strong>
          </p>
          <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${whatsapp}`}>
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </a>
        </footer>
    </article>
  );
}

export default TeacherItem;
