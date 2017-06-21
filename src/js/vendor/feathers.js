const Config = require('Config');
const serverUrl = Config.serverUrl;
import $ from 'jquery';
import feathers from 'feathers-client';
import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication-client';

const rest = feathers.rest(serverUrl);
const client = feathers()
    .configure(rest.jquery($));
client.configure(hooks());
client.configure(authentication({
    storage: window.localStorage
}));

export default client;
