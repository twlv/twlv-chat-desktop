import { define } from '@xinix/xin';
import { App } from '@xinix/xin/components';

import html from './my-app.html';
import './my-app.scss';

import '@xinix/xin/middlewares/lazy-view';
import './my-auth-middleware';

import { Chat } from '../../lib/chat';

export class MyApp extends App {
  get props () {
    return Object.assign({}, super.props, {
      chat: {
        type: Object,
        value: () => (null),
      },
    });
  }

  get template () {
    return html;
  }

  ready () {
    super.ready();

    let { keystore } = window.localStorage;
    if (keystore) {
      try {
        this.set('chat', new Chat(keystore));
      } catch (err) {
        console.error('Error caught', err);
      }
    }
  }

  hideSidebar () {
    this.$$('.sidebar').classList.add('hidden');
  }

  showSidebar () {
    this.$$('.sidebar').classList.remove('hidden');
  }

  authenticate (keystore) {
    let chat = new Chat(keystore);
    window.localStorage.keystore = chat.identity.privKey;
    this.set('chat', chat);
  }

  deauthenticate () {
    delete window.localStorage.keystore;
    this.set('chat', null);
  }

  generate () {
    let chat = new Chat();
    window.localStorage.keystore = chat.identity.privKey;
    this.set('chat', chat);
  }
}
define('my-app', MyApp);
