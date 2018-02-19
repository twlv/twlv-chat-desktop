import { define } from '@xinix/xin';
import Middleware from '@xinix/xin/components/middleware';

class MyAuthMiddleware extends Middleware {
  callback () {
    return function (ctx, next) {
      if (ctx.uri === '/auth') {
        ctx.app.hideSidebar();
        return next();
      }

      ctx.app.showSidebar();

      if (!ctx.app.chat) {
        return ctx.app.navigate('/auth');
      }

      return next();
    };
  }
}

define('my-auth-middleware', MyAuthMiddleware);
