import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: check => ({
      backgroundColor:
        theme == 'light'
          ? check
            ? Theme.colors.primaryBackground
            : Theme.colors.white
          : check
          ? Theme.colors.primaryBackgroundDark
          : Theme.colors.dark,
      width: `100%`,
      height: '100%',
      flex: 1,
    }),

    body: {
      flex: 1,
    },

    line: {
      marginBottom: 10,
      height: 1,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },
    content: {
      flex: 1,
    },

    header: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },

    header_content: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      marginBottom: 15,
      borderBottomWidth: 0,
    },

    title: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: 10,
      lineHeight: 21.6,
    },

    sub: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(16),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      lineHeight: 19.2,
    },

    questions: {
      padding: 20,
    },

    text_questions: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,

      lineHeight: 24,
    },

    answer: {
      padding: 20,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      //   flex: 1,
      height: '100%',
    },
    input: {
      marginTop: 15,
      padding: 20,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.backgroundInput
          : Theme.colors.primaryBackgroundDark,
      height: windowSize.wScale(207),
      borderRadius: 7,
      textAlignVertical: 'top',
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.grayText,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    view_answer: {
      padding: 20,
      backgroundColor: '#F3F7FF',
      //   height: windowSize.wScale(207),
      borderRadius: 7,
    },
    //button
    button_end: {
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      alignSelf: 'stretch',
      height: 56,
      backgroundColor: Theme.colors.blueButton,
    },

    text: {
      color: Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
