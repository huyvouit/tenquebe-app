import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, FlatList, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {SvgXml} from 'react-native-svg';
import RBSheet from 'react-native-raw-bottom-sheet';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Route from 'constants/navigationRoute';

import HeaderPage from 'components/HeaderPage';
import InputWithTitle from 'components/InputWithTitle';

import makeStyles from './styles';

const data = [
  {key: '1', value: 'Jammu & Kashmir'},
  {key: '2', value: 'Gujrat'},
  {key: '3', value: 'Maharashtra'},
  {key: '4', value: 'Goa'},
];

const BOTTOM_SHEET = [
  {
    id: 0,
    icon: Icons.IconItem,
    text: '국민은행',
  },
  {
    id: 1,
    icon: Icons.IconItem1,
    text: '하나은행',
  },
  {
    id: 2,
    icon: Icons.IconItem2,
    text: '농협은행',
  },
  {
    id: 3,
    icon: Icons.IconItem3,
    text: '기업은행',
  },
  {
    id: 4,
    icon: Icons.IconItem4,
    text: '수협은행',
  },
  {
    id: 5,
    icon: Icons.IconItem5,
    text: '신한은행',
  },
];
const AccountManagementScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [price, setPrice] = useState('');
  const [tick, setTick] = useState(0);
  const [bankName, setBankName] = useState('');
  const refRBSheet = useRef();

  const renderItem = (item, tick) => {
    return (
      <TouchableOpacity
        style={styles.flexbox(tick, item.text)}
        onPress={() => setTick(item.text)}>
        <View style={styles.left}>
          <View style={styles.icon}>
            <SvgXml xml={item.icon} />
          </View>
          <Text style={styles.text_bank}>{item.text}</Text>
        </View>
        <SvgXml
          xml={Icons.IconTick}
          fill={tick == item.text ? Theme.colors.blueButton : Theme.colors.gray}
          color={
            tick == item.text ? Theme.colors.blueButton : Theme.colors.gray
          }
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.ACCOUNT_MANAGEMENT}
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
        <View style={styles.content}>
          <View style={styles.input}>
            <Text style={styles.label}>은행명</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                refRBSheet.current.open();
              }}>
              <TextInput
                placeholder="은행을 선택해주세요."
                placeholderTextColor={Theme.colors.grayText}
                value={bankName}
                editable={false}
                style={styles.text_input}></TextInput>
              <View style={styles.drop}>
                <SvgXml
                  xml={Icons.IconArrowDown}
                  fill={Theme.colors.blackTitle}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.input}>
            <InputWithTitle
              title={'계좌번호'}
              value={price}
              placeholder={'‘-’를 제외하고 입력해주세요.'}
              position={'15'}
              actionInput={text => setPrice(text)}
              actionClear={() => setPrice('')}
            />
          </View>

          <View style={styles.input}>
            <InputWithTitle
              title={'예금주'}
              value={price}
              placeholder={'예금주를 정확하게 입력해주세요.'}
              position={'15'}
              actionInput={text => setPrice(text)}
              actionClear={() => setPrice('')}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button_end}
          onPress={() => refRBSheet.current.open()}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={600}
        animationType="slide"
        openDuration={1600}
        closeDuration={1000}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          draggableIcon: {
            backgroundColor:
              theme == 'light' ? '#DEDEDE' : Theme.colors.primaryBackgroundDark,
          },
          container: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor:
              theme == 'light' ? Theme.colors.white : Theme.colors.dark,
          },
        }}>
        <HeaderPage title={'은행선택'} />
        <View style={styles.line}></View>
        <View style={styles.content}>
          <FlatList
            data={BOTTOM_SHEET}
            renderItem={({item}) => renderItem(item, tick)}
            keyExtractor={item => item.id}
          />
        </View>
        <TouchableOpacity
          style={[styles.button_end, styles.complete]}
          onPress={() => {
            refRBSheet.current.close();
            setBankName(tick);
          }}>
          <Text style={styles.text}>선택 완료</Text>
        </TouchableOpacity>
      </RBSheet>
    </View>
  );
};

export default AccountManagementScreen;
