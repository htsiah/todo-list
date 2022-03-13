import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
import PageLoader from './components/Common/PageLoader';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';

import { useAuth } from './components/Hooks/AuthHooks';
import { AuthContext } from './components/Contexts/AuthContext';

/* Used to render a lazy component with react-router */
const waitFor = (Tag) => (props) => <Tag {...props} />;

const Login = lazy(() => import('./components/Login/LoginForm'));
const Main = lazy(() => import('./components/Main/Main'));

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
  /* See full project for reference */
];

const Routes = ({ location }) => {
  const { isLogin, role, login, logout } = useAuth();
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 500, exit: 500 };

  // Animations supported
  //      'rag-fadeIn'
  //      'rag-fadeInRight'
  //      'rag-fadeInLeft'
  const animationName = 'rag-fadeIn';

  if (!isLogin) {
    return (
      <AuthContext.Provider
        value={{
          isLogin: isLogin,
          role: role,
          login: login,
          logout: logout,
        }}
      >
        <BasePage>
          <Suspense fallback={<PageLoader />}>
            <Switch location={location}>
              <Route path='/' component={waitFor(Login)} />
            </Switch>
          </Suspense>
        </BasePage>
      </AuthContext.Provider>
    );
  } else {
    return (
      // Layout component wrapper
      <Base>
        <TransitionGroup>
          <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
            <div>
              <Suspense fallback={<PageLoader />}>
                <Switch location={location}>
                  <Route path='/main' component={waitFor(Main)} />
                  <Redirect to='/main' />
                </Switch>
              </Suspense>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Base>
    );
  }
};

export default withRouter(Routes);
