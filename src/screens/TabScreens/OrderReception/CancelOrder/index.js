import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import useTheme from 'hooks/useTheme';
import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import Icons from 'assets/icons';

import CustomRadioButton from 'components/CustomRadioButton';
import HeaderPage from 'components/HeaderPage';

import makeStyles from './styles';

const REASON = [
  {
    id: 0,
    value: '배송불가지역',
    text: '배송불가지역',
    selected: false,
  },
  {
    id: 1,
    value: '상품정보상이',
    text: '상품정보상이',
    selected: false,
  },
  {
    id: 2,
    value: '배송지연',
    text: '배송지연',
    selected: false,
  },
  {
    id: 3,
    value: '일부 상품 품절',
    text: '일부 상품 품절',
    selected: false,
  },
  {
    id: 4,
    value: '주문제작 불가',
    text: '주문제작 불가',
    selected: false,
  },
  {
    id: 5,
    value: '추가배송비 미입금',
    text: '추가배송비 미입금',
    selected: false,
  },
  {
    id: 6,
    value: '기타',
    text: '기타',
    selected: false,
  },
];

const CancelOrderScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {isOpenModal, setIsOpenModal} = props;
  const [data, setData] = useState(REASON);

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
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpenModal}
      onRequestClose={() => {
        setIsOpenModal(!isOpenModal);
      }}>
      <View style={styles.modalView}>
        <HeaderPage
          title={Route.ORDER_CANCEL}
          leftComponent={
            <TouchableOpacity onPress={() => setIsOpenModal(!isOpenModal)}>
              <SvgXml
                xml={Icons.IconClose}
                color={
                  theme == 'light'
                    ? Theme.colors.blackTitle
                    : Theme.colors.white
                }
                width={20}
                height={20}
              />
            </TouchableOpacity>
          }
        />

        <View style={styles.body}>
          <View style={styles.content}>
            {data.map((item, index) => {
              return (
                <View
                  key={item.id}
                  style={[
                    styles.item_radio,
                    index === data.length - 1 && styles.no_padding,
                  ]}>
                  <CustomRadioButton
                    key={item.id}
                    selected={item.selected}
                    text={item.text}
                    action={() => handleSelectedButton(item)}
                  />
                </View>
              );
            })}

            {data.some((item, index) => item.selected === true) && (
              <TextInput
                style={styles.text_input}
                placeholder="취소 사유를 자세하게 적어주세요."
                placeholderTextColor={Theme.colors.grayText}
                multiline={true}></TextInput>
            )}
          </View>

          <View style={styles.btn}>
            <TouchableOpacity
              style={[styles.buttonClose]}
              onPress={() => setIsOpenModal(!isOpenModal)}>
              <Text
                style={{...styles.textStyle, color: Theme.colors.blueButton}}>
                닫기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                data.some((item, index) => item.selected === true) &&
                  styles.buttonBg,
              ]}>
              <Text style={styles.textStyle}>
                {'주문취소 '}
                {/* {data.some((item, index) => item.selected === true)
                  ? '취소'
                  : '취소 사유를 선택해주세요'} */}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CancelOrderScreen;
