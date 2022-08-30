import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import useTheme from 'hooks/useTheme';

const PAYMENT_COMPLETED = '결제완료';
const CANCELATION = '취소';
const DEPOSITED = '입금예정';
const IN_TRANSITION = '배달중';
const DELIVERY_COMPLETED = '배달완료';
const SCHEDULE = '정산예정';

import makeStyles from './styles';

const StatusOrder = ({statusOrder}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity style={[styles.status]}>
      {statusOrder === CANCELATION ? (
        <Text
          style={{
            color: '#FF0000',
          }}>
          {statusOrder}
        </Text>
      ) : statusOrder === DEPOSITED ? (
        <Text
          style={{
            color: '#253FEB',
          }}>
          {statusOrder}
        </Text>
      ) : statusOrder === IN_TRANSITION ? (
        <Text
          style={{
            color: '#1FC88F',
          }}>
          {statusOrder}
        </Text>
      ) : statusOrder === SCHEDULE ? (
        <Text
          style={{
            color: '#9A00D0',
          }}>
          {statusOrder}
        </Text>
      ) : (
        <Text
          style={{
            color: '#9096AC',
          }}>
          {statusOrder}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default StatusOrder;
