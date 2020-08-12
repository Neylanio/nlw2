import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {

  const [ teachers, setTeachers ] = useState([]);

  const [ subject, setSubject ] = useState('99');
  const [ week_day, setWeek_day ] = useState('');
  const [ time, setTime ] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time
        }
      });

      setTeachers(response.data);

    } catch (error) {

      alert('Professores não encontrados!')

    }

  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Português', label: 'Português' },
              { value: 'Programação', label: 'Programação' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            value={week_day}
            onChange={(e) => { setWeek_day(e.target.value) }}
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

          <Input
            name="time"
            type="time"
            label="Hora"
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
          />

          <button type="submit">
            Buscar
          </button>

        </form>
      </PageHeader>

      <main>
        { teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;
