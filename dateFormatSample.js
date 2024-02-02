const dayjs = require('dayjs');

var dateSample = "1996-08-29 10:00 AM"

var date = dayjs(dateSample, 'YYYY-MM-DD HH:mm A')
console.log(date.format('DD MMMM YYYY dddd HH:mm'))