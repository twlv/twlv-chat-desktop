import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components/view';

import html from './my-auth.html';
import './my-auth.scss';

import { Chat } from '../../lib/chat';

export class MyAuth extends View {
  get template () {
    return html;
  }

  generate () {
    this.__app.generate();
    this.__app.navigate('/');
  }
}
define('my-auth', MyAuth);
