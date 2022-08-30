import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: Theme.colors.gray,
    },
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      borderWidth: 1,
      borderColor: Theme.colors.gray,
      flex: 1,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
    },
    left: {
      borderTopLeftRadius: 9,
      borderBottomLeftRadius: 9,
      marginLeft: 20,
    },
    right: {
      borderTopRightRadius: 9,
      borderBottomRightRadius: 9,
      marginRight: 20,
    },

    text: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w500,
      lineHeight: 21.6,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },
  });

export default makeStyles;
