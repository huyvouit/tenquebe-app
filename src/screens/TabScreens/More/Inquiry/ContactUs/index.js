import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Formik} from 'formik';
import * as yup from 'yup';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Route from 'constants/navigationRoute';

import HeaderPage from 'components/HeaderPage';
import InputWithTitle from 'components/InputWithTitle';

import makeStyles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';

const BOTTOM_SHEET = [
  {
    id: 0,
    icon: Icons.IconItem,
    text: '서비스 이용문의',
  },
  {
    id: 1,
    icon: Icons.IconItem1,
    text: '하나은행',
  },
  {
    id: 2,
    icon: Icons.IconItem2,
    text: '회원정보 문의',
  },
  {
    id: 3,
    icon: Icons.IconItem3,
    text: '업데이트 문의',
  },
  {
    id: 4,
    icon: Icons.IconItem4,
    text: '라이더 문의',
  },
  {
    id: 5,
    icon: Icons.IconItem5,
    text: '기타',
  },
];

const ContactUs = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const refRBSheet = useRef();
  const [tick, setTick] = useState('서비스 이용문의');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const [classification, setClassification] = useState('서비스 이용문의');

  const loginValidationSchema = yup.object().shape({
    oldPassword: yup
      .string()
      .min(4, ({min}) => `${min}자리 이상 12자리 미만`)
      .required('암호를 입력하십시오.'),
    password: yup
      .string()
      .min(4, ({min}) => `${min}자리 이상 12자리 미만`)
      .required('암호를 입력하십시오.'),
    confirmPassword: yup
      .string()
      .min(4, ({min}) => `${min}자리 이상 12자리 미만`)
      .required('암호를 입력하십시오.'),
  });

  const renderItem = (item, tick) => {
    return (
      <TouchableOpacity
        style={styles.flexbox}
        onPress={() => setTick(item.text)}>
        <View style={styles.left}>
          <Text style={styles.text_bank}>{item.text}</Text>
        </View>
        {tick == item.text && (
          <SvgXml
            xml={Icons.IconTick}
            fill={Theme.colors.blueButton}
            color={
              tick == item.text ? Theme.colors.blueButton : Theme.colors.gray
            }
          />
        )}
      </TouchableOpacity>
    );
  };

  const renderBottomSheet = () => {
    return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={570}
        animationType="slide"
        openDuration={1500}
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
        <HeaderPage
          title={'상담분류'}
          rightComponent={
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
                setTick(classification);
              }}>
              <SvgXml
                xml={Icons.IconClose}
                color={
                  theme == 'light'
                    ? Theme.colors.blackTitle
                    : Theme.colors.white
                }
                width={26}
                height={26}
              />
            </TouchableOpacity>
          }
        />
        <View style={styles.line}></View>
        <View style={styles.content1}>
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
            setClassification(tick);
          }}>
          <Text style={styles.text}>선택 완료</Text>
        </TouchableOpacity>
      </RBSheet>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.content}>
          <View style={styles.input}>
            <InputWithTitle
              title={'이름'}
              value={name}
              placeholder={'이름을 입력해주세요.'}
              position={'15'}
            />
          </View>
          <View style={styles.input}>
            <InputWithTitle
              title={'답변 받을 이메일'}
              value={email}
              placeholder={'이메일을 입력해주세요.'}
              position={'15'}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>
              문의 분류
              <Text style={styles.require}>*</Text>
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                refRBSheet.current.open();
                setTick(classification);
              }}>
              <TextInput
                placeholder="선택해주세요."
                placeholderTextColor={Theme.colors.grayText}
                value={classification}
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
              title={'제목'}
              value={subject}
              placeholder={'비밀번호 재입력'}
              position={'15'}
              require
            />
          </View>

          <View style={styles.input}>
            <InputWithTitle
              title={'문의내용'}
              placeholder={'배송관련 문제를 어떻게 해결해야할지 모르겠습니다.'}
              position={'15'}
              require
              textarea
              notClear
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button_end} onPress={() => {}}>
          <Text style={styles.text}>등록하기</Text>
        </TouchableOpacity>
        {renderBottomSheet()}
      </View>
    </ScrollView>
  );
};

export default ContactUs;
