import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import StepIndicator from 'react-native-step-indicator';

import {Theme} from 'constants/theme';
import Icons from 'assets/icons';
import useTheme from 'hooks/useTheme';

import TextTitle from 'components/TextTitle';

import makeStyles from './styles';

export default function DeliveryInformation(props) {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const {timeline} = props;
  //   const copyToClipboard = () => {
  //     Clipboard.setString('hello world')
  //   }
  const [position, setPosition] = useState(1);
  const labels = ['준비완료', '픽업', '배달완료'];

  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    stepStrokeCurrentColor: 'rgba(37,63,235,0.3)',
    stepStrokeWidth: 0,
    currentStepStrokeWidth: 0,
    stepStrokeFinishedColor: Theme.colors.blueButton,
    separatorStrokeWidth: 2,
    separatorFinishedColor: Theme.colors.blueButton,
    separatorUnFinishedColor: Theme.colors.gray,
    stepIndicatorFinishedColor: Theme.colors.blueButton,
    stepIndicatorUnFinishedColor: Theme.colors.gray,
    stepIndicatorCurrentColor: Theme.colors.blueButton,
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: Theme.colors.blueButton,
    labelColor: theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
    labelSize: 16,
    labelFontFamily: Theme.fonts.fontFamily.Pretendard,
    currentStepLabelColor:
      theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white,
  };
  return (
    <View style={styles.container}>
      <View style={styles.title_header(timeline)}>
        <TextTitle title="배달정보" />
        {timeline ? (
          <Text style={styles.time}>
            11:10 <Text>도착예정</Text>{' '}
          </Text>
        ) : null}
      </View>
      {timeline && (
        <View style={styles.timeline}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={position}
            labels={labels}
            renderLabel={({position, stepstatus}) => {
              return (
                <View style={{paddingTop: 18}}>
                  <Text style={styles.labels(stepstatus)}>
                    {labels[position]}
                  </Text>
                </View>
              );
            }}
            renderStepIndicator={({position, stepstatus}) => (
              <View style={{position: 'absolute', right: -5}}>
                <SvgXml
                  xml={Icons.IconCheck}
                  color="white"
                  width={32}
                  height={32}
                />
              </View>
            )}
            stepCount={labels.length}
          />
        </View>
      )}
      <View style={styles.flexbox}>
        <Text style={styles.title}>주소</Text>
        <Text style={styles.name}>
          {`서울특별시 금천구 가산디지털1로 16 (가산 SK V1 AP타워) 메타업 715호`}
          {/* <Text style={styles.copy}>
            <SvgXml xml={Icons.IconCopy} />
            복사
          </Text> */}
        </Text>
      </View>
      <View style={styles.flexbox}>
        <Text style={styles.title}>연락처</Text>
        <Text style={styles.name}>010-1234-5678</Text>
      </View>
    </View>
  );
}
