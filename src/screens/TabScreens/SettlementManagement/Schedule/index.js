import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import StatusOrder from 'components/StatusOrder';

import makeStyles from './styles';

const Schedule = ({time, status}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <View style={styles.flexbox}>
        <View style={[styles.flexbox, styles.flex_start]}>
          <Text style={styles.time}>{time}</Text>
          <StatusOrder statusOrder={status} />
        </View>

        <SvgXml
          xml={Icons.IconArrowRight}
          width={16}
          height={16}
          fill={theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white}
          color={
            theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
          }
        />
      </View>
      <View style={{...styles.flexbox, marginTop: 15}}>
        <Text style={styles.schedule}>정산 예정액</Text>
        <Text style={styles.price}>1,234,567원</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Schedule;
