import React from 'react';
import { View, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

const TeacherLIst: React.FC = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis"/>
      <Text>Lista de professores</Text>
    </View>
  );
}

export default TeacherLIst;