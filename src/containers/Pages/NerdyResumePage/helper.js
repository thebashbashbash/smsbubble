import moment from 'moment';

export const elapsedYearsBetweenTwoDates = (startDate, endDate) => {
  let start = moment();
  if (startDate.toLowerCase() !== 'now') {
    start = moment(startDate.replace(/\//ig, '-'));
  }

  let end = moment();
  if (endDate.toLowerCase() !== 'now') {
    end = moment(endDate.replace(/\//ig, '-'));
  }

  return Math.round(end.diff(start, 'years', true) * 100) / 100;
};

export const splitDateRangeToArray = dateRange => dateRange.replace(/ - /g, '--').split('--');
