import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      width: `100%`,
      height: '100%',
      flex: 1,
    },
    body: {
      flex: 1,
    },

    content: {
      flex: 1,
    },

    button_end: {
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',

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

    no_padding: {
      marginBottom: 0,
    },

    input: {
      padding: 20,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },
    normal: {
      marginBottom: 15,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },

    bonus: {
      flex: 1,

      height: 300,
    },
    flex: (justify, align) => ({
      flexDirection: 'row',
      alignItems: align,
      justifyContent: justify,
    }),

    padding_top: {
      paddingTop: 30,
    },
    name: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      width: 100,
    },

    value: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      flex: 1,
    },

    colorText: color => ({
      color: color,
    }),

    line: {
      height: 1,
      marginVertical: 25,
      backgroundColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
    },

    label: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: 15,
    },

    flexbox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button_selected: {
      width: windowSize.wScale(142),
      height: windowSize.wScale(142),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Theme.colors.grayLine,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 4,
      marginBottom: 14,
    },

    image: {
      width: '100%',
      height: '100%',
    },
  });
export default makeStyles;
