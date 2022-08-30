import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Theme.colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default makeStyles;
