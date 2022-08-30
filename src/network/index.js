import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseurl} from './route';

const instance = axios.create({
  baseURL: baseurl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export const Send = (url, method, body, isAuth, isConsole) =>
  new Promise(async (resolve, reject) => {
    const endPoint = baseurl + url;
    const token = await AsyncStorage.getItem('jwt');
    let config = {
      url: endPoint,
      method,
    };
    // body가 있는 경우
    if (body != undefined) {
      config = {...config, data: body};
    }
    // 토큰이 있는경우
    if (isAuth && token) {
      config = {
        ...config,
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'application/json',
        },
      };
    }
    if (isConsole) {
      console.log(
        '\n\n[Network.js]===================================================================================================================\n',
      );
      console.log(`보내는 데이터 : ${JSON.stringify(config)}`);
    }

    const result = await instance(config).catch(e => {
      console.error(`${endPoint} : ${e.message}`);
      resolve({
        success: false,
        message: e?.response?.data?.message,
        error: true,
      });
    });

    if (result && result.data) {
      if (isConsole) {
        console.log(`받은 데이터 : ${JSON.stringify(result.data)}`);
        console.log(
          '\n\n===================================================================================================================\n',
        );
      }
      if (result.data.success != undefined) {
        resolve(result.data);
      } else {
        resolve({success: true, message: '', data: result.data});
      }
    } else {
      // console.log(JSON.stringify(result))
      resolve({success: false, message: '일시적인 오류가 발생했습니다.'});
      // navigation.navigate('common', {screen: 'ErrorPage'})
    }
  });
