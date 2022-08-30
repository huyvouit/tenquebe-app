import dayjs from 'dayjs'

export function format(daystring) {
  return dayjs(daystring).format('YYYY-MM-DD HH:mm')
}
