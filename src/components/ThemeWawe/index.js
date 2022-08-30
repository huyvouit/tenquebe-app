import React from 'react';
import {Theme} from 'constants/theme';
import {View} from 'react-native';

import makeStyles from './styles';
import useTheme from 'hooks/useTheme';

const ThemeWawe = ({children}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.line_circle}>
        {[...Array(13)].map((x, i) => (
          <View key={i} style={styles.circle}></View>
        ))}
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default ThemeWawe;
