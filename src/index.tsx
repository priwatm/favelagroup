import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {MainContainer} from 'src/containers/';

import 'primeicons/primeicons.css'
import 'src/assets/styles/common.scss'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainContainer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

