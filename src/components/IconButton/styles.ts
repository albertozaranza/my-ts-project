import styled from 'styled-components/native';

import {IconButton} from '../types';

export const Container = styled.TouchableOpacity<Omit<IconButton, 'name'>>`
  border-radius: 50px;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({paused}) => (paused ? '#eee' : '#0057ff')};
`;
