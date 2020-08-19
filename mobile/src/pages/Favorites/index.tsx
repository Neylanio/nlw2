import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

const Favorites: React.FC = () => {

  const [ teachers, setTeachers ] = useState([]);
  const [ favorites, setFavorites ] = useState<number[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id);
        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);

  return (
    <View>
      <PageHeader title="Meus Proffys favoritos"/>
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        { teachers.filter((teacher: Teacher) => favorites.includes(teacher.id) 
          ? (
          <TeacherItem  
            key={teacher.id} 
            teacher={teacher}
            favorited={true}
          />
          )
          : {}
        )}
      </ScrollView>

    </View>
  );
}

export default Favorites;