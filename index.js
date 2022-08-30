import React, {useEffect, useState} from 'react';
import {AppRegistry, LogBox, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import MainNavigation from 'navigation/MainNavigation';
import {name as appName} from './app.json';
import store from 'redux/store';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {enableScreens, enableFreeze} from 'react-native-screens';
import {askPermission} from 'utils/functions/Permission';
import GlobalFont from 'utils/functions/globalFont';
import colors from 'constants/colors';
// import SplashScreen from 'react-native-splash-screen';
import Toast from 'components/CustomToast';
import {DarkModeProvider} from 'hooks/useDarkMode';
import useTheme from 'hooks/useTheme';
import {Theme} from 'constants/theme';
import SplashScreen from 'screens/SplashScreen';
import {FontSizeProvider} from 'hooks/useFont';

enableScreens(false);
LogBox.ignoreAllLogs();

function App() {
  useEffect(() => {
    askPermission();
    // GlobalFont.applyGlobal('Pretendard')
    // SplashScreen.hide()

    return () => {};
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <DarkModeProvider>
          <FontSizeProvider>
            <Toast />
            <ThemeWrapper />
          </FontSizeProvider>
        </DarkModeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
function ThemeWrapper() {
  const [onLoad, setLoading] = useState(false);
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          theme == 'light' ? Theme.colors.white : Theme.colors.dark,
      }}
      onLayout={() =>
        setTimeout(() => {
          setLoading(true);
        }, 3000)
      }>
      <StatusBar
        backgroundColor={
          theme == 'light' ? Theme.colors.white : Theme.colors.dark
        }
        barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
      />
      {onLoad ? <MainNavigation /> : <SplashScreen />}
    </SafeAreaView>
  );
}

AppRegistry.registerComponent(appName, () => App);
