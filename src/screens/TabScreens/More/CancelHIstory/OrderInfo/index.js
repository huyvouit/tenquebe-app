import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';

import TextTitle from 'components/TextTitle';

import makeStyles from './styles';
import {SvgXml} from 'react-native-svg';
import Icons from 'assets/icons';

export default function OrderInformation(props) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextTitle title="주문정보" />
      </View>

      {props.data.map((item, index) => {
        return (
          <FlexBoxItem key={index} title={item.title} value={item.value} />
        );
      })}
    </View>
  );
}

const FlexBoxItem = ({title, value}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.flexbox}>
      <Text style={[styles.name]}>{title}</Text>
      <Text style={[styles.name, styles.highlight]}>{value}</Text>
    </View>
  );
};
