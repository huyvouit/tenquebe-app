import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import makeStyles from './styles';
import HeaderPage from 'components/HeaderPage';
import {Theme} from 'constants/theme';
import StatusOrder from 'components/StatusOrder';

const SettlementDetailScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <HeaderPage
        title={'22/07/29(금)'}
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
      <ScrollView style={styles.body}>
        <View style={[styles.flexbox, styles.padding_top]}>
          <Text style={styles.primary_price}>
            101,147 <Text style={styles.sub}>원</Text>
          </Text>
          <StatusOrder statusOrder={'정산예정'} />
        </View>
        <View style={styles.line}></View>
        <FlexboxPrice
          text={'매출금액'}
          value={'109,700 원'}
          subData={[
            {
              key: '- 주문금액',
              value: '104,700 원',
            },
            {
              key: '- 배달팁',
              value: '5,000 원',
            },
          ]}
        />
        <FlexboxPrice text={'고객할인비용'} value={'-1,000 원'} />
        <FlexboxPrice
          text={'차감금액'}
          value={'-5,553 원'}
          subData={[
            {
              key: '- 중개이용료',
              value: '-2,750 원',
            },
            {
              key: '- 결제정산수수료',
              value: '-2,803 원',
            },
          ]}
        />
        <FlexboxPrice text={'결제금액'} value={'-12,000 원'} />
        <FlexboxPrice text={'조정금액'} value={'10,000 원'} />
        <View style={styles.end}>
          <Text style={[styles.sub_key, styles.text_end]}>
            배달수수료는 매 정산주기 7일 후 은행 영업일에 지급니다. 산재보험료는
            별도 정산되고, 비대상인 경우 익월 1차 정산일에 환급됩니다.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettlementDetailScreen;

export const FlexboxPrice = ({text, value, subData}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.content}>
      <View style={[styles.flexbox]}>
        <Text style={styles.key}>{text}</Text>
        <Text style={styles.key}>{value}</Text>
      </View>
      <View style={styles.sub_content}>
        {subData &&
          subData.map((item, index) => (
            <View key={index} style={{...styles.flexbox, paddingTop: 15}}>
              <Text style={styles.sub_key}>{item.key}</Text>
              <Text style={styles.sub_key}>{item.value}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};
