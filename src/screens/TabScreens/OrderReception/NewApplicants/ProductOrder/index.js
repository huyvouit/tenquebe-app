import React from 'react';
import {View, Text} from 'react-native';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';

import TextTitle from 'components/TextTitle';
import StatusOrder from 'components/StatusOrder';

import makeStyles from './styles';

const DATA = [
  {
    id: 0,
    name: '에어컨 바람막이',
    option: '옵션 : 화이트',
    quantity: 2,
    price: '28,000',
  },
  {
    id: 1,
    name: '2021 맥북프로 16인치',
    option: '옵션 : 스페이스그레이, M1 Pro 10코어, 512GB, 16GM',
    quantity: 1,
    price: '3,360,000',
  },
];
export default function ProductOrder(props) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {statusOrder} = props;
  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        <TextTitle title="주문내역" />
        {statusOrder && <StatusOrder statusOrder={statusOrder} />}
      </View>
      {DATA.map((item, index) => {
        return (
          <View
            key={item.id}
            style={[
              styles.item,
              index === DATA.length - 1 && styles.no_border,
            ]}>
            <ItemProduct key={item.id} item={item} />
          </View>
        );
      })}
    </View>
  );
}

export const ItemProduct = ({item}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View>
      <View style={styles.flexbox}>
        <Text style={styles.name_product}>
          {item.name}
          <Text>
            {` X `}
            <Text>{item.quantity}</Text>
          </Text>
        </Text>

        <Text style={styles.name_product}>
          {item.price}
          <Text>원</Text>
        </Text>
      </View>
      <Text style={styles.option}>{item.option}</Text>
    </View>
  );
};
