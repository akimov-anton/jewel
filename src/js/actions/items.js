/**
 * Created by Toha on 26.03.2017.
 */
const request = require('request');
import fetch from 'isomorphic-fetch';
const Config = require('Config');
const serverUrl = Config.serverUrl;
const URL = `${serverUrl}/items`;
import {browserHistory} from 'react-router';
import {fromJS} from 'immutable';
import {getCollections} from './collections';

import $ from 'jquery';
import FeathersClient from 'feathers-client';

const rest = FeathersClient.rest(serverUrl);
const feathersClient = FeathersClient()
    .configure(FeathersClient.hooks())
    .configure(rest.jquery($));
const uploadService = feathersClient.service('uploads');


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
            fetchItems(collection.get('id'), (items) => {

                if (items.length) {
                    items.map(item => dispatch({type: 'ADD_ITEM', item}));
                }
            });
        } else {
            dispatch(getCollections(() => {
                let collection = getState().collections.find(collection => {
                    return collection.get('name') === collectionName;
                });
                fetchItems(collection.get('id'), (items) => {
                    if (items.length) {
                        items.map(item => dispatch({type: 'ADD_ITEM', item}));
                    }
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
                return fetchItem(id, item => dispatch({type: 'ADD_ITEM', item}));
            }
        } else {
            return fetchItem(id, item => dispatch({type: 'ADD_ITEM', item}));
        }
    };
}

export function saveItem(data, successCallback, errorCallback) {
    let {item: itemInfo, images} = data;
    let updateMode = !!itemInfo.id;
    let url = updateMode ? `${URL}/${itemInfo.id}` : URL;
    return (dispatch, getState) => {
        return fetch(url, {
            method: updateMode ? 'PATCH' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        })
            .then(response => {
                if (response.status == 200 || response.status == 201) {
                    response.json()
                        .then(item => {
                            if (!updateMode) {
                                dispatch({type: 'ADD_ITEM', item});
                            } else {
                                dispatch({type: 'UPDATE_ITEM', item});
                            }

                            images.forEach((file) => {
                                let fileReader = new FileReader();

                                fileReader.readAsDataURL(file); // encode file
                                fileReader.onloadend = () => {
                                    uploadService
                                        .create({uri: fileReader.result})
                                        .then(response => {
                                            console.log('Server responded with: ', response);
                                        });
                                };
                            });
                            //     browserHistory.push(`/item/${item.id}`);
                        });
                } else {
                    errorCallback(response);
                }
            });
    };
}

export function deleteItem(id) {
    return (dispatch, getState) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.status == 200) {
                    response.json()
                        .then(item => {
                            dispatch({type: 'REMOVE_ITEM', id});
                            let collections = getState().collections;
                            let collection = collections.find(collection => collection.get('id') === item.collectionId);
                            browserHistory.push(`/collection/${collection.get('name')}`);
                        });
                }
            });
    };
}
