import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Images from 'assets/images';

import HeaderPage from 'components/HeaderPage';
import TabItem from 'components/TabItem';

import makeStyles from './styles';
import InputWithTitle from 'components/InputWithTitle';

const PersonalInformationScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [address, setAddress] = useState('');
  const [isVerifyAddress, setIsVerifyAddress] = useState(false);
  const [telephone, setTelephone] = useState('');
  const [isVerifyTelephone, setIsVerifyTelephone] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.PERSON_INFORMATION}
        leftComponent={
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <SvgXml
              xml={Icons.IconArrowLeft}
              color={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
              fill={
                theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
              }
            />
          </TouchableOpacity>
        }
      />

      <View style={styles.header}>
        <Image source={Images.Default} style={styles.image} />
        <Text style={styles.name}>사진 수정</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.content}>
          {/* address */}
          <View style={styles.input}>
            <InputWithTitle
              title={'주소'}
              value={address}
              position={'15'}
              buttonVerify
              actionVerify={() => setIsVerifyAddress(!isVerifyAddress)}
              textVerify={'주소검색'}
            />
            {isVerifyAddress && (
              <View style={{marginTop: 15}}>
                <InputWithTitle
                  value={address}
                  placeholder={'상세주소를 입력해주세요.'}
                  position={'15'}
                />
              </View>
            )}
          </View>

          {/* telephone */}
          <View style={styles.input}>
            <InputWithTitle
              title={'전화번호'}
              value={telephone}
              position={'15'}
              placeholder={'‘-’를 제외하고 입력해주세요.'}
              buttonVerify
              actionVerify={() => setIsVerifyTelephone(!isVerifyTelephone)}
              textVerify={'인증번호'}
            />
            {isVerifyTelephone && (
              <View style={{marginTop: 15}}>
                <InputWithTitle
                  value={address}
                  placeholder={'상세주소를 입력해주세요.'}
                  position={'15'}
                />
                <Text style={styles.remain}>2분 30초 남음</Text>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity style={styles.button_end}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalInformationScreen;
