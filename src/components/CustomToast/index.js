import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Text,
  DeviceEventEmitter,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SHOW_TOAST_MESSAGE} from './toast';

import windowSize from 'constants/windowSize';

const colors = {
  normal: 'rgba(0,0,0,0.7)',
  info: '#343a42',
  success: '#28a745',
  danger: '#dc3545',
};

const Toast = () => {
  const [messageType, setMessageType] = useState(null);
  const timeOutRef = useRef(null);

  const animatedOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedOpacity.value,
    };
  }, []);

  const [timeOutDuration, setTimeOutDuration] = useState(3000);

  const [message, setMessage] = useState(null);

  const onNewToast = data => {
    // if (Platform.OS === 'android' && data.useNativeToast) {
    //   return ToastAndroid.show(data.message, ToastAndroid.LONG);
    // }
    if (data.duration) {
      setTimeOutDuration(data.duration);
    }
    setMessage(data.message);
    setMessageType(data.type);
  };

  const closeToast = useCallback(() => {
    setMessage(null);
    setTimeOutDuration(3000);
    animatedOpacity.value = withTiming(0);
    clearInterval(timeOutRef.current);
  }, [animatedOpacity]);

  useEffect(() => {
    if (message) {
      timeOutRef.current = setInterval(() => {
        if (timeOutDuration === 0) {
          closeToast();
        } else {
          setTimeOutDuration(prev => prev - 1000);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timeOutRef.current);
    };
  }, [closeToast, message, timeOutDuration]);

  useEffect(() => {
    if (message) {
      animatedOpacity.value = withTiming(1, {duration: 1000});
    }
  }, [message, animatedOpacity]);

  useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) {
    return null;
  }

  return (
    <Animated.View style={[styles.container(messageType), animatedStyle]}>
      <TouchableOpacity onPress={closeToast}>
        <Text style={styles.text}>{message}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: messageType => ({
    position: 'absolute',
    bottom: '9%',
    left: '5%',
    right: '5%',
    backgroundColor: colors[messageType],
    zIndex: 1,
    height: 39,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  }),
  text: {
    // padding: 14,
    color: 'white',
    fontSize: windowSize.wScale(16),
    textAlign: 'center',
  },
});
export default Toast;
