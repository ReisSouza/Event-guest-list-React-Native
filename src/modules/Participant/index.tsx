import React from 'react';
import {Text, View} from 'react-native';
import {ButtonAction} from '../../components';

import S from './styles';
type ParticipantProps = {
  name: string;
  onRemove: (name: string) => void;
};
const Participant = ({name, onRemove}: ParticipantProps) => {
  return (
    <View style={S.container}>
      <Text style={S.name}>{name}</Text>
      <ButtonAction variant="remove" onPress={() => onRemove(name)} />
    </View>
  );
};

export default Participant;
