// import {Dimensions} from 'react-native';
// const Demension = {...Dimensions.get('window')};
// export default wSize = {
//   Demension,
//   wScale: size => {
//     return (Demension.width * size) / 375;
//   },
// };
import {Dimensions} from 'react-native';
// const Demension = {...Dimensions.get('window')};
const {width, height} = Dimensions.get('window');
const baseWidth = 390;
const baseHeight = 764;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export default wSize = {
  // Demension,
  wScale: size => {
    return Math.ceil(size * scale);
  },
};
