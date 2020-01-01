import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import * as V from 'views';
import './App.css';

const routes = [
    {
       path: '/',
       component: V.MapPage,
    },
    {
        path: '/playground',
        component: V.Playground,
    },
];

function App() {
  return (
    <div className="App">
        <Router>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={true}
                />
            ))}
        </Router>
    </div>
  );
}

export default App;
