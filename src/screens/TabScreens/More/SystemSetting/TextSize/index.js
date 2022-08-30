import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import useTheme from 'hooks/useTheme';
import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import Icons from 'assets/icons';

import CustomRadioButton from 'components/CustomRadioButton';
import HeaderPage from 'components/HeaderPage';

import makeStyles from './styles';
import Card from 'components/Card';
import useFontSize from 'hooks/useFont';
import StatusOrder from 'components/StatusOrder';
import windowSize from 'constants/windowSize';

const REASON = [
  {
    id: 0,
    value: '작음',
    text: '작음',
    selected: false,
  },
  {
    id: 1,
    value: '보통',
    text: '보통',
    selected: true,
  },
  {
    id: 2,
    value: '큼',
    text: '큼',
    selected: false,
  },
];

const TextSizeScreen = props => {
  const theme = useTheme();
  const {fontSize, toggleFontSize} = useFontSize();
  const [data, setData] = useState(REASON);
  const filterSelected = () => {
    return [...data].filter(item => item.selected === true);
  };

  const styles = makeStyles(theme, fontSize);
  const model = makeModels(theme, filterSelected()[0].value);
  const fake = {
    id: 5,
    status: '결제완료',
    timestamp: '20:22',
    title: '상품명 외 10개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: '',
    total: '217,000원',
  };

  useEffect(() => {
    const copy = [...data];
    copy.map((i, index) => {
      if (i.value === fontSize) {
        i.selected = true;
      } else {
        i.selected = false;
      }
    });
    setData(copy);
  }, []);

  const handleSelectedButton = item => {
    const temp = [...data];
    temp.map((i, index) => {
      if (i.id === item.id && !i.selected) {
        i.selected = true;
      } else {
        i.selected = false;
      }
    });
    setData(temp);
  };

  return (
    <View style={styles.modalView}>
      <HeaderPage
        title={Route.TEXT_SIZE}
        leftComponent={
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <SvgXml
              xml={Icons.IconArrowLeft}
              fill={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
              color={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
              //   width={20}
              //   height={20}
            />
          </TouchableOpacity>
        }
      />
      <View style={styles.top}>
        <View style={model.card}>
          <View style={model.left}>
            <View style={model.header}>
              <StatusOrder statusOrder={fake.status} />

              <Text style={model.timestamp}>{fake.timestamp}</Text>
            </View>
            <Text style={model.title}>{fake.title}</Text>
            <Text style={model.description}>{fake.description}</Text>
            <Text style={model.total}>{fake.total}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.direction}>
          화면에 보이는 글자크기로 화면에 표시됩니다.
        </Text>
        <View style={styles.content}>
          {data.map((item, index) => {
            return (
              <View
                key={item.id}
                style={[
                  styles.item_radio,
                  index === data.length - 1 && styles.no_padding,
                ]}>
                <CustomRadioButton
                  key={item.id}
                  selected={item.selected}
                  text={item.text}
                  action={() => handleSelectedButton(item)}
                />
              </View>
            );
          })}
        </View>

        <View style={styles.btn}>
          <TouchableOpacity
            style={[styles.button, styles.buttonBg]}
            onPress={() => toggleFontSize(filterSelected()[0].value)}>
            <Text style={styles.textStyle}>{'저장'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TextSizeScreen;

const makeModels = (theme, fontSize) =>
  StyleSheet.create({
    card: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      borderRadius: 15,
      borderBottomColor:
        theme == 'light' ? Theme.colors.gray : Theme.colors.blackTitle,
      paddingHorizontal: 20,
    },

    left: {
      flex: 1,

      paddingVertical: 13,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    timestamp: {
      marginStart: 10,
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font24),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      color:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.whiteTitle,
    },
    title: {
      marginTop: 5,
      fontStyle: 'normal',
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font24),
      fontWeight: Theme.fonts.fontWeight.w700,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
      color:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.whiteTitle,
      paddingBottom: 5,
    },

    right: {
      marginLeft: 20,
    },
    active: {
      width: 88,
      height: 53,
      backgroundColor: Theme.colors.blueButton,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 9,
    },
    create: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    button: {
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font18),
      fontWeight: Theme.fonts.fontWeight.w700,
      color: Theme.colors.blackTitle,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    buttonSubmit: {
      color: '#fff',
    },
    description: {
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font16),
      lineHeight: 19.2,
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },
    total: {
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font16),
      lineHeight: 19.2,
      fontWeight: Theme.fonts.fontWeight.w400,
      color: Theme.colors.grayText,
      fontFamily: Theme.fonts.fontFamily.Pretendard,
    },

    sectionWrapper: {
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor:
        theme == 'light' ? Theme.colors.white : Theme.colors.dark,
    },
    titleStyle: {
      color:
        theme == 'light' ? Theme.colors.blackTitle : Theme.colors.whiteTitle,
      fontSize: windowSize.wScale(Theme.fonts.fontSize[fontSize].font18),
      fontWeight: Theme.fonts.fontWeight.w600,
      lineHeight: 21.6,
    },
  });
