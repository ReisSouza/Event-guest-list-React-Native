import React from 'react';
import {TextInput, View} from 'react-native';
import {ButtonAction} from '../../../components';
import handleParticipantAdd, {
  ArgsParticipantAdd,
} from '../../../uitl/handleParticipantAdd';

import S from './styles';

const SectionAddParticipant: React.FC<ArgsParticipantAdd> = ({
  participantName,
  participants,
  setParticipantName,
  setParticipants,
}: ArgsParticipantAdd) => {
  return (
    <View style={S.form}>
      <TextInput
        style={S.input}
        placeholder="Nome da participante"
        placeholderTextColor="#6b6b6b"
        onChangeText={setParticipantName}
        value={participantName}
      />
      <ButtonAction
        onPress={() =>
          handleParticipantAdd({
            participants,
            setParticipants,
            participantName,
            setParticipantName,
          })
        }
      />
    </View>
  );
};
export default SectionAddParticipant;
