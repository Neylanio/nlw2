import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição'"
      />
      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" type="text" label="Nome Completo"/>
          <Input name="avatar" type="text" label="Avatar"/>
          <Input name="whatsapp" type="number" label="WhatsApp"/>
          <Textarea name="bio" label="Biografia"/>
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Português', label: 'Português' },
            ]}
          />

          <Input name="cost" type="text" label="Custo da sua hora por"/>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>

      </main>
    </div>
  );
};

export default TeacherForm;
