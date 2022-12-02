import dayjs from 'dayjs';
import React from 'react';
import {Text} from 'react-native';

import S from './styles';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}: HeaderProps) => {
  return (
    <>
      <Text style={S.eventName}>Nome do evento</Text>
      <Text style={S.eventDate}>
        {dayjs().add(-3, 'h').format('ddd D MMM of YY')}
      </Text>
    </>
  );
};
export default Header;
