import * as Types from 'application/state/query/stations/types';

export const fetchListStart = (byFilter = null) => ({ type: Types.FETCH_LIST.START, payload: { byFilter, isFetching: true } });
export const fetchListPending = () => ({ type: Types.FETCH_LIST.PENDING, payload: { isFetching: true } });
export const fetchListCancelled = () => ({ type: Types.FETCH_LIST.CANCELLED, payload: { isFetching: false } });
export const fetchListSuccess = data => ({
    type: Types.FETCH_LIST.SUCCESS,
    payload: {
        data,
        isFetching: false
    },
});
export const fetchListFailure = error => ({
    type: Types.FETCH_LIST.FAILURE,
    payload: {
        error,
        isFetching: false
    },
});
