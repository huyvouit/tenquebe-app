import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import useTheme from 'hooks/useTheme';
import Route from 'constants/navigationRoute';

import InfoProduct from 'components/InfoProduct';

import makeStyles from './styles';

const Product = ({data, navigation}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Route.PRODUCT_DETAIL)}>
      <InfoProduct
        name={data.name}
        option={data.option}
        status={data.status}
        price={data.price}
        arrowRight
      />
      <View style={styles.view}>
        <TouchableOpacity
          style={[styles.button, styles.left]}
          onPress={() => navigation.navigate(Route.CHANGE_PRICE)}>
          <Text style={styles.text}>가격변경</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.right]}
          onPress={() => navigation.navigate(Route.CHANGE_STATUS)}>
          <Text style={styles.text}>상태변경</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
