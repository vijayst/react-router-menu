import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function Layout() {
  return (
    <div className="app">
      <div className="app__sidebar" />
      <main>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}