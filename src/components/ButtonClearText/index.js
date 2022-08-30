import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Icons from 'assets/icons';
import useTheme from 'hooks/useTheme';

import makeStyles from './styles';

const ButtonClearText = ({action}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity style={styles.button_clear} onPress={action}>
      <SvgXml
        xml={Icons.IconClose}
        color={theme == 'light' ? Theme.colors.white : Theme.colors.dark}
        width={15}
        height={15}
      />
    </TouchableOpacity>
  );
};

export default ButtonClearText;
