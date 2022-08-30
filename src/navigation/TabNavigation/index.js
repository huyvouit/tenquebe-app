import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';

import {Theme, WidthScreen} from 'constants/theme';
import Icons from 'assets/icons';

import Route from 'constants/navigationRoute';
import OrderReception from 'screens/TabScreens/OrderReception';
import ProductManagement from 'screens/TabScreens/ProductManagement';
import SettlementManagement from 'screens/TabScreens/SettlementManagement';
import ContactManagement from 'screens/TabScreens/More/ContactManagement';
import MoreScreen from 'screens/TabScreens/More';
import OrderReceptionStack from 'navigation/CommonNavigation';
import windowSize from 'constants/windowSize';
import useTheme from 'hooks/useTheme';
import ChangeStatusScreen from 'screens/TabScreens/ProductManagement/ChangeStatus';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: Theme.colors.blueButton,
        tabBarInactiveTintColor: Theme.colors.gray,
        tabBarStyle: {
          height: 60,
          backgroundColor:
            theme == 'light' ? Theme.colors.white : Theme.colors.dark,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          paddingBottom: 9,
          width: WidthScreen,
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.1,
          shadowRadius: 2.22,
          elevation: 3,

          borderWidth: 1,
          borderColor:
            theme == 'light' ? Theme.colors.gray : Theme.colors.blackTitle,
          // borderTopColor:
          //   theme == 'light' ? Theme.colors.gray : Theme.colors.blackTitle,
        },
        tabBarLabelStyle: {
          fontSize: windowSize.wScale(12),
        },

        tabBarIcon: ({focused}) => {
          const tintColor = focused
            ? Theme.colors.blueButton
            : Theme.colors.gray;
          switch (route.name) {
            case Route.ORDER_MANAGEMENT:
              return <IconBar icon={Icons.IconCart} tintColor={tintColor} />;
            case Route.PRODUCT_MANAGEMENT:
              return <IconBar icon={Icons.IconGoods} tintColor={tintColor} />;
            case Route.SETTLEMENT_MANAGEMENT:
              return (
                <IconBar icon={Icons.IconSettlement} tintColor={tintColor} />
              );

            case Route.MORE:
              return <IconBar icon={Icons.IconMore} tintColor={tintColor} />;
            default:
              return <IconBar icon={Icons.IconMore} tintColor={tintColor} />;
          }
        },
      })}>
      <Tab.Screen name={Route.ORDER_MANAGEMENT}>
        {props => <OrderReception navigation={props.navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name={Route.PRODUCT_MANAGEMENT}
        component={ProductManagement}
      />
      <Tab.Screen
        name={Route.SETTLEMENT_MANAGEMENT}
        component={SettlementManagement}
      />

      <Tab.Screen name={Route.MORE} component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;

const IconBar = ({icon, tintColor}) => {
  return <SvgXml xml={icon} width={20} height={22} fill={tintColor} />;
};
