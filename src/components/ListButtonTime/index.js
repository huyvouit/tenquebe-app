import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import useTheme from 'hooks/useTheme';
import Route from 'constants/navigationRoute';

import makeStyles from './styles';

const ListButtonTime = ({listBtn}) => {
  const styles = makeStyles(useTheme());
  return (
    <View style={styles.flexbox}>
      {listBtn.map((item, index) => {
        return index == listBtn.length - 1 ? (
          <TouchableOpacity
            key={item.id}
            style={[styles.button_state]}
            onPress={() => {}}>
            <Text style={styles.text_button}>{item.text}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            key={item.id}
            style={[styles.button_state, styles.button_right]}
            onPress={() => {}}>
            <Text style={styles.text_button}>{item.text}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ListButtonTime;
