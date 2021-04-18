import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home';

import NotFound from './pages/NotFound'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/not-found" component={NotFound} />

        <Redirect path="*" to="/not-found" />
      </Switch>
    </BrowserRouter>
  )
}