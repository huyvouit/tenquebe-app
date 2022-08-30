import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      width: `100%`,
      height: 'auto',
      padding: 20,
      paddingBottom: 10,
    },
    header: {
      marginBottom: 15,
    },
    flexbox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    // price: redColor => ({
    //   fontSize: windowSize.wScale(20),
    //   fontFamily: Theme.fonts.fontFamily.Pretendard,
    //   fontWeight: Theme.fonts.fontWeight.w700,
    //   lineHeight: 21.6,
    //   color: redColor ? Theme.colors.redButton : Theme.colors.blueButton,
    // }),
    currency: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 21.6,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },
    name: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 21.6,
      color: Theme.colors.grayText,
    },
    highlight: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },
  });

export default makeStyles;
