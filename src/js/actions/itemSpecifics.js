/**
 * Created by Toha on 09.04.2017.
 */
import fetch from 'isomorphic-fetch';
const Config = require('Config');
const serverUrl = Config.serverUrl;
const URL = `${serverUrl}/itemSpecifics`;
import {browserHistory} from 'react-router';

function fetchSpecific(id, callback) {
    return fetch(`${URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            callback(json);
        });
}

export function getItemSpecific(id) {
    return (dispatch, getState) => {
        if (getState().itemSpecifics.size) {
            let itemSpecific = getState().itemSpecifics.find(Specific => {
                return Specific.get('id') === id;
            });
            if (!itemSpecific) {

            }
        }
    }
}

export function getItemSpecifics() {
    return (dispatch, getState) => {
        let currentState = getState();
        if (currentState.itemSpecifics && currentState.itemSpecifics.size) {
            return currentState.itemSpecifics;
        }
        return fetch(URL)
            .then(response => response.json())
            .then(json => {
                if (json.length) {
                    dispatch({type: 'ADD_ITEM_SPECIFICS', items: json});
                }
            });
    }
}

export function removeItemSpecific(id) {
    return (dispatch, getState) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.status == 200) {
                dispatch({type: 'REMOVE_ITEM_SPECIFIC', id});
            }
        });
    }
}

export function saveItemSpecific(data) {
    return (dispatch, getState) => {
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status == 200 || response.status == 201) {
                    response.json()
                        .then(json => {
                            dispatch({type: 'ADD_ITEM_SPECIFICS', items: [json]});
                        });
                }
            });
    };
}