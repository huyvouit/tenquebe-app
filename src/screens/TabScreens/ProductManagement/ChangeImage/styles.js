import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    container: {
      width: `100%`,
      height: '100%',
      flex: 1,
    },
    body: {
      flex: 1,
    },

    content: {
      flex: 1,
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      height: '100%',
    },

    title: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginHorizontal: 20,
      marginVertical: 15,
    },

    sub: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(14),
      fontWeight: Theme.fonts.fontWeight.w400,
    },
    main: {
      flex: 1,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: 16,
    },

    button_selected: {
      width: windowSize.wScale(171),
      height: windowSize.wScale(171),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: Theme.colors.grayLine,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 4,
      marginBottom: 14,
      position: 'relative',
    },

    clear: {
      position: 'absolute',
      right: '3%',
      top: '3%',
      zIndex: 10,
    },
    text_image: {
      marginTop: 8.25,
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    text_end: {
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      padding: 20,
      paddingBottom: 30,
    },

    //button end
    button_end: click => ({
      marginBottom: 20,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      alignSelf: 'stretch',
      height: 56,
      backgroundColor: click == 5 ? Theme.colors.blueButton : Theme.colors.gray,
    }),

    text: {
      color: Theme.colors.white,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w500,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
  });
export default makeStyles;
