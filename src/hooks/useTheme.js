import {useContext} from 'react';

import {DarkModeContext} from './useDarkMode';
import {FontSizeContext} from './useFont';

const useTheme = () => {
  const {
    darkMode: {theme},
  } = useContext(DarkModeContext);
  return theme;
};

export default useTheme;
