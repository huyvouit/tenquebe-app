import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Route, {TAB, LoginScreen} from 'constants/navigationRoute';

import HomeScreen from 'navigation/TabNavigation';
import Login from 'screens/Authentication/Login';
import OrderReception from 'screens/TabScreens/OrderReception';
import OrderHistory from 'screens/TabScreens/OrderReception/OrderHistory';
import TabNavigation from 'navigation/TabNavigation';
import NewApplicants from 'screens/TabScreens/OrderReception/NewApplicants';
import ChangePriceScreen from 'screens/TabScreens/ProductManagement/ChangePrice';
import ChangeStatusScreen from 'screens/TabScreens/ProductManagement/ChangeStatus';
import ChangeInformationScreen from 'screens/TabScreens/ProductManagement/ChangeInformation';
import ChangeImageScreen from 'screens/TabScreens/ProductManagement/ChangeImage';
import ProductDetailScreen from 'screens/TabScreens/ProductManagement/ProductDetail';
import AccountManagementScreen from 'screens/TabScreens/SettlementManagement/AccountManagement';
import SettlementDetailScreen from 'screens/TabScreens/SettlementManagement/SettlementDetail';
import ReasonDrawalScreen from 'screens/TabScreens/More/ReasonDrawal';
import ChangePasswordScreen from 'screens/TabScreens/More/ChangePassword';
import UnSubscribleScreen from 'screens/TabScreens/More/UnSubscrible';
import YourAccountScreen from 'screens/TabScreens/More/YourAccount';
import PersonalInformationScreen from 'screens/TabScreens/More/PersonalInformation';
import BusinessManagementScreen from 'screens/TabScreens/More/BusinessManagement';
import BusinessScreen from 'screens/TabScreens/More/Business';
import CancelReturnExchangeScreen from 'screens/TabScreens/More/CancelReturnExchange';
import ContactManagementScreen from 'screens/TabScreens/More/ContactManagement';
import CancelHistoryScreen from 'screens/TabScreens/More/CancelHistory';
import OrderDetailScreen from 'screens/TabScreens/More/OrderDetail';
import CompleteOrderHistoryScreen from 'screens/TabScreens/More/CompleteOrderHistory';
import InquiryDetailScreen from 'screens/TabScreens/More/InquiryDetail';
import AnnoucementScreen from 'screens/TabScreens/More/Annoucement';
import SystemSettingScreen from 'screens/TabScreens/More/SystemSetting';
import ServicePolicyScreen from 'screens/TabScreens/More/ServicePolicy';
import PrivacyPolicyScreen from 'screens/TabScreens/More/ServicePolicy/PrivacyPolicy';
import TermsOfServiceScreen from 'screens/TabScreens/More/ServicePolicy/TermsOfService';
import InquiryScreen from 'screens/TabScreens/More/Inquiry';
import TextSizeScreen from 'screens/TabScreens/More/SystemSetting/TextSize';
import ClosingScreen from 'screens/TabScreens/More/Closing';

const Stack = createNativeStackNavigator();

const CommonNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Route.ORDER_SCREEN}>
      {/* ORDER */}
      <Stack.Screen name={Route.ORDER_SCREEN} component={TabNavigation} />
      <Stack.Screen name={Route.NEW_ORDER} component={NewApplicants} />
      <Stack.Screen name={Route.ORDER_HISTORY} component={OrderHistory} />

      {/* PRODUCT */}
      <Stack.Screen
        name={Route.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <Stack.Screen name={Route.CHANGE_PRICE} component={ChangePriceScreen} />
      <Stack.Screen name={Route.CHANGE_STATUS} component={ChangeStatusScreen} />
      <Stack.Screen
        name={Route.CHANGE_INFORMATION}
        component={ChangeInformationScreen}
      />
      <Stack.Screen name={Route.CHANGE_IMAGE} component={ChangeImageScreen} />

      {/* SETTLEMENT */}
      <Stack.Screen
        name={Route.ACCOUNT_MANAGEMENT}
        component={AccountManagementScreen}
      />
      <Stack.Screen
        name={Route.SETTLEMENT_DETAIL}
        component={SettlementDetailScreen}
      />

      {/* MORE */}
      <Stack.Screen name={Route.REASON_DRAWAL} component={ReasonDrawalScreen} />
      <Stack.Screen
        name={Route.CHANGE_PASSWORD}
        component={ChangePasswordScreen}
      />
      <Stack.Screen name={Route.UNSUBSCRIBE} component={UnSubscribleScreen} />
      <Stack.Screen name={Route.YOUR_ACCOUNT} component={YourAccountScreen} />
      <Stack.Screen
        name={Route.PERSON_INFORMATION}
        component={PersonalInformationScreen}
      />
      <Stack.Screen
        name={Route.BUSINESS_MANAGEMENT}
        component={BusinessManagementScreen}
      />
      <Stack.Screen name={Route.BUSINESS} component={BusinessScreen} />
      <Stack.Screen name={Route.CLOSING} component={ClosingScreen} />

      {/* common */}
      <Stack.Screen
        name={Route.CANCEL_RETURN_EXCHANGE}
        component={CancelReturnExchangeScreen}
      />
      <Stack.Screen
        name={Route.CONTACT_MANAGEMENT}
        component={ContactManagementScreen}
      />
      <Stack.Screen
        name={Route.CANCEL_HISTORY}
        component={CancelHistoryScreen}
      />

      <Stack.Screen name={Route.ORDER_DETAIL} component={OrderDetailScreen} />
      <Stack.Screen
        name={Route.COMPLETE_ORDER_HISTORY}
        component={CompleteOrderHistoryScreen}
      />

      <Stack.Screen
        name={Route.INQUIRY_DETAIL}
        component={InquiryDetailScreen}
      />

      <Stack.Screen name={Route.ANNOUNCEMENTS} component={AnnoucementScreen} />
      <Stack.Screen
        name={Route.SYSTEM_SETTING}
        component={SystemSettingScreen}
      />
      <Stack.Screen
        name={Route.SERVICE_POLICY}
        component={ServicePolicyScreen}
      />
      <Stack.Screen
        name={Route.PRIVACY_POLICY}
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name={Route.TERMS_OF_SERVICE}
        component={TermsOfServiceScreen}
      />

      <Stack.Screen name={Route.INQUIRY} component={InquiryScreen} />
      <Stack.Screen name={Route.TEXT_SIZE} component={TextSizeScreen} />
    </Stack.Navigator>
  );
};

export default CommonNavigation;
