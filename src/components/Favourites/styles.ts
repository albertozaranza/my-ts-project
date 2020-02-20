import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
`;

export const ViewAll = styled.TouchableOpacity`
  height: 30px;
  width: 60px;
  justify-content: center;
  align-items: center;
`;

export const SampleText = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const AlbumContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding-bottom: 10px;
`;
export const AlbumPhoto = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  margin-left: 10px;
  justify-content: space-around;
`;

export const AlbumName = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const AlbumSinger = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const List = styled.FlatList`
  padding-horizontal: 16px;
`;
