import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

export const isDateToday = (date) => {
  const today = dayjs().startOf('day');
  const targetDate = dayjs(date).startOf('day');

  return today.isSame(targetDate);
};

export const getListFormat = (date) => {
  const todayFormat = dayjs(date).format('LT');
  const anyFormat = dayjs(date).format('L');

  const result = isDateToday(date) ? todayFormat : anyFormat

  return result
}

export const getFullFormat = (date) => {
  const timeFormat = dayjs(date).format('LT');
  const textFormat = dayjs(date).format('ll');
  const finalFormat = `${textFormat} at ${timeFormat}`

  return finalFormat
}
