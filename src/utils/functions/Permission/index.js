import {Platform} from 'react-native';
import {
  requestMultiple,
  PERMISSIONS,
  RESULTS,
  checkMultiple,
  requestNotifications,
} from 'react-native-permissions';
// import Geolocation from 'react-native-geolocation-service';
const android_permission = [
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.CAMERA,
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
];
const ios_permission = [PERMISSIONS.IOS.PHOTO_LIBRARY, PERMISSIONS.IOS.CAMERA];
const PERMISSION_by_OS =
  Platform.OS === 'ios' ? ios_permission : android_permission;

export function askPermission() {
  return requestMultiple(PERMISSION_by_OS);
}
// export async function getLocation() {
//   return new Promise((resolve, reject) => {
//     Geolocation.getCurrentPosition(
//       position => resolve(position),
//       error => reject(error),
//       {enableHighAccuracy: true, timeout: 15000},
//     );
//   });
// }
