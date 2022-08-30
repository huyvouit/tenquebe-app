import React, {useState, useEffect, useRef} from 'react';
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

const BusinessManagementScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [on, setOn] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const data = ['월', '화', '수', '목', '금'];

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.BUSINESS_MANAGEMENT}
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
      <TouchableOpacity
        style={styles.top}
        activeOpacity={0.7}
        onPress={() => props.navigation.navigate(Route.BUSINESS)}>
        <View style={[styles.flexbox, styles.margin_bottom]}>
          <TextTitle title="영업일" />
          <SvgXml
            xml={Icons.IconArrowRight}
            fill={
              theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
            }
            width={16}
            height={12}
          />
        </View>

        <View style={[styles.flexbox, styles.margin_bottom]}>
          <View style={[styles.flexbox]}>
            {data.map((item, index) => {
              return index == data.length - 1 ? (
                <Text key={index} style={styles.sub_title}>
                  {item}
                </Text>
              ) : (
                <View key={index} style={[styles.flexbox]}>
                  <Text style={styles.sub_title}>{item}</Text>
                  <Text style={{marginHorizontal: 3}}> {'\u2022'}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.text_value}>09:30 ~ 18:00</Text>
        </View>

        <View style={[styles.flexbox]}>
          <View style={[styles.flexbox]}>
            {data.map((item, index) => {
              return index == data.length - 1 ? (
                <Text key={index} style={styles.sub_title}>
                  {item}
                </Text>
              ) : (
                <View key={index} style={[styles.flexbox]}>
                  <Text style={styles.sub_title}>{item}</Text>
                  <Text style={{marginHorizontal: 3}}> {'\u2022'}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.text_value}>09:30 ~ 18:00</Text>
        </View>
      </TouchableOpacity>

      {/* 공휴일 휴무 */}
      <View style={[styles.center, styles.margin_bottom]}>
        <View style={styles.closed}>
          <View style={[styles.flexbox, styles.margin_bottom]}>
            <View style={styles.text_left}>
              <Text style={{...styles.title, marginBottom: 10}}>
                공휴일 휴무
              </Text>
              <Text style={styles.sub_title}>
                휴무 활성화시 공휴일에 영업하지 않는 것으로 노출됩니다.
              </Text>
            </View>
            <SwitchToggle
              switchOn={on}
              onPress={() => setOn(!on)}
              circleColorOff={Theme.colors.white}
              circleColorOn={Theme.colors.white}
              backgroundColorOn={Theme.colors.blueButton}
              backgroundColorOff={Theme.colors.gray}
              containerStyle={styles.switch}
              circleStyle={styles.circle}
            />
          </View>
        </View>
        <View style={styles.line}></View>

        {/* 휴무일 */}
        <TouchableOpacity
          style={styles.closed}
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(Route.CLOSING)}>
          <View style={[styles.flexbox, styles.margin_bottom]}>
            <Text style={styles.title}>휴무일</Text>
            <SvgXml
              xml={Icons.IconArrowRight}
              fill={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
              width={16}
              height={12}
            />
          </View>

          <View style={[styles.flexbox, styles.margin_bottom]}>
            <Text style={styles.sub_title}>정기 휴무일</Text>
            <Text style={styles.text_value}>매달 둘째주 토요일</Text>
          </View>

          <View style={[styles.flexbox]}>
            <Text style={styles.sub_title}>임시 휴무일</Text>
            <Text style={styles.text_value}>08/01(월) - 08/02(화)</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <View style={[styles.flexbox, styles.margin_bottom]}>
          <View style={styles.text_left}>
            <Text style={{...styles.title, marginBottom: 10}}>공휴일 휴무</Text>
            <Text style={styles.sub_title}>
              당일 일시적인 영업정지가 가능합니다.
            </Text>
          </View>
          <SwitchToggle
            switchOn={on}
            onPress={() => setOn(!on)}
            circleColorOff={Theme.colors.white}
            circleColorOn={Theme.colors.white}
            backgroundColorOn={Theme.colors.blueButton}
            backgroundColorOff={Theme.colors.gray}
            containerStyle={styles.switch}
            circleStyle={styles.circle}
          />
        </View>
        {/* <DatePicker
          date={date}
          onDateChange={setDate}
          mode="time"
          androidVariant="nativeAndroid"
          locale="en"
          is24hourSource="locale"
        /> */}
      </View>
    </View>
  );
};

export default BusinessManagementScreen;
