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
import {DarkModeContext} from 'hooks/useDarkMode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabItem from 'components/TabItem';

const ServicePolicyScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const {toggleDarkMode} = useContext(DarkModeContext);

  const [on, setOn] = useState(false);
  const [textSize, setTextSize] = useState('보통');

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
      <TabItem
        title={Route.PRIVACY_POLICY}
        borderBottom
        action={() => props.navigation.navigate(Route.PRIVACY_POLICY)}
      />
      <TabItem
        title={Route.TERMS_OF_SERVICE}
        borderBottom
        action={() => props.navigation.navigate(Route.TERMS_OF_SERVICE)}
      />
    </View>
  );
};

export default ServicePolicyScreen;
