/**
 * Created by Toha on 28.04.2017.
 */

import fetch from 'isomorphic-fetch';
import {browserHistory} from 'react-router';
const Config = require('Config');
const serverUrl = Config.serverUrl;
const URL = `${serverUrl}/pages`;


export function removePage(id) {
    return (dispatch, getState) => {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE'
        }).then(response => {
            if (response.status == 200) {
                dispatch({type: 'REMOVE_PAGE', id});
            }
            console.log(response);
        });
    }
}

export function getPages(callback) {
    return (dispatch, getState) => {
        let currentState = getState();
        if (currentState.pages && currentState.pages.size) {
            return currentState.pages;
        }
        return fetch(URL)
            .then(response => {
                response.json()
                    .then(json => {
                        if (json.length) {
                            json.map(item => {
                                dispatch({type: 'ADD_PAGE', item});
                            });
                        }
                        if (callback) {
                            callback();
                        }
                    });
            });
    }
}

export function getPageByLink(link) {
    return (dispatch, getState) => {
        let currentState = getState();
        if (currentState.pages && currentState.pages.size) {
            let page = currentState.pages.find(page => page.get('link') === link);
            if (page) {
                return page;
            }
        }
        return fetch(`${URL}?link=${link}`)
            .then(response => {
                if (response.status == 200) {
                    response.json()
                        .then(json => {
                            if (json.length) {
                                json.map(item => {
                                    dispatch({type: 'ADD_PAGE', item});
                                });
                            }
                        });
                }
            });
    }
}

export function savePage(data) {
    let updateMode = !!data.id;
    let url = updateMode ? `${URL}/${data.id}` : URL;
    return (dispatch, getState) => {
        return fetch(url, {
            method: updateMode ? 'PATCH' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status == 200 || response.status == 201) {
                    response.json()
                        .then(item => {
                            dispatch({type: updateMode ? 'UPDATE_PAGE' : 'ADD_PAGE', item});
                            browserHistory.push(`/page/${item.link}`);
                        });
                }
            });
    };
}

export function savePageCategory(data) {
    return (dispatch, getState) => {
        return fetch(`${serverUrl}/pageCategories`, {
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
                        .then(item => {
                            dispatch({type: 'ADD_PAGE_CATEGORY', item});
                        });
                }
            });
    };
}

export function getPageCategories() {
    return (dispatch, getState) => {
        let currentState = getState();
        if (currentState.pageCategories && currentState.pageCategories.size) {
            return currentState.pageCategories;
        }
        return fetch(`${serverUrl}/pageCategories`)
            .then(response => {
                response.json()
                    .then(json => {
                        if (json.length) {
                            json.map(item => {
                                dispatch({type: 'ADD_PAGE_CATEGORY', item});
                            });
                        }
                    });
            });
    }
}