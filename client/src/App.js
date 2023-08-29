import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import CreatePostPage from './CreatePostPage';
import EditPostPage from './EditPostPage';
import SinglePostPage from './SinglePostPage';
import LoginPage from './LoginPage';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Navigation */}
        <Navigation />

        <div className="container mx-auto px-4 py-8">
          <Switch>
            {/* Login Page */}
            <Route exact path="/" component={LoginPage} />

            {/* Home Page */}
            <ProtectedRoute path="/home" component={HomePage} />

            {/* Create Post Page */}
            <ProtectedRoute path="/create-post" component={CreatePostPage} />

            {/* Edit Post Page */}
            <ProtectedRoute path="/edit-post/:postId" component={EditPostPage} />

            {/* Single Post Page */}
            <ProtectedRoute path="/post/:postId" component={SinglePostPage} />

            {/* Redirect to Home Page for unknown routes */}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
