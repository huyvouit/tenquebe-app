import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    button_edit: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    },

    text: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w500,
      lineHeight: 21.6,
      color: Theme.colors.blueButton,
      marginLeft: 7,
    },
  });

export default makeStyles;
