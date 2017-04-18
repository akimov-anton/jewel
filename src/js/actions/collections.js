/**
 * Created by Toha on 30.03.2017.
 */
import fetch from 'isomorphic-fetch';
const Config = require('Config');
const serverUrl = Config.serverUrl;
const URL = `${serverUrl}/collections`;
import {fromJS} from 'immutable';

export function removeCollection(id) {
    return (dispatch, getState) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.status == 200) {
                dispatch({type: 'REMOVE_COLLECTION', id});
            }
            console.log(response);
        });
    }
}

export function getCollections(callback) {
    return (dispatch, getState) => {
        let currentState = getState();
        if (currentState.collections && currentState.collections.size) {
            return currentState.collections;
        }
        return fetch(URL)
            .then(response => {
                response.json()
                    .then(json => {
                        if (json.length) {
                            json.map(item => {
                                dispatch({type: 'ADD_COLLECTION', item});
                            });
                        }
                        if (callback) {
                            callback();
                        }
                    });
            });
    }
}
export function saveCollection(collectionInfo, successCallback, errorCallback) {
    return (dispatch, getState) => {
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(collectionInfo)
        })
            .then(response => {
                if (response.status == 200 || response.status == 201) {
                    response.json()
                        .then(item => {
                            dispatch({type: 'ADD_COLLECTION', item});

                            // dispatch({type: 'ADD_COLLECTIONS', items: [json]});
                            // browserHistory.push(`/collection/${json.id}`);
                            // successCallback(json);
                        });
                } else {
                    errorCallback(response);
                }
            });
    };
}