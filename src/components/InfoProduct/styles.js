import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    info: {
      marginLeft: 10,
      flex: 1,
    },

    name_product: {
      fontSize: windowSize.wScale(20),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w600,
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
    status_price: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 7,
    },
    status: {
      fontSize: windowSize.wScale(16),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 19.2,
      color: Theme.colors.grayText,
    },
    price: {
      fontSize: windowSize.wScale(16),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 19.2,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      marginLeft: 10,
    },
  });
export default makeStyles;
