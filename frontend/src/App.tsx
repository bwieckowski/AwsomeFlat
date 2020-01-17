import React from 'react';
import Helmet from 'react-helmet';
import {Provider} from "react-redux";
import * as P from './parts'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import * as V from 'views';
import './App.css';
import TopBar from "modules/TopBar/TopBar";
import {createStore} from "redux";
import rootReducer from "./store/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const routes = [
    {
       path: '/',
       component: V.MapPageView,
    },
    {
        path: '/playground',
        component: V.Playground,
    },
    {
        path: '/register',
        component: V.RegisterView,
    },
    {
        path: '/login',
        component: V.LoginView,
    }
];

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <div className="App">
        <Helmet link={[
            { rel: 'stylesheet', href: 'http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css' }
        ]}/>
        <P.Wrapper>
            <Provider store={store}>
                <Router>
                    <TopBar />
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={true}
                        />
                    ))}
                </Router>
            </Provider>
        </P.Wrapper>
    </div>
  );
}

export default App;
