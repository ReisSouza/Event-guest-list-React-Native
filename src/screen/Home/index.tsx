import React, {useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {HeaderHome, SectionAddParticipant} from '../../features';
import {Participant} from '../../modules';
import handleParticipantRemove from '../../uitl/handleParticipantRemove';

import S from './styles';

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}: HomeProps) => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string | undefined>();

  return (
    <View style={S.container}>
      <HeaderHome />
      <SectionAddParticipant
        participantName={participantName}
        participants={participants}
        setParticipantName={setParticipantName}
        setParticipants={setParticipants}
      />
      <ScrollView
        showsHorizontalScrollIndicator
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={participants}
          ListEmptyComponent={() => (
            <Text style={S.notFoundTest}>
              Não econtramos participante cadastrados, seja o primeiro
            </Text>
          )}
          keyExtractor={item => item}
          renderItem={({item}) => {
            return (
              <Participant
                name={item}
                onRemove={name =>
                  handleParticipantRemove({
                    name,
                    setParticipants,
                  })
                }
              />
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
export default Home;
