import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/icons/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

// import { Container } from './styles';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src="" alt="" />
        </div>
      </header>
    </div>
  );
}

export default TeacherList;
