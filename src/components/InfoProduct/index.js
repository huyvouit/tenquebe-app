import React from 'react';
import {Image, View, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Theme} from 'constants/theme';
import useTheme from 'hooks/useTheme';
import Icons from 'assets/icons';
import Images from 'assets/images';

import makeStyles from './styles';

const InfoProduct = props => {
  const {name, option, status, price, arrowRight, bg} = props;
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Image source={Images.Default} />
      <View style={styles.info}>
        <Text style={[styles.name_product]} numberOfLines={2}>
          {name}
        </Text>
        {option && (
          <Text style={[styles.option]}>
            {`옵션 : `}
            {option}
          </Text>
        )}
        <View style={styles.status_price}>
          {status == '판매중' ? (
            <Text style={{...styles.status, color: Theme.colors.blueButton}}>
              {status}
            </Text>
          ) : status == '품절' ? (
            <Text style={{...styles.status, color: Theme.colors.redButton}}>
              {status}
            </Text>
          ) : (
            <Text style={{...styles.status}}>{status}</Text>
          )}
          {price && <Text style={styles.price}>{price}</Text>}
        </View>
      </View>
      {arrowRight && (
        <SvgXml
          xml={Icons.IconArrowRight}
          width={16}
          height={16}
          fill={theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white}
          color={
            theme == 'light' ? Theme.colors.blackTitle : Theme.colors.white
          }
        />
      )}
    </View>
  );
};

export default InfoProduct;
