import styled from 'styled-components/native';

import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: ${Platform.OS === 'ios' ? '32px' : '16px'};
  padding-bottom: 16px;
  padding-horizontal: 16px;
  background-color: #000;
`;

export const Title = styled.Text`
  margin-left: 20px;
  font-size: 20px;
  color: #fff;
`;
