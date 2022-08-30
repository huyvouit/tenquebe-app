import {StyleSheet} from 'react-native';

import {Theme} from 'constants/theme';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      flex: 1,
    },
    line_circle: {
      position: 'relative',
      height: 24,
      width: '100%',
      top: -10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    circle: {
      borderRadius: 100,
      width: 24,
      height: 24,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
    },
    children: {
      marginTop: 5,
      paddingBottom: 20,
    },
  });

export default makeStyles;
