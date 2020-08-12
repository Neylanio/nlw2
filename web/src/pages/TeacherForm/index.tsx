import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

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


        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Dia da Semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
            <Input name="from" label="Das" type="time"/>
            <Input name="to" label="Até" type="time"/>
          </div>

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
