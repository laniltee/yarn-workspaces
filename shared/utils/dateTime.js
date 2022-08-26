import moment from 'moment';

export const getFormattedCurrentDate = () => {
    return moment().format('YYYY-MM-DD')
}