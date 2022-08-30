import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import makeStyles from './styles';

const ButtonEdit = ({action}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity style={styles.button_edit} onPress={action}>
      <SvgXml
        xml={Icons.IconEdit}
        color={Theme.colors.blueButton}
        fill={Theme.colors.blueButton}
        width={15}
        height={15}
      />
      <Text style={styles.text}>수정</Text>
    </TouchableOpacity>
  );
};

export default ButtonEdit;
