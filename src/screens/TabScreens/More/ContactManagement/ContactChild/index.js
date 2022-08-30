import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Card from 'components/Card';

import makeStyles from './styles';
import OrderItem from 'components/OrderItem';
import Route from 'constants/navigationRoute';

const ContactChild = props => {
  const styles = makeStyles(useTheme());
  const {data, result} = props;

  return data.length <= 0 ? (
    <View style={styles.empty}>
      <SvgXml xml={Icons.IconEmptyInquiry} />
      <Text style={styles.notify}>문의사항이 없어요!</Text>
    </View>
  ) : (
    <ScrollView style={styles.container}>
      {data.map(item => {
        return (
          <OrderItem
            key={item.id}
            {...item}
            actionPrimary={() =>
              props.navigation.navigate(Route.INQUIRY_DETAIL, {
                result: result,
              })
            }
          />
        );
      })}
    </ScrollView>
  );
};

export default ContactChild;
