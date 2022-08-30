import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';

import ButtonClearText from 'components/ButtonClearText';

import makeStyles from './styles';
import {SvgXml} from 'react-native-svg';
import Icons from 'assets/icons';

const InputWithTitle = ({
  textName,
  actionInput,
  actionClear,
  actionEye,
  actionBlur,
  actionVerify,
  keyboardType,
  title,
  subTitle,
  placeholder,
  value,
  currency,
  position,
  positionEye,
  showPass,
  isShowEye,
  error,
  buttonVerify,
  textVerify,
  notClear,
  require,
  textarea,
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.input}>
      {title && (
        <Text style={styles.label}>
          {title}
          {require && <Text style={styles.require}>*</Text>}
          <Text style={styles.sub}>{subTitle}</Text>
        </Text>
      )}
      <View style={styles.flexbox}>
        {textarea ? (
          <TextInput
            style={styles.textarea}
            multiline
            placeholder={placeholder}
            placeholderTextColor={Theme.colors.grayText}
            keyboardType={keyboardType}
            value={value}
            onChangeText={actionInput}
            onBlur={actionBlur}
          />
        ) : (
          <TextInput
            name={textName}
            style={styles.text_input}
            placeholder={placeholder}
            placeholderTextColor={Theme.colors.grayText}
            keyboardType={keyboardType}
            value={value}
            onChangeText={actionInput}
            onBlur={actionBlur}
            secureTextEntry={showPass}></TextInput>
        )}
        {!notClear && value != '' && (
          <View style={styles.button_clear(position)}>
            <ButtonClearText action={actionClear} />
          </View>
        )}
        {isShowEye && (
          <View style={styles.button_eye(positionEye)}>
            <TouchableOpacity onPress={actionEye}>
              {showPass ? (
                <SvgXml xml={Icons.IconHideEye} />
              ) : (
                <SvgXml xml={Icons.IconEye} />
              )}
            </TouchableOpacity>
          </View>
        )}
        {currency && <Text style={styles.currency}>원</Text>}
        {buttonVerify && (
          <TouchableOpacity style={styles.button_verify} onPress={actionVerify}>
            <Text style={styles.text}>{textVerify}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default InputWithTitle;
