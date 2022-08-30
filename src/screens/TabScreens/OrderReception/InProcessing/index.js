import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';

import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import Card from 'components/Card';

import makeStyles from './styles';
import {SvgXml} from 'react-native-svg';

const InProcessingScreen = props => {
  const styles = makeStyles(useTheme());
  const {data} = props;
  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <ScrollView style={styles.container}>
          <Text style={styles.notify}>
            48시간이 지난 배송내역은 ‘주문관리'에서 확인 가능합니다.
          </Text>
          {data.map(item => {
            return <Card key={item.id} item={item} />;
          })}
        </ScrollView>
      ) : (
        <View style={styles.itemNotFound}>
          <SvgXml xml={Icons.IconDelivery} />
          <Text style={styles.desNotFound}>아직 완료된 배송이 없어요!</Text>
        </View>
      )}
    </View>
  );
};

export default InProcessingScreen;
