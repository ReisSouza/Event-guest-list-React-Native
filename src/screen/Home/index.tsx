import dayjs from 'dayjs';
import React from 'react';
import {Alert, FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import {ButtonAction} from '../../components';
import {Participant} from '../../modules';

import S from './styles';

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}: HomeProps) => {
  const participants = [
    'Reis',
    'Souza',
    'Elizabeth',
    'Cristina',
    'Kaylan',
    'Luciano',
    'Valdirene',
    'luciana',
    'Kaylan1',
    'Luciano1',
    'Valdirene1',
    'luciana1',
  ];
  const handleParticipantAdd = () => {
    if (participants.includes('Elizabeth')) {
      return Alert.alert(
        'Participante ja existe',
        'Já existe um participante na lista com esse nome',
      );
    }
  };
  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remove', `Remover o participante ${name}`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado'),
      },
    ]);
  };

  return (
    <View style={S.container}>
      <Text style={S.eventName}>Nome do evento</Text>
      <Text style={S.eventDate}>
        {dayjs().add(-3, 'h').format('ddd D MMM of YY')}
      </Text>
      <View style={S.form}>
        <TextInput
          style={S.input}
          placeholder="Nome da participante"
          placeholderTextColor="#6b6b6b"
        />
        <ButtonAction onPress={handleParticipantAdd} />
      </View>
      <ScrollView>
        <FlatList
          data={participants}
          ListEmptyComponent={() => <Text>Vazio</Text>}
          keyExtractor={item => item}
          renderItem={({item}) => {
            return (
              <Participant
                name={item}
                onRemove={name => handleParticipantRemove(name)}
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
export default Home;
