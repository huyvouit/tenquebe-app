import windowSize from 'constants/windowSize'
import {getDistance, getPreciseDistance} from 'geolib'
// import Geolocation from '@react-native-community/geolocation'

export function getDistance_(start, end) {
  try {
    return getDistance(start, end).toFixed(0)
  } catch (error) {
    return null
  }
}
export function getPreciseDistance_(start, end) {
  return getPreciseDistance(start, end).toFixed(0)
}

export function getCoordsDelta() {
  const {width, height} = windowSize.Demension
  const AspectRatio = width / height
  const latitudeDelta = 0.03
  const longitudeDelta = latitudeDelta * AspectRatio

  return {latitudeDelta, longitudeDelta}
}
export function getZoomScale(longitudeDelta) {
  if (isNaN(longitudeDelta)) return 20
  return Math.round(Math.log(360 / Number(longitudeDelta)) / Math.LN2)
}
const _onRegionChangeComplete = coords => {
  if (initialRegion) {
    const KMDistance = helper.distance(initialRegion?.latitude, initialRegion?.longitude, coords.latitude, coords.longitude, 'K')

    if (KMDistance > 5.0) {
      props.getNearByReports({
        // request backend if distance difference more than 5 kilometers
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    }
  }
}
