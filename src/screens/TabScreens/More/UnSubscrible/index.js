import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
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

const DIRECTION = [
  '더이상 해당 계정으로 Visual Order에 로그인할 수 없게 됩니다.',
  '탈퇴시, 계정관련 모든 정보는 재가입할 경우에도 복구할 수 없습니다.',
  '기기 변경의 경우, 탈퇴가 아닌 Visual Order 계정으로 재로그인시 복원이 가능합니다.',
];
const UnSubscribleScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [showEye, setShowEye] = useState(true);

  const loginValidationSchema = yup.object().shape({
    confirmPassword: yup
      .string()
      .min(4, ({min}) => `${min}자리 이상 12자리 미만`)
      .required('암호를 입력하십시오.'),
  });

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.UNSUBSCRIBE}
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
            <Text style={styles.label}>탈퇴시 주의사항</Text>
            <View style={styles.direction}>
              {DIRECTION.map((item, index) => (
                <View key={index} style={{flexDirection: 'row'}}>
                  <Text style={styles.text_direction}>{'\u2022'}</Text>
                  <Text
                    style={{
                      ...styles.text_direction,
                      flex: 1,
                      paddingLeft: 10,
                    }}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.input}>
            <Text style={styles.label}>은행명</Text>
            <Text style={styles.email}>rlawldks@naver.com</Text>
          </View>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{confirmPassword: ''}}
            onSubmit={values => console.log(values)}>
            {({
              handleChange,
              handleBlur,
              handleReset,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <View style={styles.input}>
                <InputWithTitle
                  title={'비밀번호 확인'}
                  textName="confirmPassword"
                  value={values.confirmPassword}
                  placeholder={'비밀번호 재입력'}
                  position={'45'}
                  positionEye={'15'}
                  actionInput={handleChange('confirmPassword')}
                  actionBlur={handleBlur('confirmPassword')}
                  actionClear={handleReset}
                  actionEye={() => setShowEye(!showEye)}
                  showPass={showEye}
                  isShowEye={true}
                  error={errors.confirmPassword}
                />
              </View>
            )}
          </Formik>
        </View>
        <TouchableOpacity style={styles.button_end} onPress={() => {}}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UnSubscribleScreen;
