import { environment } from '../../environments/environment';

// Server test
export const APP_URL = environment.ws_url;

export let isPortal = false;
export const CONSTANT_URL = {
    BASE_URL: APP_URL + 'market/',
    CLIENT: 'client'
};

