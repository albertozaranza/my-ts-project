export interface FavouriteButton {
  favourite: boolean;
}

export interface IconButton {
  name: string;
  paused?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}
