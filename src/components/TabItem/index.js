import React from 'react';
import {Theme} from 'constants/theme';
import {Text, TouchableOpacity, View} from 'react-native';

import makeStyles from './styles';
import useTheme from 'hooks/useTheme';
import {SvgXml} from 'react-native-svg';
import Icons from 'assets/icons';

const TabItem = ({
  icon,
  title,
  subTitle,
  dot,
  text,
  notArrow,
  action,
  borderTop,
  borderBottom,
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        borderTop && styles.border_top,
        borderBottom && styles.border_bottom,
      ]}
      onPress={action}>
      <View style={styles.left}>
        {icon && (
          <SvgXml
            xml={icon}
            fill={
              theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
            }
            color={
              theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
            }
          />
        )}
        <Text style={styles.title(icon)}>
          {title}{' '}
          <Text style={[styles.title(icon), styles.sub]}>{subTitle}</Text>
        </Text>
        {dot && <View style={styles.dot}></View>}
      </View>

      <View style={styles.right}>
        {!notArrow && (
          <SvgXml
            xml={Icons.IconArrowRight}
            fill={
              theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
            }
          />
        )}
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;
