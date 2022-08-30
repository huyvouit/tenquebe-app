import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Card from 'components/Card';

import makeStyles from './styles';
import OrderItem from 'components/OrderItem';
import Route from 'constants/navigationRoute';

const NewRequestScreen = props => {
  const styles = makeStyles(useTheme());
  const {data} = props;

  return data.length <= 0 ? (
    <View style={styles.empty}>
      <SvgXml xml={Icons.IconInProcess} />
      <Text style={styles.notify}>완료내역이 없습니다.</Text>
    </View>
  ) : (
    <ScrollView style={styles.container}>
      {data.map(item => {
        return (
          <OrderItem
            key={item.id}
            {...item}
            actionPrimary={() =>
              props.navigation.navigate(Route.CANCEL_HISTORY)
            }
            // status={item.status}
            // desc={item.desc}
            // name={item.name}
            // textColor={item.textColor}
          />
        );
      })}
    </ScrollView>
  );
};

export default NewRequestScreen;
