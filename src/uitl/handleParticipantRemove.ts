import {Alert} from 'react-native';

export type ArgsParticipantRemove = {
  name: string;
  setParticipants: React.Dispatch<React.SetStateAction<string[]>>;
};

const handleParticipantRemove = ({
  name,
  setParticipants,
}: ArgsParticipantRemove) => {
  Alert.alert('Remove', `Remover o participante ${name}`, [
    {
      text: 'Não',
      style: 'cancel',
    },
    {
      text: 'Sim',
      onPress: () => {
        setParticipants(prevState => prevState.filter(p => p !== name));
        Alert.alert(`Participante ${name} deletado`);
      },
    },
  ]);
};
export default handleParticipantRemove;
