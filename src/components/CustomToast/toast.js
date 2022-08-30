import {DeviceEventEmitter} from 'react-native';

export const SHOW_TOAST_MESSAGE = 'SHOW_TOAST';
const toast = {
  normal: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'normal'});
  },
  info: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'info'});
  },
  success: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'success'});
  },
  danger: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'danger'});
  },
};

export default toast;
