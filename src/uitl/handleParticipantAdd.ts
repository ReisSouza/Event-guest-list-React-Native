import React from 'react';
import {Alert} from 'react-native';

export type ArgsParticipantAdd = {
  participantName: string | undefined;
  participants: string[];
  setParticipants: React.Dispatch<React.SetStateAction<string[]>>;
  setParticipantName: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const handleParticipantAdd = ({
  participantName,
  participants,
  setParticipantName,
  setParticipants,
}: ArgsParticipantAdd) => {
  if (participantName === undefined) {
    return Alert.alert(
      'Nome e obrigatório para cadastro',
      'Insira seu nome e tente novamente',
    );
  }
  if (participants.includes(participantName)) {
    return Alert.alert(
      'Participante ja existe',
      'Já existe um participante na lista com esse nome',
    );
  }
  setParticipants(prevState => [...prevState, participantName]);
  setParticipantName(undefined);
};

export default handleParticipantAdd;
