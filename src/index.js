import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { IntlProvider } from 'react-intl'
import { flattenMessages } from './utils'
import messages from './messages'

let params = new URLSearchParams(document.location.search.substring(1))
let locale = params.get("lang") || 'pt-BR'


ReactDOM.render(
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
        <App />
    </IntlProvider>, document.getElementById('root')
);
