import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Favorite from './pages/favorite';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/favorites" component={Favorite} />
    </Switch>
  );
}
