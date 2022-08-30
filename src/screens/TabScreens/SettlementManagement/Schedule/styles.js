import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: Theme.colors.grayLine,
    },
    flexbox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flex_start: {
      justifyContent: 'flex-start',
    },

    time: {
      fontSize: windowSize.wScale(24),
      fontWeight: Theme.fonts.fontWeight.w600,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginRight: 10,
    },
    schedule: {
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    price: {
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
