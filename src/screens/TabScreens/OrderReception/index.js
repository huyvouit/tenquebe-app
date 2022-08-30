import React, {useState, useEffect, useContext} from 'react';
import {View, useWindowDimensions, Text, TouchableOpacity} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {SvgXml} from 'react-native-svg';

import {DarkModeContext} from 'hooks/useDarkMode';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import {Theme} from 'constants/theme';
import windowSize from 'constants/windowSize';
import Route from 'constants/navigationRoute';

import HeaderPage from 'components/HeaderPage';
import CompletionScreen from './Completion';
import InProcessingScreen from './InProcessing';

import makeStyles from './styles';
import Animated from 'react-native-reanimated';

const DATA_FAKE = [
  {
    id: 1,
    status: '결제완료',
    timestamp: '20:22',
    title: '에어컨 바람막이 외 5개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: '접수',
    total: '217,000원',
  },
  {
    id: 2,
    status: '취소',
    timestamp: '20:22',
    title: '오리모자 우산 외 1개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: 'round',
    total: '217,000원',
  },
  {
    id: 3,
    status: '입금예정',
    timestamp: '20:22',
    title: '필리핀 Dole 반반한 바나나 (당일 직송배달 시작)외 1개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: '',
    total: '217,000원',
  },
  {
    id: 4,
    status: '배달중',
    timestamp: '20:22',
    title: '에어컨 바람막이 외 5개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: '완료',
    total: '217,000원',
  },
  {
    id: 5,
    status: '배달중',
    timestamp: '20:22',
    title: '에어컨 바람막이 외 5개',
    description: '금천구 가산디지털1로 16, 메타업 715호',
    active: '완료',
    total: '217,000원',
  },
];

export default function OrderReception(props) {
  const {toggleDarkMode} = useContext(DarkModeContext);
  const layout = useWindowDimensions();
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '신규 / 처리중 ', data: DATA_FAKE},
    {key: 'second', title: '완료', data: []},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <CompletionScreen data={route.data} />;
      case 'second':
        return <InProcessingScreen data={route.data} />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, focused}) => (
        <Text style={styles.title(focused)}>
          {route.title}
          {route.data.length > 99 ? (
            <Text style={styles.quantity_item}> 99+ </Text>
          ) : (
            <Text style={styles.quantity_item}> {route.data.length}</Text>
          )}
        </Text>
      )}
      // scrollEnabled={true}
      indicatorContainerStyle={styles.indicator}
      indicatorStyle={{
        backgroundColor:
          theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
        height: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        position: 'absolute',
        left: '6%',
      }}
      activeColor={Theme.colors.blueButton}
      inactiveColor={Theme.colors.grayText}
      style={{
        backgroundColor:
          theme == 'light' ? Theme.colors.white : Theme.colors.dark,
        height: 50,
      }}
    />
  );

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.ORDER_PLACING}
        // leftComponent={
        //   <TouchableOpacity onPress={toggleDarkMode}>
        //     <SvgXml
        //       xml={Icons.IconMore}
        //       fill={theme == 'light' ? Theme.colors.dark : Theme.colors.white}
        //     />
        //   </TouchableOpacity>
        // }
        rightComponent={
          <TouchableOpacity
            onPress={() => props.navigation.navigate(Route.ORDER_HISTORY)}>
            <SvgXml
              xml={Icons.IconReLoad}
              fill={theme == 'light' ? Theme.colors.dark : Theme.colors.white}
            />
          </TouchableOpacity>
        }
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
}
