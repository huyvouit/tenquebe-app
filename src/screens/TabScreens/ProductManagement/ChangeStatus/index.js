import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import CustomRadioButton from 'components/CustomRadioButton';
import HeaderPage from 'components/HeaderPage';
import InfoProduct from 'components/InfoProduct';

import makeStyles from './styles';

const STATUS = [
  {
    id: 0,
    value: '판매중',
    text: '판매중',
    selected: false,
  },
  {
    id: 1,
    value: '품절',
    text: '품절',
    selected: false,
  },
  {
    id: 2,
    value: '판매중지',
    text: '판매중지',
    selected: false,
  },
];

const ChangeStatusScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [data, setData] = useState(STATUS);
  const [price, setPrice] = useState('');

  const handleSelectedButton = item => {
    const temp = [...data];
    temp.map((i, index) => {
      if (i.id === item.id && !i.selected) {
        i.selected = true;
      } else {
        i.selected = false;
      }
    });
    setData(temp);
  };
  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.CHANGE_STATUS}
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
        <InfoProduct name="오리모자 우산" option="화이트" />
        <View style={styles.line}></View>
        <View style={styles.content}>
          {data.map((item, index) => {
            return (
              <View key={item.id} style={[styles.item_radio]}>
                <CustomRadioButton
                  key={item.id}
                  selected={item.selected}
                  text={item.text}
                  action={() => handleSelectedButton(item)}
                />
              </View>
            );
          })}
        </View>
        <TouchableOpacity style={styles.button_end}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeStatusScreen;
