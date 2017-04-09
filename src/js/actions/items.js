/**
 * Created by Toha on 26.03.2017.
 */
import fetch from 'isomorphic-fetch';
const Config = require('Config');
const serverUrl = Config.serverUrl;
const URL = `${serverUrl}/items`;
import {browserHistory} from 'react-router';
import {fromJS} from 'immutable';
import {getCollections} from './collections';

function fetchItems(collectionId, callback) {

    return fetch(`${URL}?collectionId=${collectionId}`)
        .then(response => response.json())
        .then(json => {
            callback(json);
        });
}

function fetchItem(id, callback) {
    return fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            callback(json);
        });
}

export function getItems(collectionName) {
    return (dispatch, getState) => {
        if (getState().collections.size) {
            let collection = getState().collections.find(collection => {
                return collection.get('name') === collectionName;
            });
            fetchItems(collection.get('id'), (json) => {

                dispatch({type: 'ADD_ITEMS', items: json});
            });
        } else {
            dispatch(getCollections(() => {
                let collection = getState().collections.find(collection => {
                    return collection.get('name') === collectionName;
                });
                fetchItems(collection.get('id'), (json) => {
                    // debugger;
                    dispatch({type: 'ADD_ITEMS', items: json});
                });
            }));
        }
    }
}

export function getItem(id) {
    return (dispatch, getState) => {
        let items = getState().items;
        if (items.size) {
            let item = items.find(item => {
                return item.get('id') === id;
            });
            if (!item) {
                fetchItem(id, json => {
                    dispatch({
                        type: 'ADD_ITEMS', items: [json]
                    })
                });
            }
        } else {
            fetchItem(id, json => {
                dispatch({
                    type: 'ADD_ITEMS', items: [json]
                })
            });
        }
    };
}

export function saveItem(itemInfo, successCallback, errorCallback) {
    return (dispatch, getState) => {
        return fetch(URL, {
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
