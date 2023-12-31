import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import React from "react";

import './index.css'
import App from './App'
import {Provider} from "react-redux";
import {store} from "./store";

const root = createRoot(document.getElementById('root'));
console.log(store);

root.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

