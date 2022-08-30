import React, {useState, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

import useTheme from 'hooks/useTheme';

import makeStyles from './styles';

const ModalUnSubscribe = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {isOpenModal, setIsOpenModal} = props;
  const [accept, setAccept] = useState(false);

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
          <View style={styles.body}>
            <View style={styles.content}>
              <Text style={styles.count}>
                {' '}
                {accept ? ' 탈퇴가 완료되었습니다.' : '정말 탈퇴하시겠습니까?'}
              </Text>
            </View>
          </View>

          <View style={styles.btn}>
            {!accept && (
              <TouchableOpacity
                style={[styles.button, styles.border]}
                onPress={() => setIsOpenModal(!isOpenModal)}>
                <Text style={[styles.textStyle, styles.text_border]}>취소</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.button]}
              onPress={
                accept
                  ? () => setIsOpenModal(!isOpenModal)
                  : () => setAccept(true)
              }>
              <Text style={styles.textStyle}>
                {accept ? '확인' : '접수 완료'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalUnSubscribe;
