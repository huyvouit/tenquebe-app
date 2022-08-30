import useTheme from 'hooks/useTheme';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import makeStyles from './styles';

const CustomRadioButton = ({text, selected, action}) => {
  const styles = makeStyles(useTheme());

  return (
    <View style={styles.rbWrapper}>
      <TouchableOpacity
        style={[styles.rbStyle, selected && styles.rbSelected]}
        onPress={action}>
        {selected && <View style={styles.selected} />}
      </TouchableOpacity>
      <Text style={styles.textStyle} onPress={action}>
        {text}
      </Text>
    </View>
  );
};

export default CustomRadioButton;
