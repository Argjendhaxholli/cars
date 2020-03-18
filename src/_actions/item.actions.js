import items from '../_api/items';
import history from '../_helpers/history';
import { CREATE_ITEM, FETCH_ITEMS, FETCH_ITEM, EDIT_ITEM } from './types';


// Funksioni per me kriju Stream
export const createItem = formValues => async (dispatch) => {

    const response = await items.post('/items', { item: formValues });

    dispatch({ type: CREATE_ITEM, payload: response.data });
    history.push('/');
};

// Funksioni per me i marr krejt Streams
export const fetchItems = formValues => async (dispatch) => {
    const response = await items.get('/items', formValues);

    dispatch({ type: FETCH_ITEMS, payload: response.data });
};

// Funksioni per me marr 1 Stream ne baz te ID
export const fetchItem = id => async dispatch => {
    const response = await items.get(`/items/${id}`);

    dispatch({ type: FETCH_ITEM, payload: response.data });
};

// Funksioni per me editu nje stream ne baz te ID
export const editItem = (id, formValues) => async dispatch => {
    const response = await items.patch(`/items/${id}`, formValues);

    dispatch({ type: EDIT_ITEM, payload: response.data });
};
