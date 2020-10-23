import { createApp } from 'https://unpkg.com/vue@3.0.2/dist/vue.esm-browser.prod.js';
import { AppRoot } from './AppRoot.js';

const app = createApp( AppRoot );
app.mount( '#App' );
