import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import ImagePicker from 'react-native-image-crop-picker';

import {Theme} from 'constants/theme';
import Route from 'constants/navigationRoute';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import HeaderPage from 'components/HeaderPage';
import InfoProduct from 'components/InfoProduct';
import InputWithTitle from 'components/InputWithTitle';

import makeStyles from './styles';
import Images from 'assets/images';
import ButtonClearText from 'components/ButtonClearText';

const ChangeImageScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [images, setImages] = useState([]);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      setImages([...images, image.path]);
    });
  };

  const handleDeleteImage = item => {
    //
  };
  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.CHANGE_IMAGE}
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
      <View style={styles.body}>
        <View style={styles.content}>
          <ScrollView style={styles.main}>
            <Text style={styles.title}>
              이미지 업로드 <Text style={styles.sub}>(선택)</Text>
            </Text>

            <View style={styles.grid}>
              <TouchableOpacity
                style={styles.button_selected}
                onPress={choosePhotoFromLibrary}>
                <SvgXml
                  xml={Icons.IconImage}
                  fill={
                    theme == 'light'
                      ? Theme.colors.blackTitle
                      : Theme.colors.white
                  }
                />
                <Text style={styles.text_image}>{`${images.length}/5`}</Text>
              </TouchableOpacity>
              {images.map((item, index) => {
                return (
                  <View key={index + 100} style={styles.button_selected}>
                    <Image source={{uri: item}} />
                    <View style={styles.clear}>
                      <ButtonClearText action={() => handleDeleteImage(item)} />
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.text_end}>
            <Text>
              이미지 파일(JPG,PNG)을 기준으로 최대 10MB이하 최대 5개까지 등록
              가능합니다.
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button_end(images.length)}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeImageScreen;
