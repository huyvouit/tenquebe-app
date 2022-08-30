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
    },
    flexbox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    item: {
      borderBottomWidth: 1,
      borderBottomColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
      paddingVertical: 15,
    },
    no_border: {
      borderBottomWidth: 0,
      paddingBottom: 0,
    },
    name_product: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 21.6,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },
    option: {
      // flex: 1,
      marginTop: 7,
      fontSize: windowSize.wScale(14),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 16.8,
      color: Theme.colors.grayText,
    },
  });

export default makeStyles;
