import {Platform} from 'react-native'

export function CommaFormat(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
