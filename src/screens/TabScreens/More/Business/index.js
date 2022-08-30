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

const BusinessScreen = props => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <HeaderPage
        title={Route.BUSINESS}
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
          {[...Array(count)].map((x, index) => {
            return index == count - 1 && count > 1 ? (
              <BusinessItem
                key={index + 101}
                deleting
                lastItem
                count={count}
                setCount={setCount}
                data={data}
              />
            ) : index >= 1 ? (
              <BusinessItem
                key={index + 101}
                deleting
                count={count}
                setCount={setCount}
                data={data}
              />
            ) : count == 1 ? (
              <BusinessItem
                key={index + 101}
                lastItem
                count={count}
                setCount={setCount}
                data={data}
              />
            ) : (
              <BusinessItem key={index + 101} data={data} />
            );
          })}
        </View>
        <TouchableOpacity style={styles.button_end} onPress={() => {}}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BusinessScreen;
const data = ['월', '화', '수', '목', '금', '토', '일'];
export const BusinessItem = ({deleting, lastItem, setCount, count, data}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.main}>
      <View style={styles.padding}>
        <View style={styles.flexbox}>
          <Text style={styles.title}>
            {`요일 `}
            <Text style={styles.sub}>(복수선택 가능)</Text>
          </Text>
          {deleting && (
            <TouchableOpacity onPress={() => setCount(count - 1)}>
              <Text style={[styles.title, styles.delete]}>삭제</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.flexbox, styles.list_date]}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.btn_date(true)}>
              <Text style={styles.text_date(true)}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.padding}>
        <Text style={styles.title}>영업시간</Text>
        <View style={styles.flexbox}>
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

          <Text style={{marginHorizontal: 5}}>~</Text>
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
        </View>
      </View>
      {lastItem && (
        <>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={styles.add}
            onPress={() => setCount(count + 1)}>
            <SvgXml
              xml={Icons.IconIncrease}
              fill={Theme.colors.blueButton}
              width={16}
              height={16}
            />
            <Text style={styles.text_add}>영업시간 추가</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
