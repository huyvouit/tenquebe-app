import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import StatusOrder from 'components/StatusOrder';

import makeStyles from './styles';
import windowSize from 'constants/windowSize';

const OrderItem = ({
  id,
  number,
  title,
  status,
  name,
  desc,
  date,
  textColor,
  fontSize,
  button,
  actionPrimary,
  actionHold,
  actionAcknowledgement,
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const BLUE = ['신규', '답변완료'];
  const BLACK = ['업데이트'];
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={actionPrimary} style={styles.touch}>
        <View style={styles.flexbox}>
          <View style={{marginRight: 20, flex: 1}}>
            {number && <Text style={styles.id}>{number}</Text>}

            {title && (
              <Text style={styles.title}>
                {status &&
                  (BLUE.includes(status) ? (
                    <Text
                      style={[
                        styles.title,
                        styles.status,
                        styles.color('blue'),
                      ]}>
                      {status}
                      {` `}
                    </Text>
                  ) : BLACK.includes(status) ? (
                    <Text
                      style={[
                        styles.title,
                        styles.status,
                        styles.color('black'),
                      ]}>
                      {status}
                      {` `}
                    </Text>
                  ) : (
                    <Text style={[styles.title, styles.status]}>
                      {status}
                      {` `}
                    </Text>
                  ))}
                {title}
              </Text>
            )}
          </View>
          <View style={{marginTop: 5}}>
            <SvgXml
              xml={Icons.IconArrowRight}
              width={16}
              height={16}
              fill={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
              color={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
            />
          </View>
        </View>
        <View style={{marginTop: 5}}>
          {name && <Text style={styles.name}>{name}</Text>}
          <Text style={styles.desc(textColor)}>
            {desc}
            <Text
              style={{
                ...styles.date(textColor),
                fontSize: fontSize ? windowSize.wScale(fontSize) : 14,
              }}>
              {date}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
      {button && (
        // <View style={styles.line} />
        <View style={styles.flexbox}>
          <TouchableOpacity style={[styles.btn, styles.left]}>
            <Text style={styles.text_btn}>보류</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.right]}>
            <Text style={styles.text_btn}>보류</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default OrderItem;
