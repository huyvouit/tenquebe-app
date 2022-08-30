import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {SvgXml} from 'react-native-svg';
import RBSheet from 'react-native-raw-bottom-sheet';

import Route from 'constants/navigationRoute';
import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import HeaderPage from 'components/HeaderPage';

import ListButtonTime from 'components/ListButtonTime';
import StatusOrder from 'components/StatusOrder';

import makeStyles from './styles';

const LIST_BTN = [
  {
    id: 1,
    text: '1개월',
    action: () => {},
  },
  {
    id: 2,
    text: '1주일',
    action: () => {},
  },
  {
    id: 3,
    text: '3개월',
    action: () => {},
  },
  {
    id: 4,
    text: '6개월',
    action: () => {},
  },
];

const DATA_FAKE = [
  {
    id: 1,
    status: '결제완료',
    timestamp: '8/10(수) 20:22',
    title: '에어컨 바람막이 외 5개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: '접수',
    total: '217,000원',
  },
  {
    id: 2,
    status: '취소',
    timestamp: '8/10(수) 20:22',
    title: '오리모자 우산 외 1개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: 'round',
    total: '217,000원',
  },
  {
    id: 3,
    status: '입금예정',
    timestamp: '8/10(수) 20:22',
    title: '필리핀 Dole 반반한 바나나 (당일 직송배달 시작)외 1개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: '',
    total: '217,000원',
  },
];

const OrderTab = ({item, action}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={action}>
      <View style={styles.left}>
        <View style={styles.header}>
          <StatusOrder statusOrder={item.status} />

          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.right}>
        <SvgXml
          xml={Icons.IconArrowRight}
          width={16}
          height={16}
          fill={theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white}
          color={
            theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
          }
        />
      </View>
    </TouchableOpacity>
  );
};
export default function CompleteOrderHistoryScreen(props) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.COMPLETE_ORDER_HISTORY}
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
      {/* top */}
      <View style={styles.header_schedule}>
        <View style={{...styles.flexbox}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}
            style={{flex: 1}}>
            <TextInput
              placeholder="임시 휴무일을 선택해주세요."
              placeholderTextColor={Theme.colors.grayText}
              editable={false}
              style={styles.text_input1}></TextInput>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.btn_search}>
            <Text style={[styles.text]}>조회</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list_button}>
          <ListButtonTime listBtn={LIST_BTN} />
        </View>
      </View>

      {/* list */}
      {false ? (
        <View style={styles.body}>
          <SvgXml xml={Icons.IconDelivery} />
          {isSearch ? (
            <Text style={styles.notify}>
              조회된 날짜에 완료된 배송이 없어요!
            </Text>
          ) : (
            <Text style={styles.notify}>아직 완료된 배송이 없어요!</Text>
          )}
        </View>
      ) : (
        <>
          <ScrollView style={styles.content}>
            {DATA_FAKE.map((item, index) => {
              return (
                <OrderTab
                  key={item.id}
                  item={item}
                  action={() => props.navigation.navigate(Route.ORDER_DETAIL)}
                />
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
}
