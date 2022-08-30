import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, ScrollView, Animated} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import windowSize from 'constants/windowSize';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import HeaderPage from 'components/HeaderPage';
import InputWithTitle from 'components/InputWithTitle';

import makeStyles from './styles';

const ChangeInformationScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [price, setPrice] = useState('');
  const [isAddDiscount, setIsAddDiscount] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.CHANGE_INFORMATION}
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
        <ScrollView style={styles.content}>
          <View style={styles.normal}>
            <View style={styles.input}>
              <InputWithTitle
                title={'상품명'}
                value={price}
                placeholder={'2021 맥북프로 16인치'}
                actionInput={text => setPrice(text)}
                actionClear={() => setPrice('')}
              />
            </View>
          </View>
          <View style={styles.normal}>
            <View style={styles.input}>
              <InputWithTitle
                title={'정상가'}
                currency
                value={price}
                placeholder={'3,360,000'}
                keyboardType={'numeric'}
                actionClear={() => setPrice('')}
                actionInput={text => setPrice(text)}
              />
            </View>

            <View style={styles.line}></View>
            {!isAddDiscount ? (
              <TouchableOpacity
                style={styles.discount}
                onPress={() => setIsAddDiscount(!isAddDiscount)}>
                <SvgXml
                  xml={Icons.IconIncrease}
                  fill={Theme.colors.blueButton}
                  color={Theme.colors.blueButton}
                  width={windowSize.wScale(14.24)}
                  height={windowSize.wScale(14.24)}
                />
                <Text style={styles.text_discount}>할인가 추가</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.input}>
                <InputWithTitle
                  title={'정상가'}
                  subTitle={'(선택)'}
                  currency
                  value={price}
                  placeholder={''}
                  actionClear={() => setPrice('')}
                  actionInput={text => setPrice(text)}
                />
              </View>
            )}
          </View>
          <View style={styles.normal}>
            <View style={styles.input}>
              <InputWithTitle
                title={'재고'}
                currency
                value={price}
                placeholder={'17000'}
                keyboardType={'numeric'}
                actionInput={text => setPrice(text)}
                actionClear={() => setPrice('')}
              />
            </View>
          </View>
          <View style={[styles.normal, styles.no_padding]}>
            <View style={styles.input}>
              <Text style={styles.label}>상태</Text>
              <View style={styles.flexbox}>
                <TouchableOpacity
                  style={[styles.button_state, styles.button_right]}>
                  <Text>판매중</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button_state, styles.button_right]}>
                  <Text>품절</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_state]}>
                  <Text>판매중지</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.normal, styles.input, styles.no_padding]}>
          <TouchableOpacity style={styles.button_end}>
            <Text style={styles.text}>저장</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangeInformationScreen;
