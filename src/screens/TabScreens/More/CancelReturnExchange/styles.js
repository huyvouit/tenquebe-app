import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: `100%`,
      height: '100%',
      flex: 1,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      //   paddingBottom: 60,
    },
    indicator: {
      justifyContent: 'center',

      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      width: '80%',
      // height: 0,
    },
    title: focused => ({
      color: focused
        ? theme == 'light'
          ? Theme.colors.blackTitle
          : Theme.colors.white
        : Theme.colors.grayText,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      lineHeight: 21.6,
    }),
    quantity_item: {
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w500,
      fontSize: windowSize.wScale(18),
    },
  });
export default makeStyles;
