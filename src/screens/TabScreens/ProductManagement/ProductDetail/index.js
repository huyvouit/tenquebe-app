import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Images from 'assets/images';

import HeaderPage from 'components/HeaderPage';
import TextTitle from 'components/TextTitle';
import ButtonEdit from 'components/ButtomEdit';

import makeStyles from './styles';

const DATA = [
  {
    id: 0,
    image: Images.Default,
  },
  {
    id: 1,
    image: Images.Default,
  },
  {
    id: 2,
    image: Images.Default,
  },
  {
    id: 3,
    image: Images.Default,
  },
  {
    id: 4,
    image: Images.Default,
  },
];

const ProductDetailScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [price, setPrice] = useState('');
  const [isAddDiscount, setIsAddDiscount] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.PRODUCT_DETAIL}
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
      <View style={styles.body}>
        <ScrollView style={styles.content}>
          <View style={styles.normal}>
            <View style={styles.input}>
              <View style={styles.flex('space-between', 'center')}>
                <TextTitle title={'상품 정보'} />
                <ButtonEdit action={() => {}} />
              </View>
              <FlexBoxText
                title={'상품명'}
                value={
                  '필리핀 Dole 반반한 바나나 (당일 직송배달 시작) 3묶음+1묶음'
                }
              />
              <FlexBoxText title={'정상가'} value={'3,360,000 원'} />
              <FlexBoxText title={'재고'} value={'100 개'} />
              <FlexBoxText
                title={'상태'}
                value={'판매중'}
                colorText={Theme.colors.blueButton}
              />
              {/* <View style={styles.line}></View> */}
            </View>
          </View>
          <View style={[styles.normal, styles.bonus, styles.no_padding]}>
            <View style={styles.input}>
              <View
                style={{
                  ...styles.flex('space-between', 'center'),
                  paddingBottom: 20,
                }}>
                <TextTitle title={'이미지'} subTitle={'(5/5)'} />
                <ButtonEdit action={() => {}} />
              </View>
              <FlatList
                data={DATA}
                renderItem={({item}) => (
                  <View style={styles.button_selected}>
                    <Image source={item.image} style={styles.image} />
                  </View>
                )}
                keyExtractor={item => item.id}
                horizontal
              />
            </View>
          </View>
        </ScrollView>
        <View style={[styles.normal, styles.input, styles.no_padding]}>
          <TouchableOpacity style={styles.button_end}>
            <Text style={styles.text}>저장</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

export const FlexBoxText = ({title, value, option, justify, colorText}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={[styles.flex('flex-start', 'flex-start'), styles.padding_top]}>
      <Text style={styles.name}>{title}</Text>

      <Text style={[styles.value, colorText && styles.colorText(colorText)]}>
        {value}
      </Text>
    </View>
  );
};
