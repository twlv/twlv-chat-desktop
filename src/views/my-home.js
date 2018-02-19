import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components/view';

import html from './my-home.html';
import './my-home.scss';

export class MyHome extends View {
  get template () {
    return html;
  }
}
define('my-home', MyHome);
