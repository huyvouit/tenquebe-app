import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import HeaderPage from 'components/HeaderPage';
import ThemeWawe from 'components/ThemeWawe';

import RequestOrder from 'screens/TabScreens/OrderReception/NewApplicants/RequestOrder';
import ProductOrder from 'screens/TabScreens/OrderReception/NewApplicants/ProductOrder';
import PaymentDetail from 'screens/TabScreens/OrderReception/NewApplicants/PaymentDetail';
import DeliveryInformation from 'screens/TabScreens/OrderReception/NewApplicants/DeliveryInformation';

import makeStyles from './styles';
import Route from 'constants/navigationRoute';
import OrderInformation from './OrderInfo';

const DATA = [
  {
    title: '주문일자',
    value: '07/13(수) 10:51',
  },
  {
    title: '주문번호',
    value: '12345678-12345678',
  },
  {
    title: '취소요청일',
    value: '08/08(월) 11:23',
  },
];
const CancelHistoryScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.CANCEL_HISTORY}
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
      />
      <ScrollView>
        <RequestOrder title={'취소사유'} name="잘못시켰습니다." />
        {/* <View style={{paddingTop: 15}}>
          <DeliveryInformation timeline />
        </View> */}
        <View style={{paddingTop: 15}}>
          <OrderInformation data={DATA} />
        </View>
        <View style={{paddingTop: 15}}>
          <ProductOrder />
        </View>

        <View style={{paddingTop: 15}}>
          <PaymentDetail redColor />
        </View>
      </ScrollView>
      <View style={styles.button_end}>
        <TouchableOpacity style={[styles.button, styles.outline]}>
          <Text style={[styles.textBtn, styles.text_outline]}>보류</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>승인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CancelHistoryScreen;
