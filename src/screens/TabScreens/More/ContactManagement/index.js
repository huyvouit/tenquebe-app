import React, {useState, useEffect} from 'react';
import {View, useWindowDimensions, Text, TouchableOpacity} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {SvgXml} from 'react-native-svg';

import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';

import HeaderPage from 'components/HeaderPage';
import ContactChild from './ContactChild';

import makeStyles from './styles';

const DATA_FAKE = [
  {
    id: 1,
    title: '문의사항 제목',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
  {
    id: 2,
    title: '문의사항 제목',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
  {
    id: 3,
    title:
      '문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 문의사항 제목 ',
    date: '(22/05/05 요청)',
    fontSize: 16,
  },
];

export default function ContactManagementScreen(props) {
  const layout = useWindowDimensions();
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [index, setIndex] = useState(0);
  const [data, setData] = useState(DATA_FAKE);
  const [routes] = React.useState([
    {key: 'first', title: '신규 문의', data: data},
    {key: 'second', title: '답변 완료', data: data},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return (
          <ContactChild
            data={route.data}
            navigation={props.navigation}
            result={false}
          />
        );
      case 'second':
        return (
          <ContactChild
            data={route.data}
            navigation={props.navigation}
            result={true}
          />
        );
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, focused}) => (
        <Text style={styles.title(focused)}>{route.title}</Text>
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
        title={Route.CONTACT_MANAGEMENT}
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
