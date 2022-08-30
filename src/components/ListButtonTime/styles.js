import {StyleSheet, Dimensions} from 'react-native';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';

const makeStyles = theme =>
  StyleSheet.create({
    flexbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    button_state: {
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      height: 42,
      width: windowSize.wScale(81.31),
      borderColor: Theme.colors.gray,
      borderWidth: 1,
    },
    button_right: {
      // marginRight: 8,s
    },

    text_button: {
      color: Theme.colors.grayText,
    },
  });
export default makeStyles;
