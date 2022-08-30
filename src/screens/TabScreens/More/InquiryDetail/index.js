import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Formik} from 'formik';
import * as yup from 'yup';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Route from 'constants/navigationRoute';

import HeaderPage from 'components/HeaderPage';
import TextTitle from 'components/TextTitle';

import makeStyles from './styles';

const InquiryDetailScreen = props => {
  const {result} = props.route.params;
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [answer, setAnswer] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container(answer)}>
        <HeaderPage
          title={Route.INQUIRY_DETAIL}
          leftComponent={
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <SvgXml
                xml={Icons.IconArrowLeft}
                color={
                  theme == 'light'
                    ? Theme.colors.blackTitle
                    : Theme.colors.white
                }
                fill={
                  theme == 'light'
                    ? Theme.colors.blackTitle
                    : Theme.colors.white
                }
              />
            </TouchableOpacity>
          }
        />

        <View style={styles.body}>
          <View style={styles.content}>
            {(!answer || result) && (
              <View>
                <View style={styles.header}>
                  <Text style={styles.title}>
                    문의사항 제목 입력 문의사항 제목 입력 문의사항 제목 입력
                    문의사항 제목 입력 문의사항 제목 입력{' '}
                  </Text>
                  <Text style={styles.sub}>환불문의 | 22/08/05(금)</Text>
                </View>
                <View style={styles.questions}>
                  <Text
                    style={{
                      ...styles.text_questions,
                      marginBottom: result ? 40 : 0,
                    }}>
                    환불하게되면 할인받은 쿠폰은 어떻게 되나요?
                  </Text>
                  {result && (
                    <View style={styles.view_answer}>
                      <Text>사장님 답변 쿠폰은 반환되지 않습니다.</Text>
                    </View>
                  )}
                </View>
              </View>
            )}
            {answer && (
              <View>
                <View style={[styles.header, styles.header_content]}>
                  <TextTitle title="문의내용" />
                  <Text style={{...styles.text_questions, marginTop: 15}}>
                    환불하게되면 할인받은 쿠폰은 어떻게 되나요?
                  </Text>
                </View>
                <View style={styles.answer}>
                  <TextTitle title="답변내용" />
                  <TextInput style={styles.input} multiline />
                </View>
              </View>
            )}
          </View>
          {!result && (
            <TouchableOpacity
              style={styles.button_end}
              onPress={answer ? () => {} : () => setAnswer(true)}>
              {/* {question && <Text style={styles.text}>{'답변하기'}</Text>} */}
              <Text style={styles.text}>{answer ? '저장' : '답변하기'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InquiryDetailScreen;
