import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper/src';

import makeStyles from './styles';
import Icons from 'assets/icons';
import useTheme from 'hooks/useTheme';
import {SvgXml} from 'react-native-svg';
import Route from 'constants/navigationRoute';

const SLIDERS = [
  {
    id: 1,
    title: '더 쉬운 주문관리!',
    subTitle: `주문 승인, 거부를 통해\n빠른주문접수를 경험해보세요`,
    image: Icons.OnBoarding1,
    button: '다음',
  },
  {
    id: 1,
    title: '신속한 상품관리!',
    subTitle: `즉각적인 가격,상태 변경을 통해\n판매중이 아닌 상품관리가 가능해요`,
    image: Icons.OnBoarding2,
    button: '다음',
  },
  {
    id: 1,
    title: '내 점포의 영업시간관리까지!',
    subTitle: `정기 휴업, 임시 휴업까지\n모든 영업시간을 관리해보세요`,
    image: Icons.OnBoarding3,
    button: '시작하기',
  },
];

const OnBoardingScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [dotIndex, setDotIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        // autoplay={true}
        index={dotIndex}
        scrollEnabled={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.pagination}>
        {SLIDERS.map((item, index) => {
          return (
            <View key={index} style={styles.main}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
              <View style={styles.image}>
                <SvgXml xml={item.image} />
              </View>

              <TouchableOpacity
                style={styles.button_end}
                onPress={
                  dotIndex == 2
                    ? () => props.navigation.navigate(Route.LOGIN)
                    : () => setDotIndex(dotIndex + 1)
                }>
                <Text style={styles.text}>{item.button}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default OnBoardingScreen;
1;
