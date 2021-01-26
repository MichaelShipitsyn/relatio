type PaletteItem = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  1000?: string;
  1100?: string;
  transparent: {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
  };
};

export type PaletteType = {
  primary: PaletteItem;
  success: PaletteItem;
  info: PaletteItem;
  warning: PaletteItem;
  danger: PaletteItem;
  basic: PaletteItem;
  control: PaletteItem;
};

export type StylesType = Record<string, any>;

export type MappingsType = {
  Button?: StylesType;
  Spinner?: StylesType;
  Text?: StylesType;
  Checkbox?: StylesType;
  TextField?: StylesType;
};

export type SizesType = {
  tiny: number;
  small: number;
  medium: number;
  large: number;
  giant: number;
};

export type ThemeType = {
  palette: PaletteType;
  mappings: MappingsType;
  shadows: Record<number, string>;
  sizes: SizesType;
  shape: Record<string, number>;
  spacing: Record<string, string | number>;
  typography: StylesType;
  overrides: MappingsType;
};
