import { ThemeType } from '../types';
import { ButtonMapping } from './Button/ButtonMapping';
import { SpinnerMapping } from './Spinner/SpinnerMapping';
import { TextMapping } from './Text/TextMapping';
import { CheckboxMapping } from './Checkbox/CheckboxMapping';
import { TextFieldMapping } from './TextField/TextFieldMapping';
import { MappingsType } from '../types';

export const getAllMappings = (theme: ThemeType): MappingsType => {
  return {
    Button: ButtonMapping(theme),
    Spinner: SpinnerMapping(theme),
    Text: TextMapping(theme),
    Checkbox: CheckboxMapping(theme),
    TextField: TextFieldMapping(theme),
  };
};
