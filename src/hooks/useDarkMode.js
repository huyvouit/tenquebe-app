import React, {createContext, useEffect, useState, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DarkModeContext = createContext();

const initialState = {
  theme: 'dark',
};
function DarkModeProvider({children}) {
  const [darkMode, dispatch] = useReducer(DarkModeReducer, initialState);

  //   const [darkMode, setDarkMode] = useState(false);
  const loadTheme = async () => {
    try {
      //   await AsyncStorage.removeItem('darkMode');
      const temp = await AsyncStorage.getItem('darkMode');
      //   console.log(temp);
      dispatch({type: 'SET_THEME', payload: {theme: temp || darkMode.theme}});
    } catch (error) {
      console.log('error');
    }
    // await AsyncStorage.setItem('darkMode', darkMode.theme);
    // const temp = await AsyncStorage.getItem('darkMode');
    // console.log(temp);

    // console.log();
  };

  useEffect(() => {
    loadTheme();
  }, []);

  const toggleDarkMode = async () => {
    await AsyncStorage.setItem(
      'darkMode',
      darkMode.theme == 'light' ? 'dark' : 'light',
    );
    dispatch({
      type: 'UPDATE_THEME',
      payload: {theme: darkMode.theme == 'light' ? 'dark' : 'light'},
    });
  };

  return (
    <DarkModeContext.Provider value={{darkMode, loadTheme, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}
export {DarkModeContext, DarkModeProvider};

export const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload.theme,
      };

    case 'UPDATE_THEME':
      return {
        ...state,
        theme: action.payload.theme,
      };

    default:
      return state;
  }
};
