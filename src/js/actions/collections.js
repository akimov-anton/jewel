/**
 * Created by Toha on 30.03.2017.
 */
import fetch from 'isomorphic-fetch';
const Config = require('Config');

export function getItems(collectionId) {
    return (dispatch, getState) => {
        return fetch(`${Config.serverUrl}/items`)
            .then(response => console.log(response));
    }

}
