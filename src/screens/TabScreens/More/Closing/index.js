import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SelectList from 'react-native-dropdown-select-list';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Route from 'constants/navigationRoute';

import HeaderPage from 'components/HeaderPage';
import InputWithTitle from 'components/InputWithTitle';

import makeStyles from './styles';

const ClosingScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.CLOSING}
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

      <ScrollView style={styles.body}>
        <View style={styles.content}>
          <RegularHoliday />
          <TemporaryClose />
        </View>
        <TouchableOpacity style={styles.button_end} onPress={() => {}}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ClosingScreen;

export const RegularHoliday = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [list, setList] = useState([{id: 0}]);

  const handleAddItem = () => {
    const newItem = {id: Math.random()};
    setList([...list, newItem]);
  };
  const handleDeleteItem = item => {
    const temp = [...list].filter((i, index) => i.id != item.id);
    setList(temp);
  };

  return (
    <View style={styles.main}>
      <View style={styles.padding}>
        <Text style={styles.title}>
          {`정기 휴무일 `}
          <Text style={styles.sub}>(선택)</Text>
        </Text>
        {list.map((x, index) => {
          return (
            <View
              key={index + Math.random()}
              style={{...styles.flexbox, marginBottom: 15}}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {}}
                style={{flex: 1}}>
                <TextInput
                  placeholder="선택해주세요."
                  value={'9:30'}
                  editable={false}
                  style={styles.text_input1}></TextInput>
                <View style={styles.drop}>
                  <SvgXml
                    xml={Icons.IconArrowDown}
                    fill={Theme.colors.blackTitle}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {}}
                style={{flex: 1}}>
                <TextInput
                  placeholder="선택해주세요."
                  value={'9:30'}
                  editable={false}
                  style={styles.text_input1}></TextInput>
                <View style={styles.drop}>
                  <SvgXml
                    xml={Icons.IconArrowDown}
                    fill={Theme.colors.blackTitle}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDeleteItem(x)}>
                <Text style={[styles.title, styles.delete]}>삭제</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.add} onPress={handleAddItem}>
        <SvgXml
          xml={Icons.IconIncrease}
          fill={Theme.colors.blueButton}
          width={16}
          height={16}
        />
        <Text style={styles.text_add}>정기 휴무일 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

export const TemporaryClose = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const [list, setList] = useState([{id: 0}]);

  const handleAddItem = () => {
    const newItem = {id: Math.random()};
    setList([...list, newItem]);
  };
  const handleDeleteItem = item => {
    const temp = [...list].filter((i, index) => i.id != item.id);
    setList(temp);
  };

  return (
    <View style={styles.main}>
      <View style={styles.padding}>
        <Text style={styles.title}>
          {`임시 휴무일 `}
          <Text style={styles.sub}>(선택)</Text>
        </Text>
        {list.map((x, index) => {
          return (
            <View
              key={index + Math.random()}
              style={{...styles.flexbox, marginBottom: 15}}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {}}
                style={{flex: 1}}>
                <TextInput
                  placeholder="임시 휴무일을 선택해주세요."
                  editable={false}
                  style={styles.text_input1}></TextInput>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDeleteItem(x)}>
                <Text style={[styles.title, styles.delete]}>삭제</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.line}></View>

      <TouchableOpacity style={styles.add} onPress={handleAddItem}>
        <SvgXml
          xml={Icons.IconIncrease}
          fill={Theme.colors.blueButton}
          width={16}
          height={16}
        />
        <Text style={styles.text_add}>임시 휴무일 추가</Text>
      </TouchableOpacity>
    </View>
  );
};
