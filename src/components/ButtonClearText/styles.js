import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    button_clear: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Theme.colors.gray,
      width: 20,
      height: 20,
      borderRadius: 50,
    },
  });

export default makeStyles;
