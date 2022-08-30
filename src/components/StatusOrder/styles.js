import {Theme} from 'constants/theme';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    status: {
      paddingHorizontal: 7,
      paddingVertical: 3,
      backgroundColor: theme == 'light' ? '#F6F6F8' : Theme.colors.blackTitle,
      borderRadius: 3,
    },
  });

export default makeStyles;
