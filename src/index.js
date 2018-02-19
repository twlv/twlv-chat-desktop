import { bootstrap } from '@xinix/xin/core';

// import 'uikit/dist/css/uikit.css';
// import 'bulma/css/bulma.css';
import 'photon/dist/css/photon.css';

// import './style/global/css/bootstrap.min.css';
// import './style/global/css/bootstrap-extend.min.css';
// import './style/assets/css/site.min.css';
// import './style/global/vendor/animsition/animsition.css';
// import './style/global/vendor/asscrollable/asScrollable.css';
// import './style/main.scss';

// Plugin
// import './style/global/fonts/web-icons/web-icons.min.css';
// import './style/global/fonts/font-awesome/font-awesome.min.css';
// import './style/global/fonts/glyphicons/glyphicons.css';

(async function () {
  bootstrap({
    'view.transitionIn': 'fade',
    'view.transitionOut': 'fade',
    'view.loaders': [
      {
        test: /^my-/,
        load (view) {
          return import(`./views/${view.name}`);
        },
      },
    ],
  });

  await import('./components/my-app');

  document.addEventListener('started', () => {
    setTimeout(() => {
      document.body.removeAttribute('unresolved');
    }, 100);
  });
})();
