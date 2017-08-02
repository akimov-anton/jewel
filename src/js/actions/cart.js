/**
 * Created by Toha on 09.03.2017.
 */


export const addToCart = (id, count = 1) => {
    return {
        type: 'ADD_ITEM_TO_CART',
        id: id,
        count
    }
};

export function removeItem(id) {
    return (dispatch, getState) => {
        dispatch({type: 'REMOVE_ITEM_FROM_CART', id});
    }
}