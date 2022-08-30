import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {Dropdown} from 'react-native-material-dropdown-v2';
import {SvgXml} from 'react-native-svg';
import RBSheet from 'react-native-raw-bottom-sheet';

import Route from 'constants/navigationRoute';
import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import HeaderPage from 'components/HeaderPage';

import makeStyles from './styles';
import OrderItem from 'components/OrderItem';

const DATA_FAKE = [
  {
    id: 1,
    title: '문의사항 제목',
    date: '(22/05/05 요청)',
    fontSize: 16,
    status: '신규',
  },
  {
    id: 2,
    title: '문의사항 제목',
    date: '(22/05/05 요청)',
    fontSize: 16,
    status: '업데이트',
  },
  {
    id: 3,
    title:
      '문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 ',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
  {
    id: 4,
    title:
      '문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 ',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
  {
    id: 5,
    title:
      '문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 ',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
  {
    id: 6,
    title:
      '문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 ',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
  {
    id: 7,
    title:
      '문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 ',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
  {
    id: 8,
    title:
      '문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 ',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
];

export default function AnnoucementScreen(props) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [select, setSelect] = useState('');

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.YOUR_ACCOUNT}
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

      <ScrollView style={styles.content}>
        {DATA_FAKE.map((item, index) => {
          return (
            <OrderItem
              key={item.id}
              {...item}
              actionPrimary={() =>
                props.navigation.navigate(Route.INQUIRY_DETAIL, {
                  result: true,
                })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
