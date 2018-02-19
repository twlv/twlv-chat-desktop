import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components/view';

import html from './my-profile.html';
import './my-profile.scss';

export class MyProfile extends View {
  get template () {
    return html;
  }

  deauth () {
    this.__app.deauthenticate();
    this.__app.navigate('/auth');
  }
}
define('my-profile', MyProfile);
