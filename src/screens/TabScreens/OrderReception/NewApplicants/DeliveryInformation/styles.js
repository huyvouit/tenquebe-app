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
      // padding: 20,
    },
    header: {
      marginBottom: 15,
    },

    title_header: timeline => ({
      marginTop: 20,
      marginHorizontal: 20,
      marginBottom: timeline ? 20 : 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }),
    time: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 21.6,
      color: Theme.colors.blueButton,
    },
    flexbox: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 10,
      marginHorizontal: 20,
    },
    price: {
      fontSize: windowSize.wScale(20),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w700,
      lineHeight: 21.6,
      color: Theme.colors.blueButton,
    },
    title: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 21.6,
      color: Theme.colors.grayText,
      marginRight: 50,
      // width: 50,
    },
    labels: stepstatus => ({
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 19.2,
    }),
    name: {
      fontSize: windowSize.wScale(18),
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
      lineHeight: 21.6,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      flex: 1,
      textAlign: 'right',
    },
    copy: {
      color: Theme.colors.blueButton,
    },
    timeline: {
      marginBottom: 20,
      paddingBottom: 20,
      // borderBottomWidth: 1,
      // borderBottomColor:
      //   theme == 'light'
      //     ? Theme.colors.grayLine
      //     : Theme.colors.primaryBackgroundDark,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
      marginBottom: 15,
    },
  });

export default makeStyles;
