import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = (theme, fontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      width: `100%`,
      height: '100%',
      flex: 1,
    },

    body: {
      marginTop: 15,
      flex: 1,
    },

    input: {
      marginBottom: 40,
    },

    line: {
      height: 1,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    content: {
      marginHorizontal: 20,
      flex: 1,
    },

    top: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      padding: 20,
      marginBottom: 15,
    },
    flexbox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    margin_bottom: {
      marginBottom: 15,
    },

    title: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font18),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 21.6,
    },

    sub_title: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 19.2,
    },

    text_value: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 21.6,
    },

    //closed
    closed: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
      // marginBottom: 15,
      //   backgroundColor: 'red',
    },
    text_left: {
      flex: 1,
      marginRight: 15,
    },

    //bottom
    bottom: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      padding: 20,
      flex: 1,
    },

    //switch
    switch: {
      width: 54,
      height: 30,
      borderRadius: 30,
      padding: 2,
    },
    circle: {
      width: 26,
      height: 26,
      borderRadius: 50,
    },

    text_size: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font20),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 21.6,
    },
  });
export default makeStyles;
