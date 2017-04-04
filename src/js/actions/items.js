/**
 * Created by Toha on 26.03.2017.
 */
import fetch from 'isomorphic-fetch';
const Config = require('Config');
import { browserHistory } from 'react-router';
import {fromJS} from 'immutable';

// export function fetchItems (collectionId) => {
//     return {
//         type: 'FETCH_ITEMS',
//         collectionId
//     }
// }

export function getItems(collectionId) {
    return (dispatch, getState) => {
        return fetch(`${Config.serverUrl}/items?collectionId=${collectionId}`)
            .then(response => console.log(response));
    }
}

export function saveItem(itemInfo, successCallback, errorCallback) {
    return (dispatch, getState) => {
        return fetch(`${Config.serverUrl}/items`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
            .then(response => {
                if (response.status == 200 || response.status == 201) {
                    response.json()
                        .then(json => {
                            console.log(json);

                            dispatch({type: 'ADD_ITEMS', items: fromJS([json])});
                            browserHistory.push(`/item/${json.id}`);
                            // successCallback(json);
                        });
                } else {
                    errorCallback(response);
                }
            });
    };
}