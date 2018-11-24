/*
    Author: yoando
    Date: 2018
    Contact: y.n.dorny@gmail.com
    License: /
*/

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Index from './components/indexComponent';
import store from './store';
import {IntlProvider} from "react-intl";
import messages_fr from "./translations/fr";
import messages_en from "./translations/en";

const messages = {
    'fr': messages_fr,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];

const css = require('./main.scss');

render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Provider store={store}>
      <Index />
    </Provider>
  </IntlProvider>,
  document.getElementById('main'),
);
