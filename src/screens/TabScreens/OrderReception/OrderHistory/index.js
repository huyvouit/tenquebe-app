import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import Icons from 'assets/icons';
import useTheme from 'hooks/useTheme';

import HeaderPage from 'components/HeaderPage';
import ThemeWawe from 'components/ThemeWawe';

import ProductOrder from '../NewApplicants/ProductOrder';
import PaymentDetail from '../NewApplicants/PaymentDetail';
import RequestOrder from '../NewApplicants/RequestOrder';
import DeliveryInformation from '../NewApplicants/DeliveryInformation';

import makeStyles from './styles';

const OrderHistory = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.ORDER_HISTORY}
        leftComponent={
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <SvgXml
              xml={Icons.IconArrowLeft}
              color={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
              fill={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
            />
          </TouchableOpacity>
        }
        borderBottom
      />
      <ScrollView>
        <RequestOrder name="조심히 와주세요:)" />
        <View style={{paddingTop: 15}}>
          <DeliveryInformation timeline />
        </View>
        <View style={{paddingTop: 15}}>
          <ProductOrder statusOrder="결제완료" />
        </View>

        <View style={{paddingTop: 15}}>
          <PaymentDetail />
        </View>
        <ThemeWawe>
          <View style={styles.info}>
            <Text style={styles.textInfo}>
              {`주문일자   `}
              <Text>07/13(수) 10:51</Text>
            </Text>
            <Text style={styles.textInfo}>
              {`주문번호   `}
              <Text>12345678-12345678</Text>
            </Text>
          </View>
        </ThemeWawe>
      </ScrollView>
    </View>
  );
};

export default OrderHistory;
