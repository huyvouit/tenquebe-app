import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import {StyleSheet, Dimensions} from 'react-native';

const makeStyles = theme =>
  StyleSheet.create({
    rbWrapper: {
      // marginTop: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    textStyle: {
      marginLeft: 10,
      fontSize: windowSize.wScale(18),
      color: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      fontWeight: Theme.fonts.fontWeight.w400,
    },
    rbStyle: {
      height: 24,
      width: 24,
      borderRadius: 110,
      borderWidth: 1,
      borderColor: Theme.colors.gray,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Theme.colors.white,
    },
    rbSelected: {
      backgroundColor: Theme.colors.blueButton,
      borderColor: Theme.colors.blueButton,
    },
    selected: {
      // marginTop: 10,
      width: 12,
      height: 12,
      borderRadius: 55,
      backgroundColor: Theme.colors.white,
    },
    result: {
      marginTop: 22,
      color: 'white',
      fontWeight: '600',
      backgroundColor: 'blue',
    },
  });

export default makeStyles;
