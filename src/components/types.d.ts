import {ImageSourcePropType, ImagePropertiesSourceOptions} from 'react-native';

export interface FavouriteButton {
  favourite: boolean;
}

export interface IconButton {
  name: string;
  paused?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export interface Music {
  music: {
    id: number;
    albumLength: number;
    name: string;
    albumPhoto: string;
    paused: boolean;
  };
}

export interface Album {
  item: {
    id: number;
    name: string;
    singer: string;
    avatar: ImageSourcePropType;
  };
}

export interface Navigate {
  name: string;
  params?: {};
}
