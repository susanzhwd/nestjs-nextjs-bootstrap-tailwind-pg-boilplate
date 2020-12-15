import { action } from '@storybook/addon-actions';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';

function MockRouter({ children, router = {} }) {
  const [pathname, setPathname] = useState('/');

  const mockRouter = {
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push(url, as, options) {
      action('nextRouter.push')(url, as, options);
      return Promise.resolve(true);
    },
    replace(url, as, options) {
      action('nextRouter.replace')(url, as, options);
      return Promise.resolve(true);
    },
    reload() {
      action('nextRouter.reload')();
    },
    back() {
      action('nextRouter.back')();
    },
    prefetch(url, asPath, options) {
      action('nextRouter.prefetch')(url, asPath, options);
      return Promise.resolve();
    },
    beforePopState(cb) {
      action('nextRouter.beforePopState')(cb);
    },
    events: {
      on(type, handler) {
        action('nextRouter.events.on')(type, handler);
      },
      off(type, handler) {
        action('nextRouter.events.off')(type, handler);
      },
      emit(type) {
        action('nextRouter.events.emit')(type);
      },
    },
    isFallback: false,
    ...router,
  };

  Router.router = mockRouter;

  return (
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  );
}

MockRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MockRouter;
