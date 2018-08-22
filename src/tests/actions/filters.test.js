import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const startDate = moment(0);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate end start date action object', () => {
    const endDate = moment(10);
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(10)
    });
})

test('should set up set text filter object', () => {
    const action = setTextFilter('rent');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should set up set text filter object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set up sort By Date object', () => {
    const action = sortByDate();
    expect(action).toEqual({type: 'SORT_BY_DATE'});
})

test('should set up sort By Date object', () => {
    const action = sortByAmount();
    expect(action).toEqual({type: 'SORT_BY_AMOUNT'});
})