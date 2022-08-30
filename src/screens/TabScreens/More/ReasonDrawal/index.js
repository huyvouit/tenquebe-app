import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
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
import ModalUnSubscribe from '../ModalUnSubscribe';

import makeStyles from './styles';

const REASON = [
  {
    id: 0,
    value: '점포를 폐업해서',
    text: '점포를 폐업해서',
    selected: false,
  },
  {
    id: 1,
    value: '다른 사이트가 더 좋아서',
    text: '다른 사이트가 더 좋아서',
    selected: false,
  },
  {
    id: 2,
    value: '이용이 불편하고 장애가 많아서',
    text: '이용이 불편하고 장애가 많아서',
    selected: false,
  },
  {
    id: 3,
    value: '사용 빈도가 낮아서',
    text: '사용 빈도가 낮아서',
    selected: false,
  },
  {
    id: 4,
    value: '삭제하고 싶은 내용이 있어서',
    text: '삭제하고 싶은 내용이 있어서',
    selected: false,
  },
  {
    id: 5,
    value: '원하는 기능이 없어서',
    text: '원하는 기능이 없어서',
    selected: false,
  },
  {
    id: 6,
    value: '기타',
    text: '기타',
    selected: false,
  },
];

const ReasonDrawalScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
    <View style={styles.modalView}>
      <HeaderPage
        title={Route.REASON_DRAWAL}
        leftComponent={
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <SvgXml
              xml={Icons.IconArrowLeft}
              fill={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
              color={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
              width={20}
              height={20}
            />
          </TouchableOpacity>
        }
      />

      <ScrollView style={styles.body}>
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
          {/* <TouchableOpacity
            style={[styles.buttonClose]}
            onPress={() => setIsOpenModal(!isOpenModal)}>
            <Text style={{...styles.textStyle, color: Theme.colors.blueButton}}>
              닫기
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={[
              styles.button,
              data.some((item, index) => item.selected === true) &&
                styles.buttonBg,
            ]}
            onPress={() => setIsOpenModal(true)}>
            <Text style={styles.textStyle}>
              {'탈퇴하기'}
              {/* {data.some((item, index) => item.selected === true)
                  ? '취소'
                  : '취소 사유를 선택해주세요'} */}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ModalUnSubscribe
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </View>
  );
};

export default ReasonDrawalScreen;
