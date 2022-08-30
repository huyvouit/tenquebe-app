import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';

import TextTitle from 'components/TextTitle';

import makeStyles from './styles';
import {SvgXml} from 'react-native-svg';
import Icons from 'assets/icons';

export default function PaymentDetail(props) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextTitle title="결제 상세" />
      </View>

      <FlexBoxItem title="주문금액" value="3,416,000원" />
      <FlexBoxItem title="할인금액" value="-270,000원" />
      <FlexBoxItem title="배달비" value="+2,500원" />
      <FlexBoxItem title="결제수단" value="계좌이체" />

      <View style={styles.line}>
        <SvgXml xml={Icons.IconLine} />
      </View>

      <View style={styles.flexbox}>
        <Text style={[styles.name, styles.highlight]}>결제금액</Text>
        <Text style={[styles.price(props.redColor)]}>
          3,148,500 <Text style={styles.currency}>원</Text>
        </Text>
      </View>
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
