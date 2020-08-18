import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import styles from './styles';

const TeacherLIst: React.FC = () => {

  const [ selectedDay, setSelectedDay ] = useState('');
  const [ selectedTime, setSelectedTime ] = useState('');

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Qual a matéria?"
            placeholderTextColor= "#c1bccc"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <View style={styles.inputSelect}>
                <Picker
                  mode= "dialog"
                  selectedValue={selectedDay}
                  onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
                >
                  <Picker.Item label="Selecione o dia" value="99" />
                  <Picker.Item label="Domingo" value="0" />
                  <Picker.Item label="Seguna-feira" value="1" />
                  <Picker.Item label="Terça-feira" value="2" />
                  <Picker.Item label="Quarta-feira" value="3" />
                  <Picker.Item label="Quinta-feira" value="4" />
                  <Picker.Item label="Sexta-feira" value="5" />
                  <Picker.Item label="Sábado" value="6" />
                </Picker>
              </View>
              
              {/* <TextInput 
                style={styles.input} 
                placeholder="Qual o dia?"
                placeholderTextColor= "#c1bccc"
              /> */}
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Qual horário?"
                placeholderTextColor= "#c1bccc"
              />
            </View>
          </View>
        </View>

      </PageHeader>
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem /> 
      </ScrollView>
    </View>
  );
}

export default TeacherLIst;