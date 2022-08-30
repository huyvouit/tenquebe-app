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

import makeStyles from './styles';
import Animated from 'react-native-reanimated';
import CompletionScreen from 'screens/TabScreens/OrderReception/Completion';
import InProcessingScreen from 'screens/TabScreens/OrderReception/InProcessing';
import DetailTab from './DetailTab';
import ContactUs from './ContactUs';

const DATA_FAKE = [
  {
    id: 1,
    number: '12345678-12345678',
    name: '오리모자 우산 외 1개',
    textColor: 'red',
    desc: '취소요청',
    date: '(22/05/05 요청)',
    button: true,
  },
  {
    id: 2,
    number: '12345678-12345678',
    name: '오리모자 우산 외 1개',
    desc: '취소요청',
    date: '(22/05/05 요청)',
    textColor: '',
    button: true,
  },
  {
    id: 3,
    number: '12345678-12345678',
    name: '오리모자 우산 외 1개',
    desc: '취소요청',
    date: '(22/05/05 요청)',
    textColor: 'blue',
    button: false,
  },
];

export default function InquiryScreen(props) {
  const layout = useWindowDimensions();
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [index, setIndex] = useState(0);
  const [data, setData] = useState(DATA_FAKE);
  const [routes] = React.useState([
    {key: 'first', title: '문의하기', data: data},
    {key: 'second', title: '문의내역', data: []},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <ContactUs />;
      case 'second':
        return <DetailTab navigation={props.navigation} />;
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
          {/* {route.data.length > 99 ? (
            <Text style={styles.quantity_item}> 99+ </Text>
          ) : (
            <Text style={styles.quantity_item}> {route.data.length}</Text>
          )} */}
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
        title={Route.INQUIRY}
        leftComponent={
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <SvgXml
              xml={Icons.IconArrowLeft}
              fill={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
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
