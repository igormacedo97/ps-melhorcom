import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import NotFound from './pages/NotFound'

export default function Routes() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/not-found" component={NotFound} />

          <Redirect path="*" to="/not-found" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}