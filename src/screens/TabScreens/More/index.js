import useTheme from 'hooks/useTheme';
import React, {useState, useEffect} from 'react';
import {Image, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Route from 'constants/navigationRoute';

import makeStyles from './styles';
import TabItem from 'components/TabItem';
import Icons from 'assets/icons';
import Images from 'assets/images';
import {SvgXml} from 'react-native-svg';
import {Theme} from 'constants/theme';

const TAB_TOP = [
  {
    id: 0,
    icon: Icons.IconShare,
    title: Route.CANCEL_RETURN_EXCHANGE,
    subTitle: '30',
    dot: false,
    action: Route.CANCEL_RETURN_EXCHANGE,
  },
  {
    id: 1,
    icon: Icons.IconQuestion,
    title: Route.CONTACT_MANAGEMENT,
    subTitle: '2',
    dot: false,
    action: Route.CONTACT_MANAGEMENT,
  },
  {
    id: 2,
    icon: Icons.IconView,
    title: Route.COMPLETE_ORDER_HISTORY,
    subTitle: null,
    dot: false,
    action: Route.COMPLETE_ORDER_HISTORY,
  },
];
const TAB_BOTTOM = [
  {
    id: 0,
    icon: Icons.IconNotice,
    title: Route.ANNOUNCEMENTS,
    subTitle: null,
    dot: true,
    action: Route.ANNOUNCEMENTS,
  },
  {
    id: 1,
    icon: Icons.IconSetting,
    title: Route.SYSTEM_SETTING,
    subTitle: null,
    dot: false,
    action: Route.SYSTEM_SETTING,
  },
  {
    id: 2,
    icon: Icons.IconQuestion,
    title: Route.INQUIRY,
    subTitle: null,
    dot: false,
    action: Route.INQUIRY,
  },
  {
    id: 3,
    icon: Icons.IconNoteBook,
    title: Route.SERVICE_POLICY,
    subTitle: null,
    dot: false,
    action: Route.SERVICE_POLICY,
  },
  {
    id: 4,
    icon: Icons.IconRequire,
    title: '버전정보',
    subTitle: null,
    dot: false,
    action: null,
    notArrow: true,
    text: '3.15.1 / 3.2',
  },
];
export default function MoreScreen(props) {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity
            style={[styles.flexbox('space-between'), styles.vertical(15)]}
            onPress={() => props.navigation.navigate(Route.YOUR_ACCOUNT)}>
            <View style={styles.left}>
              <Text style={styles.store}>점포 독산점</Text>
              <Text style={styles.name}>김지안 점주님</Text>
            </View>
            <View style={styles.flexbox()}>
              <Image source={Images.Default} style={styles.image} />
              <SvgXml
                xml={Icons.IconArrowRight}
                fill={
                  theme == 'light'
                    ? Theme.colors.blackTitle
                    : Theme.colors.white
                }
              />
            </View>
          </TouchableOpacity>
          <View style={[styles.flexbox('space-between'), styles.vertical(15)]}>
            <Text style={styles.store}>이번달 정산액</Text>
            <Text style={[styles.store, styles.month]}>3,416,000원</Text>
          </View>
          <View style={[styles.flexbox('space-between')]}>
            <Text style={styles.store}>지난달 정산액</Text>
            <Text style={[styles.store, styles.amount]}>1,234,000원</Text>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>점포 독산점 주문현황</Text>
          <View style={[styles.flexbox('space-around'), styles.order]}>
            <View style={styles.item}>
              <Text style={{...styles.store, marginBottom: 10}}>신규주문</Text>
              <Text style={[styles.store, styles.month]}>23건</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={{...styles.store, marginBottom: 10}}>신규주문</Text>
              <Text style={[styles.store, styles.text_order]}>23건</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={{...styles.store, marginBottom: 10}}>신규주문</Text>
              <Text style={[styles.store, styles.text_order]}>23건</Text>
            </View>
          </View>

          {/* product */}
          <Text style={styles.title}>점포 독산점 상품현황</Text>
          <View style={[styles.product]}>
            <View style={[styles.flexbox('space-between'), styles.top]}>
              <Text style={[styles.store, styles.amount]}>판매중인 상품</Text>
              <Text style={[styles.store, styles.month]}>23건</Text>
            </View>
            <View style={[styles.flexbox('space-around')]}>
              <View style={[styles.item_flex, styles.border_right]}>
                <Text style={{...styles.store, fontSize: 16}}>중지</Text>
                <Text style={[styles.store, styles.text_order]}>23</Text>
              </View>
              <View style={[styles.item_flex, styles.border_right]}>
                <Text style={{...styles.store, fontSize: 16}}>품절</Text>
                <Text style={[styles.store, styles.text_order]}>23</Text>
              </View>
              <View style={styles.item_flex}>
                <Text style={{...styles.store, fontSize: 16}}>대기</Text>
                <Text style={[styles.store, styles.text_order]}>23</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 15}}>
          {TAB_TOP.map((item, index) => (
            <TabItem
              key={item.id}
              title={item.title}
              subTitle={item.subTitle}
              borderBottom
              icon={item.icon}
              action={() => props.navigation.navigate(item?.action)}
            />
          ))}
        </View>

        <View style={{marginBottom: 15}}>
          {TAB_BOTTOM.map((item, index) => (
            <TabItem
              key={item?.id}
              title={item?.title}
              subTitle={item?.subTitle}
              dot={item?.dot}
              borderBottom
              icon={item?.icon}
              action={() =>
                item.action && props.navigation.navigate(item?.action)
              }
              notArrow={item?.notArrow}
              text={item?.text}
            />
          ))}
        </View>
        {/* <TabItem
        title={'취소 / 반품 / 교환 관리'}
        // subTitle={'30'}
        dot
        // borderBottom
        // borderTop
        notArrow
        text={'3.15.1 / 3.2'}
      /> */}
      </View>
    </ScrollView>
  );
}
