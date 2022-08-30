import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Images from 'assets/images';

import HeaderPage from 'components/HeaderPage';
import TabItem from 'components/TabItem';

import makeStyles from './styles';

const TAB_TOP = [
  {
    id: 0,

    title: '개인정보 수정',
    dot: false,
    action: Route.PERSON_INFORMATION,
  },
  {
    id: 1,
    title: '비밀번호 수정',
    dot: false,
    action: Route.BUSINESS_MANAGEMENT,
  },
  {
    id: 2,
    title: '영업시간 관리',
    dot: false,
    action: null,
  },
];

const YourAccountScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

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

      <View style={styles.header}>
        <Image source={Images.Default} style={styles.image} />

        <Text style={styles.name}>은행명</Text>
        <Text style={styles.email}>rlawldks@naver.com</Text>
      </View>

      <View style={{marginBottom: 15}}>
        {TAB_TOP.map((item, index) => (
          <TabItem
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            borderTop
            action={() => item.action && props.navigation.navigate(item.action)}
          />
        ))}
      </View>
      <TabItem title={'로그아웃'} notArrow action={() => {}} />
      <TouchableOpacity style={styles.unsub} onPress={() => {}}>
        <Text style={styles.text_unsub}>탈퇴하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourAccountScreen;
