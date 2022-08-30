import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import HeaderPage from 'components/HeaderPage';
import InfoProduct from 'components/InfoProduct';
import InputWithTitle from 'components/InputWithTitle';

import makeStyles from './styles';

const ChangePriceScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [price, setPrice] = useState('');

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.CHANGE_PRICE}
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
      <View style={styles.body}>
        <InfoProduct
          name="오리모자 우산"
          option="화이트"
          // status={'판매중'}
          // price={'17,000원'}
        />
        <View style={styles.line}></View>
        <View style={styles.content}>
          <View style={styles.input}>
            <InputWithTitle
              title={'정상가'}
              currency
              value={price}
              placeholder={'17000'}
              keyboardType={'numeric'}
              actionInput={text => setPrice(text)}
              actionClear={() => setPrice('')}
            />
          </View>
          <View style={styles.input}>
            <InputWithTitle
              title={'할인가'}
              subTitle={'(선택)'}
              currency
              value={price}
              placeholder={'17000'}
              keyboardType={'numeric'}
              actionInput={text => setPrice(text)}
              actionClear={() => setPrice('')}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button_end}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePriceScreen;
