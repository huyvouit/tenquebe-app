import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Pressable, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import Product from 'components/Product';
import ButtonClearText from 'components/ButtonClearText';
import HeaderPage from 'components/HeaderPage';

import makeStyles from './styles';

const TABS = ['전체', '판매중', '품절', '판매중지', '대기'];

const ProductManagement = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [text, setText] = useState('');
  const [selected, setSelected] = useState(0);

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);

  const header_height = Animated.interpolateNode(diffClamp, {
    inputRange: [0, 45],
    outputRange: [45, 0],
    extrapolate: 'clamp',
  });
  const header_translate_y = Animated.interpolateNode(diffClamp, {
    inputRange: [0, 45],
    outputRange: [0, -45],
    extrapolate: 'clamp',
  });

  const renderContent = selected => {
    switch (selected) {
      case 0:
        return (
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={5}
            onScroll={Animated.event([
              {
                nativeEvent: {contentOffset: {y: scrollY}},
              },
            ])}
            style={styles.scroll_view}>
            {[...Array(5)].map((x, i) => (
              <Product
                key={i}
                data={{
                  name: '필리핀 Dole 반반한 바나나 (당일 직송배달 시작) 3묶음+1묶3묶음+1묶',
                  status: '품절',
                  price: '17,000원',
                }}
                navigation={props.navigation}
              />
            ))}
          </Animated.ScrollView>
        );
      case 1:
        return (
          <View style={styles.empty}>
            <SvgXml xml={Icons.IconBox} />
            <Text style={styles.notify}>등록된 상품이 없어요.</Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.empty}>
            <SvgXml xml={Icons.IconEmptySearch} />
            <Text style={styles.notify}>검색한 상품이 없어요.</Text>
          </View>
        );
      default:
        return (
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={5}
            onScroll={Animated.event([
              {
                nativeEvent: {contentOffset: {y: scrollY}},
              },
            ])}
            style={styles.scroll_view}>
            {[...Array(5)].map((x, i) => (
              <Product
                key={i}
                data={{
                  name: '필리핀 Dole 반반한 바나나 (당일 직송배달 시작) 3묶음+1묶3묶음+1묶',
                  status: '품절',
                  price: '17,000원',
                }}
                navigation={props.navigation}
              />
            ))}
          </Animated.ScrollView>
        );
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: header_height,
          transform: [{translateY: header_translate_y}],
          zIndex: 10,
        }}>
        <HeaderPage title={Route.PRODUCT_ROUTE} />
      </Animated.View>

      <View style={styles.box}>
        <View style={styles.search}>
          <View style={styles.icon}>
            <SvgXml xml={Icons.IconSearch} />
          </View>
          <TextInput
            style={styles.text_input}
            placeholder="상품명을 검색해주세요."
            value={text}
            placeholderTextColor={Theme.colors.grayText}
            onChangeText={text => setText(text)}
          />
          {text != '' && (
            <View style={styles.button_clear}>
              <ButtonClearText action={() => setText('')} />
            </View>
          )}
        </View>
      </View>
      <View style={styles.header}>
        <ScrollView horizontal>
          {TABS.map((title, index) => (
            <Pressable
              key={index}
              onPress={() => setSelected(index)}
              style={styles.tab}>
              <Text
                style={[
                  styles.title,
                  selected == index && {
                    color:
                      theme == 'light'
                        ? Theme.colors.blackTitle
                        : Theme.colors.white,
                  },
                ]}>
                {title}
              </Text>
              {selected == index && <View style={styles.line} />}
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {renderContent(selected)}
    </View>
  );
};

export default ProductManagement;
