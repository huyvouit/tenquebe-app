import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SelectList from 'react-native-dropdown-select-list';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Route from 'constants/navigationRoute';

import HeaderPage from 'components/HeaderPage';
import InputWithTitle from 'components/InputWithTitle';

import makeStyles from './styles';

const Login = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [showEye, setShowEye] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <SvgXml xml={Icons.Logo} />
        <View style={styles.text}>
          <SvgXml xml={Icons.TextLogo} />
        </View>
      </View>
      <View style={styles.input}>
        <InputWithTitle
          value={email}
          placeholder={'이메일을 입력해주세요.'}
          actionInput={text => setEmail(text)}
          notClear
        />
        <View style={{marginTop: 15}}>
          <InputWithTitle
            value={password}
            placeholder={'비밀번호를 입력해주세요.'}
            actionInput={text => setPassword(text)}
            actionEye={() => setShowEye(!showEye)}
            positionEye={'15'}
            notClear
            isShowEye
            showPass={showEye}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button_end}
        onPress={() => props.navigation.navigate(Route.TAB)}>
        <Text style={styles.text_btn}>시작하기</Text>
      </TouchableOpacity>

      <View style={styles.wrapper}>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.find_id}>
            <Text style={styles.text_find}>아이디 찾기</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.find_pass}>
            <Text style={styles.text_find}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
