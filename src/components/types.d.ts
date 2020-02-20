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
  };
}
