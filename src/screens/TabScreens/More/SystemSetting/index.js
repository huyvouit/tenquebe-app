import React, {useState, useEffect, useRef, useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Route from 'constants/navigationRoute';
import HeaderPage from 'components/HeaderPage';

import makeStyles from './styles';
import SwitchToggle from 'react-native-switch-toggle';
import DatePicker from 'react-native-date-picker';
import TextTitle from 'components/TextTitle';
import {DarkModeContext} from 'hooks/useDarkMode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFontSize from 'hooks/useFont';

const SystemSettingScreen = props => {
  const theme = useTheme();
  const {fontSize} = useFontSize();

  const styles = makeStyles(theme, fontSize);

  const {toggleDarkMode} = useContext(DarkModeContext);

  const [on, setOn] = useState(false);

  useEffect(() => {
    (async () => {
      const temp = await AsyncStorage.getItem('darkMode');
      if (temp == 'light') {
        setOn(false);
      } else {
        setOn(true);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.SYSTEM_SETTING}
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

      <View style={styles.closed}>
        <View style={[styles.flexbox]}>
          <View style={styles.text_left}>
            <Text style={{...styles.title, marginBottom: 10}}>
              다크모드 (어둠모드)
            </Text>
            <Text style={styles.sub_title}>
              전반적인 화면배경이 검정으로 세팅됩니다.
            </Text>
          </View>
          <SwitchToggle
            switchOn={on}
            onPress={() => {
              setOn(!on);
              toggleDarkMode();
            }}
            circleColorOff={Theme.colors.white}
            circleColorOn={Theme.colors.white}
            backgroundColorOn={Theme.colors.blueButton}
            backgroundColorOff={Theme.colors.gray}
            containerStyle={styles.switch}
            circleStyle={styles.circle}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.closed}
        onPress={() => props.navigation.navigate(Route.TEXT_SIZE)}>
        <View style={[styles.flexbox]}>
          <Text style={styles.text_size}>글자크기</Text>
          <View style={[styles.flexbox]}>
            <Text
              style={{
                ...styles.title,
                color: Theme.colors.grayText,
                fontWeight: Theme.fonts.fontWeight.w400,
              }}>
              {fontSize}
            </Text>
            <View style={{marginLeft: 10}}>
              <SvgXml
                xml={Icons.IconArrowRight}
                width={16}
                height={16}
                fill={
                  theme == 'light'
                    ? Theme.colors.blackTitle
                    : Theme.colors.white
                }
                color={
                  theme == 'light'
                    ? Theme.colors.blackTitle
                    : Theme.colors.white
                }
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SystemSettingScreen;
