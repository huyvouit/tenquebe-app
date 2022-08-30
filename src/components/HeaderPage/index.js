import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import useTheme from 'hooks/useTheme';

import makeStyles from './styles';

const HeaderPage = ({title, leftComponent, rightComponent, borderBottom}) => {
  const styles = makeStyles(useTheme());
  return (
    <View style={[styles.container, borderBottom && styles.borderBottom]}>
      <View style={styles.back}>{leftComponent}</View>
      {title && <Text style={styles.titlePage}>{title.toUpperCase()}</Text>}
      <View style={styles.right}>{rightComponent}</View>
    </View>
  );
};

export default HeaderPage;
