import React, {
  createContext,
  useEffect,
  useState,
  useReducer,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FontSizeContext = createContext();

const initialState = '보통';
function FontSizeProvider({children}) {
  const [fontSize, dispatch] = useReducer(FontSizeReducer, initialState);

  const loadFont = async () => {
    try {
      const temp = await AsyncStorage.getItem('fontSize');
      dispatch({type: 'SET_FONT', payload: temp || fontSize});
    } catch (error) {
      console.log('error');
    }
  };

  useEffect(() => {
    loadFont();
  }, []);

  const toggleFontSize = async text => {
    // const run = async text => {
    await AsyncStorage.setItem('fontSize', text);
    dispatch({
      type: 'UPDATE_FONT',
      payload: text,
    });
    // };
    // switch (value) {
    //   case '보통':
    //     await run('medium');
    //     break;
    //   case '작음':
    //     await run('large');
    //     break;
    //   case '큼':
    //     await run('small');
    //     break;
    //   default:
    //     await run('medium');
    //     break;
    // }
  };

  return (
    <FontSizeContext.Provider value={{fontSize, loadFont, toggleFontSize}}>
      {children}
    </FontSizeContext.Provider>
  );
}
export {FontSizeContext, FontSizeProvider};

export const FontSizeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FONT':
      return action.payload;

    case 'UPDATE_FONT':
      return action.payload;

    default:
      return state;
  }
};

const useFontSize = () => {
  const {fontSize, toggleFontSize} = useContext(FontSizeContext);
  return {fontSize, toggleFontSize};
};

export default useFontSize;
