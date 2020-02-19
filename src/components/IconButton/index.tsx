import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

import {IconButton as IconButtonProps} from '../types';

export default function IconButton({
  name,
  paused,
  disabled,
  onPress,
}: IconButtonProps) {
  return (
    <Container paused={paused} disabled={disabled} onPress={onPress}>
      <Icon name={name} color={paused ? '#0057ff' : '#eee'} size={15} />
    </Container>
  );
}
