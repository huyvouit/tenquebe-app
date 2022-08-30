import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Card from 'components/Card';

import makeStyles from './styles';

const CompletionScreen = props => {
  const styles = makeStyles(useTheme());
  const {data} = props;

  return data.length <= 0 ? (
    <View style={styles.empty}>
      <SvgXml xml={Icons.IconInProcess} />
      <Text style={styles.notify}>곧 신규주문이 들어올거에요!</Text>
    </View>
  ) : (
    <ScrollView style={styles.container}>
      {data.map(item => {
        return <Card key={item.id} item={item} />;
      })}
    </ScrollView>
  );
};

export default CompletionScreen;
