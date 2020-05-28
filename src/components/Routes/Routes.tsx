import React from 'react';
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import Post from "../Articles/Post";
import PostItem from "../Articles/PostItem";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Router>
          <section className="grid">
            <div className="grid-item">
              <div className="inner">
                <Switch>
                  <Route exact to="/articles" component={Post}/>
                  <Route exact to="/articles/:id" component={PostItem}/>
                </Switch>
                <Post/>
              </div>
            </div>
          </section>
        </Router>
      </Switch>
    </section>
  );
}

export default Routes;
