import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import classnames from 'classnames';

import {
  Main,
} from 'containers';

import { toggleDarkMode } from 'actions';

import 'sass/animate.scss';
import 'sass/main.scss';
import 'sass/media.scss';

const mapStateToProps = ({ darkMode }) => ({ darkMode });

const App = ({ darkMode, toggleDarkMode }) => {

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkMode(true);
    };
  },[toggleDarkMode]);

  return (
    <main className={classnames("Main", { 'darkMode': darkMode })}>
      <Switch>
          <Route exact path="/" component={Main} />
          <Redirect from="/" to="/" />
      </Switch>
    </main>
  )
};


export default connect(mapStateToProps, { toggleDarkMode })(withRouter(App));
