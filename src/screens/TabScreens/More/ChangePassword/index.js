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

const ChangePasswordScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [showEye, setShowEye] = useState(true);

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

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.CHANGE_PASSWORD}
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
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{oldPassword: '', password: '', confirmPassword: ''}}
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
          <View style={styles.body}>
            <View style={styles.content}>
              <View style={styles.input}>
                <InputWithTitle
                  title={'기존 비밀번호'}
                  textName="oldPassword"
                  value={values.oldPassword}
                  placeholder={'기존 비밀번호를 입력해주세요.'}
                  position={'45'}
                  positionEye={'15'}
                  actionInput={handleChange('oldPassword')}
                  actionBlur={handleBlur('oldPassword')}
                  actionClear={handleReset}
                  actionEye={() => setShowEye(!showEye)}
                  showPass={showEye}
                  isShowEye={true}
                  error={errors.oldPassword}
                />
              </View>
              <View style={styles.input}>
                <InputWithTitle
                  title={'새로운 비밀번호'}
                  textName="password"
                  value={values.password}
                  placeholder={'4자리 이상 12자리 미만'}
                  position={'45'}
                  positionEye={'15'}
                  actionInput={handleChange('password')}
                  actionBlur={handleBlur('password')}
                  actionClear={handleReset}
                  actionEye={() => setShowEye(!showEye)}
                  showPass={showEye}
                  isShowEye={true}
                  error={errors.password}
                />
              </View>

              <View style={styles.input}>
                <InputWithTitle
                  title={'새로운 비밀번호 확인'}
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
            </View>
            <TouchableOpacity style={styles.button_end} onPress={() => {}}>
              <Text style={styles.text}>저장</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ChangePasswordScreen;
