import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {Dropdown} from 'react-native-material-dropdown-v2';
import {SvgXml} from 'react-native-svg';
import RBSheet from 'react-native-raw-bottom-sheet';

import Route from 'constants/navigationRoute';
import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import HeaderPage from 'components/HeaderPage';
import Schedule from './Schedule';

import makeStyles from './styles';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import ListButtonTime from 'components/ListButtonTime';

const LIST_BTN = [
  {
    id: 1,
    text: '당일',
    action: () => {},
  },
  {
    id: 2,
    text: '1주일',
    action: () => {},
  },
  {
    id: 3,
    text: '1주일',
    action: () => {},
  },
  {
    id: 4,
    text: '3개월',
    action: () => {},
  },
];

export default function SettlementManagement(props) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [select, setSelect] = useState('');
  const refRBSheet = useRef();

  LocaleConfig.locales['ko'] = {
    monthNames: [
      '1 월',
      '2 월',
      '3 월',
      '4 월',
      '5 월 ',
      '6 월 ',
      '7 월 ',
      '8 월',
      '9 월',
      '10 월',
      '11 월',
      '12 월 ',
    ],
    monthNamesShort: [
      '일월',
      '이월',
      '삼월',
      '사월',
      '오월 ',
      '유월 ',
      '칠월',
      '팔월',
      '구월',
      '시월',
      '십일월',
      '십이월',
    ],
    dayNames: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    // today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = 'ko';

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <HeaderPage
          title={Route.SETTLEMENT_MANAGEMENT}
          rightComponent={
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(Route.ACCOUNT_MANAGEMENT)
              }>
              <Text style={styles.text_right}>계좌관리</Text>
            </TouchableOpacity>
          }
        />
        <View style={styles.header_schedule}>
          <Text style={styles.header}>정산 예정액</Text>
          <Text style={styles.price}>
            1,234,567 <Text style={styles.sub}>원</Text>
          </Text>
          <View style={styles.list_button}>
            <ListButtonTime listBtn={LIST_BTN} />
            {/* <View style={styles.flexbox}>
            <TouchableOpacity
              style={[styles.button_state, styles.button_right]}
              onPress={() => refRBSheet.current.open()}>
              <Text style={styles.text_button}>당일</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button_state, styles.button_right]}
              onPress={() =>
                props.navigation.navigate(Route.SETTLEMENT_DETAIL)
              }>
              <Text style={styles.text_button}>1주일</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button_state, styles.button_right]}>
              <Text style={styles.text_button}>1주일</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button_state]}>
              <Text style={styles.text_button}>3개월</Text>
            </TouchableOpacity>
          </View> */}
          </View>
        </View>
        <View style={styles.selected}>
          <TouchableOpacity
            style={styles.selected_box}
            onPress={() => refRBSheet.current.open()}>
            <Text style={styles.text_date}>22/07/25(월) - 22/07/29(금)</Text>
            <View style={styles.drop}>
              <SvgXml
                xml={Icons.IconDown}
                fill={
                  theme == 'light'
                    ? Theme.colors.blackTitle
                    : Theme.colors.white
                }
              />
            </View>
          </TouchableOpacity>
        </View>
        {false ? (
          <View style={styles.body}>
            <SvgXml xml={Icons.IconNote} />
            <Text style={styles.notify}>조회기간 내 정산내역이 없어요.</Text>
          </View>
        ) : (
          <>
            <ScrollView style={styles.content}>
              {[...Array(4)].map((item, index) => {
                return (
                  <Schedule
                    key={index}
                    time={'22/07/29(금)'}
                    status={'정산예정'}
                  />
                );
              })}
            </ScrollView>

            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={true}
              height={500}
              animationType="slide"
              openDuration={1800}
              closeDuration={1000}
              customStyles={{
                wrapper: {
                  backgroundColor: 'rgba(0,0,0,0.3)',
                },
                draggableIcon: {
                  backgroundColor: '#DEDEDE',
                },
                container: {
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                },
              }}>
              <View style={styles.calendar}>
                <Calendar
                  renderArrow={direction => {
                    return direction == 'left' ? (
                      <SvgXml
                        xml={Icons.IconArrowLeft}
                        fill={
                          theme == 'light'
                            ? Theme.colors.blackTitle
                            : Theme.colors.white
                        }
                      />
                    ) : (
                      <SvgXml
                        xml={Icons.IconArrowRight}
                        fill={
                          theme == 'light'
                            ? Theme.colors.blackTitle
                            : Theme.colors.white
                        }
                      />
                    );
                  }}
                  style={{
                    marginHorizontal: 15,
                  }}
                  markingType={'period'}
                  markedDates={{
                    '2022-08-10': {
                      startingDay: true,

                      color: Theme.colors.blueButton,
                      textColor: Theme.colors.white,
                    },
                    '2022-08-11': {
                      color: '#EAEDFF',
                      textColor: Theme.colors.blackTitle,
                    },
                    '2022-08-12': {
                      color: '#EAEDFF',
                      textColor: Theme.colors.blackTitle,
                    },
                    '2022-08-13': {
                      color: '#EAEDFF',
                      textColor: Theme.colors.blackTitle,
                    },
                    '2022-08-14': {
                      color: '#EAEDFF',
                      textColor: Theme.colors.blackTitle,
                    },
                    '2022-08-15': {
                      color: '#EAEDFF',
                      textColor: Theme.colors.blackTitle,
                    },
                    '2022-08-12': {
                      color: '#EAEDFF',
                      textColor: Theme.colors.blackTitle,
                    },
                    '2022-08-16': {
                      selected: true,
                      endingDay: true,
                      color: Theme.colors.blueButton,
                      textColor: Theme.colors.white,
                    },
                  }}
                />
              </View>
              <TouchableOpacity
                style={[styles.button_end]}
                onPress={() => refRBSheet.current.close()}>
                <Text style={styles.text}>선택 완료</Text>
              </TouchableOpacity>
            </RBSheet>
          </>
        )}
      </View>
    </View>
  );
}
