import 'styled-components';

import {defaultTheme} from '../styles/themes/themes';

declare module 'styled-components'{
  type ThemeType = typeof defaultTheme;
  export interface DefaultTheme extends ThemeType{}
}