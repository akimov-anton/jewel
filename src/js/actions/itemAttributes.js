/**
 * Created by Toha on 02.07.2017.
 */

import client from '../vendor/feathers';

const attributesService = client.service('itemAttributes');

export function getAttributes() {
    return (dispatch, getState) => {
        attributesService.find()
            .then(attributes => {
                if (attributes.length) {
                    dispatch({type: 'SET_ITEM_ATTRIBUTES', attributes});
                }
            });
    };
}

export function addAttributes(data) {
    return (dispatch, getState) => {
        attributesService.create(data)
            .then(attribute => {
                dispatch({type: 'ADD_ITEM_ATTRIBUTE', attribute});
            })
    }
}

export function updateAttribute(id, data) {
    return (dispatch, getState) => {
        attributesService.update(id, data)
            .then(attribute => {
                console.log(attribute);
                dispatch({type: 'EDIT_ITEM_ATTRIBUTE', attribute});
            })
    }
}