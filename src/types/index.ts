type Theme = 'light' | 'dark';
type RpType = (value: number) => number;
type RhType = (value: number) => number;

type GetStyleSheetType = {
  mode: Theme;
  Rp: RpType;
  Rh: RhType;
};
