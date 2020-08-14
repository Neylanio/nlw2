import React from 'react';
import { View, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

const Favorites: React.FC = () => {
  return (
    <View>
      <PageHeader title="Meus Proffys favoritos"/>
      <Text>Favoritos</Text>
    </View>
  );
}

export default Favorites;