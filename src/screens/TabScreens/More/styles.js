import Product from 'components/Product';
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
      flex: 1,
      // marginBottom: 60,
      // paddingTop: 60,
      paddingBottom: 60,
    },
    main: {
      backgroundColor:
        theme == 'light'
          ? Theme.colors.primaryBackground
          : Theme.colors.primaryBackgroundDark,
      flex: 1,
      marginBottom: 60,
      // paddingTop: 60,
      // paddingBottom: 60,
    },
    header: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    horizontal: val => ({
      paddingHorizontal: val,
    }),

    vertical: val => ({
      paddingVertical: val,
    }),

    flexbox: justify => ({
      flexDirection: 'row',
      justifyContent: justify ? justify : 'flex-start',
      alignItems: 'center',
    }),

    image: {
      width: 60,
      height: 60,
      borderRadius: 100,
      marginRight: 15,
    },

    store: {
      color: Theme.colors.grayText,
      fontSize: windowSize.wScale(18),
      fontWeight: Theme.fonts.fontWeight.w400,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    name: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(24),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    month: {
      color: Theme.colors.blueButton,
      fontWeight: Theme.fonts.fontWeight.w600,
    },
    amount: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    },

    //body

    body: {
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      borderTopWidth: 1,
      borderTopColor:
        theme == 'light'
          ? Theme.colors.grayLine
          : Theme.colors.primaryBackgroundDark,
      paddingHorizontal: 20,
      paddingTop: 25,
      paddingBottom: 30,
      marginBottom: 15,
    },

    //order
    order: {
      backgroundColor:
        theme == 'light' ? '#F3F7FF' : Theme.colors.primaryBackgroundDark,
      borderRadius: 7,
      padding: 20,
      marginBottom: 45,
    },

    title: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontSize: windowSize.wScale(20),
      fontWeight: Theme.fonts.fontWeight.w600,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      marginBottom: 17,
    },
    text_order: {
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontWeight: Theme.fonts.fontWeight.w600,
    },
    line: {
      height: '100%',
      width: 1,
      backgroundColor:
        theme == 'light' ? Theme.colors.grayLine : Theme.colors.dark,
    },

    item: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    //product
    product: {
      // backgroundColor:
      //   theme == 'light' ? '#F3F7FF' : Theme.colors.primaryBackgroundDark,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: Theme.colors.grayLine,
    },

    top: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: Theme.colors.grayLine,
    },

    item_flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      flex: 1,
    },

    border_right: {
      borderRightWidth: 1,
      borderRightColor: Theme.colors.grayLine,
    },
  });
export default makeStyles;
