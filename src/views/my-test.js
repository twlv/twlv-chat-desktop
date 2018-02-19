import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components/view';

import html from './my-test.html';
import './my-test.scss';

export class MyTest extends View {
  get template () {
    return html;
  }
}
define('my-test', MyTest);
