import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import S from './styles';

type ButtonProps = {
  onPress?: () => void;
  variant?: 'add' | 'remove';
};

const ButtonAction: React.FC<ButtonProps> = ({
  onPress,
  variant = 'add',
}: ButtonProps) => {
  return (
    <TouchableOpacity style={variant === 'add' ? S.buttonAdd : S.buttonRemove}>
      <Text style={S.buttonText} onPress={onPress}>
        {variant === 'add' ? '+' : '-'}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonAction;
