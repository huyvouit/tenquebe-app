import React, {useState, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';

import makeStyles from './styles';

const ModalPreparation = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {isOpenModal, setIsOpenModal} = props;
  const [count, setCount] = useState(10);

  const Decrease = () => {
    setCount(count - 1);
  };

  const Increase = () => {
    setCount(count + 1);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpenModal}
      onRequestClose={() => {
        setIsOpenModal(!isOpenModal);
      }}>
      <View style={styles.backdrop}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>준비시간 설정</Text>
          <View style={styles.body}>
            <View style={styles.content}>
              <TouchableOpacity onPress={Decrease} style={styles.buttonChange}>
                <SvgXml
                  xml={Icons.IconDecrease}
                  fill={theme == 'light' ? 'black' : Theme.colors.white}
                />
              </TouchableOpacity>

              <Text style={styles.count}>
                {count}
                <Text>분</Text>
              </Text>

              <TouchableOpacity onPress={Increase} style={styles.buttonChange}>
                <SvgXml
                  xml={Icons.IconIncrease}
                  fill={
                    theme == 'light'
                      ? Theme.colors.blackTitle
                      : Theme.colors.white
                  }
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.direction}>
            접수를 위해 배송준비 시간을 설정해주세요.
          </Text>

          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsOpenModal(!isOpenModal)}>
            <Text style={styles.textStyle}>접수 완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPreparation;
