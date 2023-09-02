// used for string length
const MAX_DAY = 'Wednesday'
const MAX_MONTH = 'September'

const DAY = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const useUtils = () => {
  const normalizeDateTimeTitle = (
    unixTimestamp: number,
    desc: string = '[add description]'
  ) => {
    let dateTimeTitle = ''
    try {
      const date = new Date()
      date.setTime(unixTimestamp)
      // dateTimeTitle = date.toISOString();

      // build date string, add padding
      const padMonth = false
      const padDay = true
      // const date = new Date(dateString);
      let month = MONTH[date.getMonth()]
      let day = DAY[date.getDay()]
      let dayNum = date.getDate()
      let hours = date.getHours().toString()
      let minutes = date.getMinutes()
      let tm = ''
      if (hours) {
        if (parseInt(hours, 10) < 10) hours = '0' + String(hours)
        if (minutes < 10) hours = '0' + String(minutes)
        tm = ` ${hours}:${minutes}`
      }

      const format = 1
      if (format === 1) {
        if (padMonth) month += ' '.repeat(MAX_MONTH.length - month.length)
        if (padDay) day += ' '.repeat(MAX_DAY.length - day.length)
        dateTimeTitle = `${day} ${month} ${
          dayNum > 9 ? dayNum : '0' + dayNum
        }, ${date.getFullYear()}${tm}`
      } else if (format === 2) {
        dateTimeTitle = `${
          date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
        }/${dayNum > 9 ? dayNum : '0' + dayNum}/${date.getFullYear()}${tm}`
      }

      // prepend some text, append description string
      // dateTimeTitle = '## ' + dateTimeTitle + ' - ' + desc;
      dateTimeTitle = dateTimeTitle + ' - ' + desc

      //console.log( "normalizeLogHeader", header );
      //document.write(header);
      // ## Thursday January 5, 2023 -
      // Monday Oct 25, 2021
      return dateTimeTitle
    } catch (e) {
      console.error('Invalid Timestamp', e)
    }
  }

  return {normalizeDateTimeTitle}
}

export {useUtils}
