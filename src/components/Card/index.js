import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DonutChart} from 'react-native-circular-chart';

import useTheme from 'hooks/useTheme';

import {Theme} from 'constants/theme';

import toast from 'components/CustomToast/toast';
import StatusOrder from 'components/StatusOrder';
import ModalPreparation from 'screens/TabScreens/OrderReception/NewApplicants/ModalPreparation';

import makeStyles from './styles';
import CancelOrderScreen from 'screens/TabScreens/OrderReception/CancelOrder';

const Card = ({item, notBorderBottom, radius}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const theme = useTheme();

  const styles = makeStyles(theme);
  return (
    <>
      {isOpenModal && (
        <CancelOrderScreen
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      <TouchableOpacity
        style={styles.card(notBorderBottom, radius)}
        activeOpacity={0.7}
        onPress={() => setIsOpenModal(true)}>
        <View style={styles.left}>
          <View style={styles.header}>
            <StatusOrder statusOrder={item.status} />

            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.total}>{item.total}</Text>
        </View>

        <View style={styles.right}>
          {item.active === '접수' && (
            <TouchableOpacity
              style={styles.active}
              onPress={() =>
                toast.normal({
                  message: `${item.status}${item.title}${item.total}`,
                  duration: 3000,
                })
              }>
              <Text style={[styles.button, styles.buttonSubmit]}>
                {item.active}
              </Text>
            </TouchableOpacity>
          )}
          {item.active === '완료' && (
            <TouchableOpacity style={[styles.active, styles.create]}>
              <Text style={styles.button}>{item.active}</Text>
            </TouchableOpacity>
          )}
          {item.active === 'round' && (
            <View style={styles.sectionWrapper}>
              <DonutChart
                data={[
                  {name: '10분', value: 300, color: Theme.colors.blueButton},
                  {name: '20분', value: 60, color: Theme.colors.gray},
                ]}
                strokeWidth={6}
                radius={35}
                containerWidth={76}
                containerHeight={75}
                type="round"
                startAngle={0}
                endAngle={360}
                labelValueStyle={{
                  fontSize: 0,
                }}
                labelTitleStyle={styles.titleStyle}
                animationType="slide"
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Card;
